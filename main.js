// creo una variabile per il tasto "button"

const show = document.querySelector(".header-right > a");
console.log(show);

// creo una variabile per il menù a scomparsa

const blueBg = document.querySelector(".hamburger-menu");
console.log(blueBg);

// creo un evento in cui premendo il tasto "button" mi appare il menù 

show.addEventListener ("click", function(){
    blueBg.classList.add ("active");
    console.log("Now you see the menù");
})



// Creo una variabile per il tasto X

const close = document.querySelector(".close");

// creo un evento per il quale cliccando il tasto "close" si chiude il menù
 
close.addEventListener ("click", function(){
    blueBg.classList.remove ("active");
    console.log("Now you don't see the menù");
})


