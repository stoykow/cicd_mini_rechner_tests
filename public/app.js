const statusElement = document.querySelector('#status');
const button = document.querySelector('#demo-button');

button.addEventListener('click', () => {
  const ergebnis = 2 + 3;
  statusElement.textContent = `2 + 3 = ${ergebnis}`;
});
