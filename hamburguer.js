
const  hamburguer =document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');

const chamada = document.querySelector('.chamada')

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active');
    menu.classList.toggle('active');
    chamada.classList.toggle('active');



})
// botao fim

