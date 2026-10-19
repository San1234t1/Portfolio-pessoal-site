// Prévia local usada somente para conferir este projeto no navegador.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const projectRoot = path.resolve(__dirname, '..');
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.ttf': 'font/ttf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

http.createServer((request, response) => {
  const urlPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const filePath = path.resolve(projectRoot, '.' + (urlPath === '/' ? '/index.html' : urlPath));
  if (!filePath.startsWith(projectRoot + path.sep)) {
    response.writeHead(403).end();
    return;
  }

  fs.readFile(filePath, (error, data) => {
    response.writeHead(error ? 404 : 200, {
      'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    response.end(error ? 'Arquivo não encontrado.' : data);
  });
}).listen(4174, '127.0.0.1', () => {
  console.log('http://127.0.0.1:4174/');
});
