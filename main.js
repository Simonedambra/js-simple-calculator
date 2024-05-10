'use strict'
let risultato = document.querySelector('#result')
let somma = 0;
const buttonrow = document.querySelector('.numbers')
buttonrow.addEventListener('click', function (e) {

    let valore = (e.target.innerHTML);
    let numeri = parseInt(valore)
    somma += numeri;

    console.log(somma)
    risultato.innerText = (somma)
})




