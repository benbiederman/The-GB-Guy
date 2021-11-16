const eatBtn = document.querySelector('.eat-option');
const drinkBtn = document.querySelector('.drink-option');
const seeBtn = document.querySelector('.see-option');
const miscBtn = document.querySelector('.misc-option');

eatBtn.addEventListener('click', () => {
    window.location.href = "/locals-guide/eat.html";
})

drinkBtn.addEventListener('click', () => {
    window.location.href = "/locals-guide/drink.html";
})

seeBtn.addEventListener('click', () => {
    window.location.href = "/locals-guide/see.html";
})

miscBtn.addEventListener('click', () => {
    window.location.href = "/locals-guide/misc.html";
})