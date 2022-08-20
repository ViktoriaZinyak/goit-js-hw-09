import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const selector = document.querySelector('#datetime-picker');
const button = document.querySelector('[data-start]');
const date = new Date();
let deltaTime = 0;

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
      window.alert('Please choose a date in the future');
    }
    button.disabled = false;
  },
};

flatpickr(selector, options);

// console.log(new Date(selector.value));

function onBtnStart() {
  const futureDate = new Date(selector.value);
  deltaTime = futureDate.getTime() - date.getTime();
  return deltaTime;
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

convertMs(100000);
console.log('bb');
