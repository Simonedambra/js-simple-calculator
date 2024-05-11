'use strict'

const clicknumeri = document.querySelector('.numbers')
const clickplus = document.getElementById('add')
clicknumeri.addEventListener('click', function (e) {
    let num1 = []
    let num2 = [];
    let aggiunta1 = 0;
    let num = (e.target);
    let numValue = num.innerText;

    if (e.target.className !== 'numeri' && e.target.className !== 'large') {
        console.log('hai cliccato non su un bottone')

    } else if (e.target.className === 'numeri') {

        let numer = '';
        let numerotot = numer += numValue;


        console.log('è numeri');
    } else if (e.target.className === 'large') {

        aggiunta1 = num1 += numValue;
        console.log('è numeri')

    }
    console.log(numerotot);
    console.log(num1);
});


