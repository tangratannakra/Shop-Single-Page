const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => menu.classList.toggle('menu-active'));

//The Gallery Slider

    //TO DO: left and righ arrow keybord navigation to be added
        
         //grabbing buttons and listeting for clicks
         const nextBtn = document.querySelector('.next');
         const prevBtn = document.querySelector('.prev');
         const currentImage = document.querySelector('.current');
         const imgs = document.querySelectorAll('.thumbs img');

         imgs.forEach(img => img.addEventListener('click', (e) => currentImage.src = e.target.src))

         //nextBtn.addEventListener('click', changeCurrent);
        // prevBtn.addEventListener('click', changeCurrent);