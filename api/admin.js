/* POST /api/admin {action:'login', password}            -> jeton de session
   GET  /api/admin  (jeton)                              -> tout : site + commandes + messages + inscrits
   POST /api/admin {action:'password', current, next}    -> change le mot de passe
   POST /api/admin {action:'patch', list, upsert, remove} -> met à jour commandes / messages / inscrits sans rien écraser
   POST /api/admin {action:'push', subscription}         -> inscrit le téléphone aux notifications
   GET  /api/admin?vapid=1                               -> clé publique des notifications */
import { redis, send, readBody, noDb, isAdmin, hash, sessionFor, passwordHash, getSite, getList, setList, vapid } from './_lib.js';

export default async function handler(req, res) {
  if (!redis) return noDb(res);
  try { return await main(req, res); } catch (e) { return send(res, 500, { error: 'server', message: String(e && e.message || e).slice(0, 200) }); }
}
async function main(req, res) {
  if (req.method === 'GET' && req.query && req.query.vapid) return send(res, 200, { publicKey: (await vapid()).publicKey });
  if (req.method === 'GET') {
    if (!(await isAdmin(req))) return send(res, 401, { error: 'auth' });
    const [site, orders, messages, subscribers] = await Promise.all([getSite(), getList('orders'), getList('messages'), getList('subscribers')]);
    return send(res, 200, { site, orders, messages, subscribers });
  }
  if (req.method !== 'POST') return send(res, 405, { error: 'method' });
  const b = await readBody(req);
  if (b.action === 'login') {
    const h = await passwordHash();
    if (hash(b.password || '') !== h) { await new Promise((r) => setTimeout(r, 600)); return send(res, 401, { error: 'bad' }); }
    return send(res, 200, { token: sessionFor(h) });
  }
  if (!(await isAdmin(req))) return send(res, 401, { error: 'auth' });
  if (b.action === 'password') {
    if (hash(b.current || '') !== (await passwordHash())) return send(res, 403, { error: 'current' });
    if (String(b.next || '').length < 6) return send(res, 400, { error: 'short' });
    const h = hash(b.next); await redis.set('fuc:pw', h);
    return send(res, 200, { token: sessionFor(h) });
  }
  if (b.action === 'patch' && ['orders', 'messages', 'subscribers'].includes(b.list)) {
    const key = b.list === 'subscribers' ? 'email' : 'id';
    const cur = await getList(b.list);
    const rm = new Set(b.remove || []);
    const up = new Map((b.upsert || []).map((x) => [x[key], x]));
    const out = cur.filter((x) => !rm.has(x[key])).map((x) => (up.has(x[key]) ? (up.get(x[key]), Object.assign({}, x, up.get(x[key]))) : x));
    up.forEach((v, k) => { if (!cur.some((x) => x[key] === k)) out.unshift(v); });
    await setList(b.list, out);
    return send(res, 200, { ok: true, count: out.length });
  }
  if (b.action === 'push' && b.subscription && b.subscription.endpoint) {
    const subs = (await redis.get('fuc:pushsubs')) || [];
    if (!subs.some((s) => s.endpoint === b.subscription.endpoint)) subs.push(b.subscription);
    await redis.set('fuc:pushsubs', subs);
    return send(res, 200, { ok: true });
  }
  return send(res, 400, { error: 'action' });
}
