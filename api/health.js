/* GET /api/health : état de la base et du stockage photos (sans rien révéler de secret) */
import { redis, send } from './_lib.js';
export default async function handler(req, res) {
  const out = { db: 'absente', photos: process.env.BLOB_READ_WRITE_TOKEN ? 'ok' : 'absent', site: false };
  if (redis) {
    try { const s = await redis.get('fuc:site'); out.db = 'ok'; out.site = !!s; }
    catch (e) { out.db = 'erreur : ' + String(e && e.message || e).slice(0, 160); }
  }
  return send(res, 200, out);
}
