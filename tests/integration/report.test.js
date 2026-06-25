import test from 'node:test';
import assert from 'node:assert/strict';
import { erstelleRechenbericht } from '../../src/report.js';

// Prüft, ob mehrere Rechner-Funktionen zusammen einen vollständigen Bericht bauen.
test('erstelleRechenbericht kombiniert Rechenfunktionen zu einem Ergebnis', () => {
  const bericht = erstelleRechenbericht(8, 2);

  // Vergleicht die wichtigsten Teile des Berichts mit den erwarteten Werten.
  assert.deepEqual(bericht.eingabe, { a: 8, b: 2 });
  assert.equal(bericht.summe, 10);
  assert.equal(bericht.quotient, 4);
  assert.match(bericht.text, /8 plus 2 ergibt 10/);
});
