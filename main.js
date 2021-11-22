// creo una variabile per il tasto "button"

const button = document.querySelector(".header-right > a");
console.log(button);

// creo una variabile per il menù a scomparsa

const blueBg = document.querySelector(".hamburger-menu");

// creo un evento in cui premendo il tasto "button" mi appare il menù 

button.addEventListener ("click", function(){
    blueBg.style.display = "block"
})

// Creo una variabile per il tasto X

const close = document.querySelector(".close");

// creo un evento per il quale cliccando il tasto "close" si chiude il menù
 
close.addEventListener ("click", function(){
    blueBg.style.display = "none"
})


