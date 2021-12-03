const eatBtn = document.querySelector('.eat-option');
const drinkBtn = document.querySelector('.drink-option');
const doBtn = document.querySelector('.do-option');
const miscBtn = document.querySelector('.misc-option');

eatBtn.addEventListener('click', () => {
    window.location.href = "/locals-guide/eat.html";
})

drinkBtn.addEventListener('click', () => {
    window.location.href = "/locals-guide/drink.html";
})

doBtn.addEventListener('click', () => {
    window.location.href = "/locals-guide/do.html";
})

miscBtn.addEventListener('click', () => {
    window.location.href = "/locals-guide/misc.html";
})