const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timer = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}

startButton.addEventListener('click', () => {
 timer = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
  startButton.setAttribute('disabled', 'disabled');
  stopButton.removeAttribute('disabled');
});

stopButton.addEventListener('click', () => {
 startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', 'disabled');
  clearInterval(timer);
});