/* Outils partagés des fonctions serveur (Vercel + base Neon Postgres) */
import { neon } from '@neondatabase/serverless';
import crypto from 'node:crypto';

const DB_URL = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL_UNPOOLED || process.env.POSTGRES_PRISMA_URL;
const sql = DB_URL ? neon(DB_URL) : null;
let ready = null;
const init = () => (ready = ready || sql`create table if not exists fuc_kv (key text primary key, value jsonb not null, updated_at timestamptz default now())`);

/* Petit magasin clé → valeur (JSON) dans une table Postgres */
const MEM = process.env.FUC_MOCK ? new Map() : null; // test local uniquement
export const redis = MEM ? { async get(k) { return MEM.has(k) ? JSON.parse(MEM.get(k)) : null; }, async set(k, v) { MEM.set(k, JSON.stringify(v)); return true; } } : sql ? {
  async get(key) { await init(); const r = await sql`select value from fuc_kv where key = ${key}`; return r.length ? r[0].value : null; },
  async set(key, value) { await init(); await sql`insert into fuc_kv (key, value, updated_at) values (${key}, ${JSON.stringify(value)}::jsonb, now()) on conflict (key) do update set value = excluded.value, updated_at = now()`; return true; }
} : null;
const token = DB_URL;
export const PRIVATE = ['orders', 'messages', 'subscribers', 'notifications', 'clientNotes', 'settings'];
const SECRET = process.env.SESSION_SECRET || token || 'fucstyle';

export const hash = (s) => crypto.createHash('sha256').update(String(s) + '|' + SECRET).digest('hex');
export const sessionFor = (pwHash) => crypto.createHmac('sha256', SECRET).update(pwHash).digest('hex');

export function send(res, code, body) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}
export async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const chunks = []; for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString('utf8');
  try { return raw ? JSON.parse(raw) : {}; } catch (e) { return {}; }
}
export function noDb(res) { return send(res, 503, { error: 'nodb', message: 'Base de données non branchée.' }); }

/* Mot de passe admin : stocké haché dans Redis. Au premier lancement : ADMIN_PASSWORD ou 6969. */
export async function passwordHash() {
  let h = await redis.get('fuc:pw');
  if (!h) { h = hash(process.env.ADMIN_PASSWORD || '6969'); await redis.set('fuc:pw', h); }
  return h;
}
export async function isAdmin(req) {
  const t = req.headers['x-admin-token'];
  if (!t || !redis) return false;
  return t === sessionFor(await passwordHash());
}

/* Document du site (tout sauf commandes / messages / inscrits, rangés à part) */
export async function getSite() { return (await redis.get('fuc:site')) || null; }
export async function getList(key) { return (await redis.get('fuc:' + key)) || []; }
export async function setList(key, v) { await redis.set('fuc:' + key, v); }
export function publicView(site) {
  const s = Object.assign({}, site);
  PRIVATE.forEach((k) => delete s[k]);
  return s;
}

/* Notification push sur l'appli de Jeff */
export async function pushToAdmin(payload) {
  try {
    const subs = (await redis.get('fuc:pushsubs')) || [];
    if (!subs.length) return 0;
    const webpush = (await import('web-push')).default;
    const keys = await vapid();
    webpush.setVapidDetails('mailto:fucstyler@gmail.com', keys.publicKey, keys.privateKey);
    const alive = []; let ok = 0;
    for (const s of subs) {
      try { await webpush.sendNotification(s, JSON.stringify(payload), { TTL: 86400, urgency: 'high' }); alive.push(s); ok++; }
      catch (e) { if (e.statusCode !== 404 && e.statusCode !== 410) alive.push(s); }
    }
    await redis.set('fuc:pushsubs', alive);
    return ok;
  } catch (e) { return 0; /* une notif ratée ne bloque jamais une commande */ }
}
export async function vapid() {
  let k = await redis.get('fuc:vapid');
  if (!k) { const webpush = (await import('web-push')).default; k = webpush.generateVAPIDKeys(); await redis.set('fuc:vapid', k); }
  return k;
}
