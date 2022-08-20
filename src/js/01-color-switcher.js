const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
const PROMPT_DELAY = 1000;
let timerId = null;

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

btnStop.setAttribute('disabled', '');

function onBtnStart() {
  btnStart.setAttribute('disabled', '');
  btnStop.removeAttribute('disabled');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, PROMPT_DELAY);
}

function onBtnStop() {
  clearInterval(timerId);
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
