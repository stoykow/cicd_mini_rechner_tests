import { addiere, teile } from './rechner.js';

// Erstellt aus zwei Zahlen einen kleinen Bericht mit Rechnung und Text.
export function erstelleRechenbericht(a, b) {
  // Die eigentliche Mathematik kommt aus den Rechner-Funktionen.
  const summe = addiere(a, b);
  const quotient = teile(a, b);

  // Das Objekt bündelt Eingaben, Ergebnisse und einen lesbaren Satz.
  return {
    eingabe: { a, b },
    summe,
    quotient,
    text: `${a} plus ${b} ergibt ${summe}. ${a} geteilt durch ${b} ergibt ${quotient}.`
  };
}
