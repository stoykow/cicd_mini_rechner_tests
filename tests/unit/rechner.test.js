import test from 'node:test';
import assert from 'node:assert/strict';
import { addiere, subtrahiere, teile } from '../../src/rechner.js';

// Prüft die Addition mit einfachen Beispielzahlen.
test('addiere addiert zwei positive Zahlen', () => {
  assert.equal(addiere(2, 3), 5);
});

// Prüft die Addition mit einfachen Float-Zahlen.
test('addiere addiert zwei positive Float-Zahlen', () => {
  assert.equal(addiere(0.1, 0.2), 0.3);
});

// Prüft, ob die zweite Zahl korrekt abgezogen wird.
test('subtrahiere zieht die zweite Zahl ab', () => {
  assert.equal(subtrahiere(10, 4), 6);
});

// Prüft eine normale Division ohne Sonderfall.
test('teile dividiert zwei Zahlen', () => {
  assert.equal(teile(8, 2), 4);
});

// Prüft, ob Division durch 0 sauber blockiert wird.
test('teile verhindert Division durch 0', () => {
  assert.throws(() => teile(8, 0), /Division durch 0/);
});

// Prüft, ob Text statt Zahl als ungültig erkannt wird.
test('addiere lehnt ungültige Werte ab', () => {
  assert.throws(() => addiere('2', 3), /muss eine Zahl sein/);
});
