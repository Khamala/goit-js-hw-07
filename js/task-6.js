const input = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');

createButton.addEventListener('click', ()=>createBoxes(Number(input.value)));
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return alert('Не валидное число');
  };

  destroyBoxes();

  let size = 30;
  const boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement('div');
    elem.style.width = `${size}px`;
    elem.style.height = `${size}px`;
    elem.style.backgroundColor = getRandomHexColor();

    boxesArray.push(elem);
    size += 10;
  }
  divBoxes.append(...boxesArray);

  input.value = '';
};

function destroyBoxes() {
  divBoxes.innerHTML = '';

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
