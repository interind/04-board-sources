const container = document.querySelector('#board');
const SQUARES_NUMBER = 600;
const colors = [
  '#fff',
  '#00f',
  '#0f0',
  '#6fc',
  '#cff',
  '#c69',
  '#6f6',
  '#c00'
];
const buttonClear = document.querySelector('.button-clear');

buttonClear.addEventListener('mousedown', () => {
 const fixes = container.querySelectorAll('.fix');
 fixes.forEach((fix) => clearColor.apply(fix));
});

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', clearColor);
  square.addEventListener('mousedown', fixColor);

  container.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function clearColor() {
  this.style.background = '#1d1d1d';
  this.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function fixColor(evt) {
  if (!evt.target.classList.contains('fix')) {
    evt.target.classList.add('fix');
  }
  evt.target.removeEventListener('mouseleave', clearColor);
}