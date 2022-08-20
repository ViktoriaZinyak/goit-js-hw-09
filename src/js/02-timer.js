import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const selector = document.querySelector('#datetime-picker');
const button = document.querySelector('[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
const date = new Date();
let deltaTime = 0;
const PROMPT_DELAY = 1000;

button.disabled = true;
button.addEventListener('click', onBtnStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  //   onClose(selectedDates) {
  //     console.log(selectedDates[0]);
  //   },
  onClose(selectedDates) {
    if (selectedDates[0] < date) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      button.disabled = false;
    }
  },
};

flatpickr(selector, options);

// console.log(new Date(selector.value));

function onBtnStart() {
  timerId = setInterval(() => {
    const futureDate = new Date(selector.value);
    const date = new Date();
    deltaTime = convertMs(futureDate.getTime() - date.getTime());
    if (futureDate.getTime() - date.getTime() <= 1000) {
      clearInterval(timerId);
      button.disabled = true;
    }

    console.log(deltaTime);
    const { days, hours, minutes, seconds } = deltaTime;
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    secondsEl.textContent = addLeadingZero(seconds);
    minutesEl.textContent = addLeadingZero(minutes);
  }, PROMPT_DELAY);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(param) {
  return String(param).padStart(2, '0');
}
