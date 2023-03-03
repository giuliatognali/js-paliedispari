'use strict';

/*********************** 
Funzioni
************************/

//funzione numero random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}
//somma numeri
function sommaNumeri(num1, num2) {
    const somma = num1 + num2;
    return somma;
    //alert(somma);
}

//la somma dei numeri è pari, vero o falso.
function oddEven(num3) {
    if (num3 % 2 === 0) {
        return 'pari';
    }
    return 'dispari';
}
/********************* 
Main
**********************/

//scelta utente tra pari o dispari
const userChoice = prompt('scegli pari o dispari');


//variabile numero utente
const numUtente = Number(prompt('Inserisci un numero da 1 a 5'));

const numCpu = randomNum(1, 6);
const somma = sommaNumeri(numUtente, numCpu);
const result = oddEven(somma);

const inputOddEven = document.getElementById('odd-even');

console.log(userChoice);
console.log(`numero utente ${numUtente}`);
console.log(`numero computer ${numCpu}`);
console.log(`${somma} è la somma dei due numeri `);

if (result % 2 === 0 && userChoice === "pari") {
    alert('hai vinto');
    console.log('hai vinto');
} else if (result % 2 !== 0 && userChoice === "dispari") {
    alert('hai vinto')
    console.log('hai vinto');
}
else {
    alert('hai perso');
    console.log('hai perso');
}


