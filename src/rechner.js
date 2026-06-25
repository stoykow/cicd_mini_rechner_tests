// Prüft, ob ein Wert wirklich eine Zahl ist, bevor gerechnet wird.
function pruefeZahl(wert, name) {
  if (typeof wert !== 'number' || Number.isNaN(wert)) {
    throw new TypeError(`${name} muss eine Zahl sein.`);
  }
}

// Addiert zwei Zahlen und gibt das Ergebnis zurück.
export function addiere(a, b) {
  pruefeZahl(a, 'a');
  pruefeZahl(b, 'b');

  return a + b;
}

// Zieht die zweite Zahl von der ersten Zahl ab.
export function subtrahiere(a, b) {
  pruefeZahl(a, 'a');
  pruefeZahl(b, 'b');

  return a - b;
}

// Teilt die erste Zahl durch die zweite Zahl.
export function teile(a, b) {
  pruefeZahl(a, 'a');
  pruefeZahl(b, 'b');

  // Durch 0 darf man nicht teilen, deshalb wird hier ein Fehler ausgelöst.
  if (b === 0) {
    throw new RangeError('Division durch 0 ist nicht erlaubt.');
  }

  return a / b;
}
