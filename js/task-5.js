const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor() {
  // text.textContent = getRandomHexColor()

  document.body.style.backgroundColor = text.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


