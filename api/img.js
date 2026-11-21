/* GET /api/img?u=… : relaie une photo de fucstyle.fr ou de Vercel Blob (pour la détourer dans le tableau de bord) */
import { send } from './_lib.js';
const OK = /^https:\/\/((www\.)?fucstyle\.fr|[a-z0-9-]+\.public\.blob\.vercel-storage\.com)\//i;
export default async function handler(req, res) {
  const u = String((req.query && req.query.u) || '');
  if (!OK.test(u)) return send(res, 400, { error: 'url' });
  try {
    const r = await fetch(u);
    if (!r.ok) return send(res, 502, { error: 'fetch' });
    const type = r.headers.get('content-type') || '';
    if (!/^image\//.test(type)) return send(res, 415, { error: 'type' });
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length > 12 * 1024 * 1024) return send(res, 413, { error: 'size' });
    res.statusCode = 200; res.setHeader('Content-Type', type); res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.end(buf);
  } catch (e) { return send(res, 502, { error: 'fetch' }); }
}
