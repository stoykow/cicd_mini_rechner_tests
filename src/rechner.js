function pruefeZahl(wert, name) {
  if (typeof wert !== 'number' || Number.isNaN(wert)) {
    throw new TypeError(`${name} muss eine Zahl sein.`);
  }
}

export function addiere(a, b) {
  pruefeZahl(a, 'a');
  pruefeZahl(b, 'b');

  return a + b;
}

export function subtrahiere(a, b) {
  pruefeZahl(a, 'a');
  pruefeZahl(b, 'b');

  return a - b;
}

export function teile(a, b) {
  pruefeZahl(a, 'a');
  pruefeZahl(b, 'b');

  if (b === 0) {
    throw new RangeError('Division durch 0 ist nicht erlaubt.');
  }

  return a / b;
}
