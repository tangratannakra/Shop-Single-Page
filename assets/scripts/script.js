const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => menu.classList.toggle('menu-active'));

//The Gallery
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const currentImage = document.querySelector('.current');
const imgs = document.querySelectorAll('.thumbs img');

imgs.forEach(img => img.addEventListener('click', (e) => currentImage.src = e.target.src))


let i = imgs.length;


nextBtn.onclick = () => {

    i = (i < imgs.length - 1) ? (i = i + 1) : (i = 0);
    currentImage.src = imgs[i].src;
}

prevBtn.onclick = () => {
    i = (i < imgs.length && i > 0) ? (i = i - 1) : (i = imgs.length - 1);
    currentImage.src = imgs[i].src;
}


// Clear Selection
const clear = document.querySelector('.clear-selection');
const color = document.querySelector('.color');
const size = document.querySelector('.size');
const quantity = document.querySelector('.quantity-value');

clear.onclick = () => {
    color.value = 'red';
    size.value = 'default';
    quantity.value = '1';
}

//increment/decrement quantity
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');

let x = quantity.value;
x = parseInt(x);

plusBtn.onclick = (e) => {
    e.preventDefault();
    x = x + 1;
    quantity.value = x;
}

minusBtn.onclick = (e) => {
    e.preventDefault();
    x = x > 1 ? x - 1 : x = 1;
    quantity.value = x;
}