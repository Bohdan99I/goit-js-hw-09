const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timer = null;

const DISABLED_ATTR = 'disabled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

startButton.addEventListener('click', () => {
  timer = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
  startButton.setAttribute(DISABLED_ATTR, DISABLED_ATTR);
  stopButton.removeAttribute(DISABLED_ATTR);
});

stopButton.addEventListener('click', () => {
  startButton.removeAttribute(DISABLED_ATTR);
  stopButton.setAttribute(DISABLED_ATTR, DISABLED_ATTR);
  clearInterval(timer);
});
