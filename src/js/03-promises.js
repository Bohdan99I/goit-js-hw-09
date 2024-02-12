import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;

  const validatedDelay = Number(delay.value);
  const validatedStep = Number(step.value);
  const validatedAmount = Number(amount.value);

  if (
    isNaN(validatedDelay) ||
    isNaN(validatedStep) ||
    isNaN(validatedAmount) ||
    validatedDelay <= 0 ||
    validatedStep <= 0 ||
    validatedAmount <= 0
  ) {
    Notiflix.Notify.failure('Please enter valid positive numbers');
    return;
  }

  for (let i = 0, position = 1; i < validatedAmount; i += 1, position += 1) {
    const currentDelay = validatedDelay + validatedStep * i;

    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
