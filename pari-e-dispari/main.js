'use strict';


function sommaNumeri(numUtente, numCpu){
    const somma = numUtente + numCpu;
    return somma;
    //alert(somma);
}

const numUtente = Number(prompt('Inserisci un numero da 1 a 5'));  //numero scelto dall'utente
console.log(numUtente);
const numCpu = 7;

const somma = sommaNumeri(numUtente, 7);
console.log(somma);