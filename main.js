'use strict'
let risultato = document.querySelector('#result')
let somma = []

const buttonrow = document.querySelector('.numbers')
buttonrow.addEventListener('click', function (e) {
    let valore = (e.target.innerHTML);
    let numeri = parseInt(valore)
    somma.push += (numeri);

    console.log(somma)
    risultato.innerText = (somma)
})




