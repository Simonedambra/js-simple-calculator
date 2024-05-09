'use strict'

const clicknumeri = document.querySelectorAll('button.numeri')

console.log(clicknumeri);
for (let i = 0; i < clicknumeri.length; i++) {
    clicknumeri[i].addEventListener('click', function () {
        let result = document.getElementById('result');
        let num = [parseInt(clicknumeri[i].innerText)];
        parseInt(clicknumeri[i].innerText);
        result.innerHTML = ['']
        parseInt(result)
        result.innerHTML += [num]



        console.log(num)

    });

}







