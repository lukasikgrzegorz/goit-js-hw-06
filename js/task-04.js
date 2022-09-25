let counterValue = 0;
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const counterVal = document.querySelector("#value");

btnDec.addEventListener('click', () => {
    counterValue--;
    counterVal.textContent = counterValue;
})

btnInc.addEventListener('click', () => {
    counterValue++;
    counterVal.textContent = counterValue;
})