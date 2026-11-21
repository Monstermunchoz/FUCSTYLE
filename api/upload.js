/* POST /api/upload {name, dataUrl} (admin) : envoie une photo sur Vercel Blob et renvoie son adresse */
import { put } from '@vercel/blob';
import { send, readBody, isAdmin } from './_lib.js';
export const config = { api: { bodyParser: { sizeLimit: '8mb' } } };
export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'method' });
  if (!(await isAdmin(req))) return send(res, 401, { error: 'auth' });
  if (!process.env.BLOB_READ_WRITE_TOKEN) return send(res, 503, { error: 'noblob' });
  const b = await readBody(req);
  const m = String(b.dataUrl || '').match(/^data:(image\/(png|jpeg|webp|gif));base64,(.+)$/);
  if (!m) return send(res, 400, { error: 'image' });
  const buf = Buffer.from(m[3], 'base64');
  if (buf.length > 6 * 1024 * 1024) return send(res, 413, { error: 'size' });
  const safe = String(b.name || 'photo').toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, '-').slice(0, 40) || 'photo';
  const blob = await put(`fucstyle/${safe}.${m[2] === 'jpeg' ? 'jpg' : m[2]}`, buf, { access: 'public', contentType: m[1], addRandomSuffix: true });
  return send(res, 200, { url: blob.url });
}
