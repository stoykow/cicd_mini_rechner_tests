import test from 'node:test';
import assert from 'node:assert/strict';
import { addiere, subtrahiere, teile } from '../../src/rechner.js';

test('addiere addiert zwei positive Zahlen', () => {
  assert.equal(addiere(2, 3), 5);
});

test('subtrahiere zieht die zweite Zahl ab', () => {
  assert.equal(subtrahiere(10, 4), 6);
});

test('teile dividiert zwei Zahlen', () => {
  assert.equal(teile(8, 2), 4);
});

test('teile verhindert Division durch 0', () => {
  assert.throws(() => teile(8, 0), /Division durch 0/);
});

test('addiere lehnt ungültige Werte ab', () => {
  assert.throws(() => addiere('2', 3), /muss eine Zahl sein/);
});
