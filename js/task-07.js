const sizeControler = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
spanText.style.fontSize = sizeControler.value + "px";

sizeControler.addEventListener('change', () => {
    spanText.style.fontSize = sizeControler.value + "px";
})