'use strict'

const buttonrow = document.querySelector('.numbers')
buttonrow.addEventListener('click', function (e) {
    let valore = (e.target.innerHTML);
    let numeri = parseInt(valore)
    console.log(numeri);

})






