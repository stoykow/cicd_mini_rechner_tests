import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

function starteServer() {
  const server = createServer(async (request, response) => {
    const path = request.url === '/' ? 'index.html' : request.url.slice(1);
    const filePath = join(process.cwd(), 'public', path);

    try {
      const inhalt = await readFile(filePath);
      response.writeHead(200);
      response.end(inhalt);
    } catch {
      response.writeHead(404);
      response.end('Nicht gefunden');
    }
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      resolve({ server, url: `http://127.0.0.1:${address.port}` });
    });
  });
}

test('Startseite ist über den lokalen Server erreichbar', async () => {
  const { server, url } = await starteServer();

  try {
    const response = await fetch(url);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(html, /Mini-Rechner/);
    assert.match(html, /app.js/);
  } finally {
    server.close();
  }
});
