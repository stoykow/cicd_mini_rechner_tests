import { mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

// Legt den Ordner für Testberichte an, falls er noch fehlt.
mkdirSync('reports', { recursive: true });

// Startet Node im Testmodus und schreibt das Ergebnis als TAP-Datei.
const result = spawnSync(
  process.execPath,
  [
    '--test',
    '--test-reporter=tap',
    '--test-reporter-destination=reports/test-output.tap',
    'tests/unit/rechner.test.js',
    'tests/integration/report.test.js',
    'tests/e2e/index-smoke.test.js'
  ],
  { stdio: 'inherit' }
);

// Gibt denselben Fehlercode zurück wie der Testlauf.
process.exit(result.status ?? 1);
