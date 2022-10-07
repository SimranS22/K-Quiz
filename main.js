let menu=document.querySelector('#menu-btn');
let navbar= document.querySelector('.navbar');

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

