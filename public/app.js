// Holt die wichtigen HTML-Elemente aus der Seite.
const statusElement = document.querySelector('#status');
const button = document.querySelector('#demo-button');

// Reagiert, sobald der Benutzer auf den Demo-Button klickt.
button.addEventListener('click', () => {
  const ergebnis = 2 + 3;

  // Schreibt das Rechenergebnis sichtbar in die Seite.
  statusElement.textContent = `2 + 3 = ${ergebnis}`;
});
