import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Startet einen kleinen lokalen Webserver nur für diesen Test.
function starteServer() {
  const server = createServer(async (request, response) => {
    // Bei "/" wird die Startseite geladen, sonst die angefragte Datei.
    const path = request.url === '/' ? 'index.html' : request.url.slice(1);
    const filePath = join(process.cwd(), 'public', path);

    try {
      // Datei aus dem public-Ordner lesen und an den Browser zurückgeben.
      const inhalt = await readFile(filePath);
      response.writeHead(200);
      response.end(inhalt);
    } catch {
      // Wenn die Datei nicht existiert, antwortet der Server mit 404.
      response.writeHead(404);
      response.end('Nicht gefunden');
    }
  });

  // Port 0 heißt: Node sucht automatisch einen freien Port.
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      resolve({ server, url: `http://127.0.0.1:${address.port}` });
    });
  });
}

// Prüft grob, ob die Webseite geladen wird und die erwarteten Inhalte enthält.
test('Startseite ist über den lokalen Server erreichbar', async () => {
  const { server, url } = await starteServer();

  try {
    // Ruft die Startseite wie ein sehr einfacher Browser ab.
    const response = await fetch(url);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(html, /Mini-Rechner/);
    assert.match(html, /Berechnen/);
    assert.match(html, /styles.css/);
    assert.match(html, /app.js/);
  } finally {
    // Der Testserver wird immer beendet, auch wenn ein Test fehlschlägt.
    server.close();
  }
});
