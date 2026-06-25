import { addiere, teile } from './rechner.js';

export function erstelleRechenbericht(a, b) {
  const summe = addiere(a, b);
  const quotient = teile(a, b);

  return {
    eingabe: { a, b },
    summe,
    quotient,
    text: `${a} plus ${b} ergibt ${summe}. ${a} geteilt durch ${b} ergibt ${quotient}.`
  };
}
