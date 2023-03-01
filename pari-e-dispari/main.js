'use strict';

/*********************** 
Funzioni
************************/

//funzione numero random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

function sommaNumeri(numUtente, numCpu) {
    const somma = numUtente + numCpu;
    return somma;
    //alert(somma);
}

//la somma dei numeri è pari, vero o falso.
function oddEven(somma) {
    if (somma % 2 === 0) {
        return 'pari';
    }
    return 'dispari';
}
/********************* 
Main
**********************/

//scelta utente tra pari o dispari
const userChoice = prompt('scegli pari o dispari');
console.log(userChoice);

//variabile numero utente
const numUtente = Number(prompt('Inserisci un numero da 1 a 5'));  //numero scelto dall'utente
console.log(`numero utente ${numUtente}`);

const numCpu = randomNum(1, 6);
console.log(`numero computer ${numCpu}`);

const somma = sommaNumeri(numUtente, numCpu);
console.log(`${somma} è la somma dei due numeri `);

const result = oddEven(somma)
console.log(result);
const inputOddEven = document.getElementById('odd-even');

if (oddEven % 2 === 0 && userChoice === "pari"){
    alert('hai vinto');
} else if(oddEven % 2 !== 0 && userChoice ==="dispari"){
    alert('hai vinto');
}
else {
    alert('hai perso');
}
