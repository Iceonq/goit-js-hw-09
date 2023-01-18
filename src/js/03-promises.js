const delayInput = document.querySelector('[name = delay]');
const stepInput = document.querySelector('[name = step]');
const amountInput = document.querySelector('[name = amount]');
const promiseButton = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

promiseButton.addEventListener('click', e => {
  e.preventDefault();
  setTimeout(() => {
    for (let i = 1; i <= amountInput.value; i++) {
      setTimeout(() => {
        createPromise(i, delayInput.value);
      }, stepInput.value * i);
    }
  }, delayInput.value);
});
