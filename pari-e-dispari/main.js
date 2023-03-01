'use strict';



//variabile numero utente
const numUtente = Number(prompt('Inserisci un numero da 1 a 5'));  //numero scelto dall'utente
console.log(`numero utente ${numUtente}`);

//funzione numero random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}
//argomenti funzione tra 1 e 6
const numCpu = randomNum(1, 6);
console.log(`numero computer ${numCpu}`);

function sommaNumeri(numUtente, numCpu) {
    const somma = numUtente + numCpu;
    return somma;
    //alert(somma);
}
const somma = sommaNumeri(numUtente, numCpu);
console.log(`${somma} è la somma dei due numeri `);

