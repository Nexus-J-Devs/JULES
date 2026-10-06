import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 8000;
const ROOT = process.cwd();

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  let filePath = path.join(ROOT, urlPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // SPA fallback to index.html
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(ROOT, 'index.html')).pipe(res);
  }
}).listen(PORT, () => console.log(`Server listening on ${PORT}`));
