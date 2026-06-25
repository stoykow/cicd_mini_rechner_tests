// Holt die wichtigen HTML-Elemente aus der Seite.
const form = document.querySelector('#rechner-form');
const zahlAElement = document.querySelector('#zahl-a');
const zahlBElement = document.querySelector('#zahl-b');
const operatorElement = document.querySelector('#operator');
const ergebnisElement = document.querySelector('#ergebnis');

// Rechnet je nach ausgewählter Rechenart.
function berechne(a, b, operator) {
  if (operator === 'plus') {
    return a + b;
  }

  if (operator === 'minus') {
    return a - b;
  }

  if (operator === 'mal') {
    return a * b;
  }

  if (b === 0) {
    throw new Error('Division durch 0 ist nicht erlaubt.');
  }

  return a / b;
}

// Reagiert, sobald der Benutzer das Formular abschickt.
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Eingaben aus Textfeldern kommen erst als Text und werden hier zu Zahlen.
  const a = Number(zahlAElement.value);
  const b = Number(zahlBElement.value);
  const operator = operatorElement.value;

  try {
    const ergebnis = berechne(a, b, operator);

    // Schreibt das Rechenergebnis sichtbar in die Seite.
    ergebnisElement.textContent = `Ergebnis: ${ergebnis}`;
  } catch (error) {
    ergebnisElement.textContent = error.message;
  }
});
