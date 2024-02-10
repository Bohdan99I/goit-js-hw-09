import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let countdownInterval = null;

startButton.setAttribute('disabled', 'disabled');

const onPress = () => {
  countdownInterval = setInterval(() => {
    const currentDate = new Date(input.value);
    const time = currentDate - Date.now();

    if (time <= 0) {
      clearInterval(countdownInterval);
      return;
    }

    const convertTime = convertMs(time);
    updateClockFace(convertTime);
  }, 1000);

  startButton.setAttribute('disabled', 'disabled');
};

const options = {
  isActive: false,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      input.value = '';
      return;
    }
  },

  onChange(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      startButton.removeAttribute('disabled');
    } else {
      startButton.setAttribute('disabled', 'disabled');
    }
  },
};

flatpickr(input, options);

startButton.addEventListener('click', onPress);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateClockFace({ days, hours, minutes, seconds }) {
  dataDays.textContent = addLeadingZero(days);
  dataHours.textContent = addLeadingZero(hours);
  dataMinutes.textContent = addLeadingZero(minutes);
  dataSeconds.textContent = addLeadingZero(seconds);
}
