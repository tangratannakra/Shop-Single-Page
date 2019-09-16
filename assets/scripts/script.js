const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => menu.classList.toggle('menu-active'));

//The Gallery Slider
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const currentImage = document.querySelector('.current');         
const imgs = document.querySelectorAll('.thumbs img');

imgs.forEach(img => img.addEventListener('click', (e) => currentImage.src = e.target.src))
currentImage.src = imgs[0].src;
        
let i = imgs.length;

nextBtn.onclick = () => {
    i = (i < imgs.length-1)?(i = i+1):(i=0);
    currentImage.src = imgs[i].src;
         }
       
    prevBtn.onclick = () => {
        i = (i < imgs.length + 1 && i > 0 )?(i =i-1):(i=imgs.length);
        currentImage.src = imgs[i].src;
         }