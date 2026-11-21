/* POST /api/contact {type:'message'|'subscribe', ...} : formulaire de contact et newsletter */
import { redis, send, readBody, noDb, getList, setList, pushToAdmin } from './_lib.js';
const clip = (s, n) => String(s || '').slice(0, n);
export default async function handler(req, res) {
  if (!redis) return noDb(res);
  if (req.method !== 'POST') return send(res, 405, { error: 'method' });
  const b = await readBody(req);
  const email = clip(b.email, 200).trim().toLowerCase();
  if (!/^\S+@\S+\.\S+$/.test(email)) return send(res, 400, { error: 'email' });
  if (b.type === 'subscribe') {
    const subs = await getList('subscribers');
    if (!subs.some((s) => s.email === email)) { subs.unshift({ email, date: new Date().toISOString() }); await setList('subscribers', subs); await pushToAdmin({ title: 'Nouveau dans la team 🩸', body: email + ' a rejoint la team (' + subs.length + ' inscrits)', url: './#/team' }); }
    return send(res, 200, { ok: true });
  }
  const msg = { id: 'msg-' + Date.now().toString(36), date: new Date().toISOString(), read: false, name: clip(b.name, 120), email, phone: clip(b.phone, 40), subject: clip(b.subject, 60), message: clip(b.message, 5000) };
  if (!msg.message.trim()) return send(res, 400, { error: 'message' });
  const list = await getList('messages'); list.unshift(msg); await setList('messages', list.slice(0, 500));
  await pushToAdmin({ title: 'Nouveau message : ' + msg.subject, body: (msg.name || email) + ' — ' + msg.message.slice(0, 80), url: './#/messages/' + msg.id });
  return send(res, 200, { ok: true });
}
