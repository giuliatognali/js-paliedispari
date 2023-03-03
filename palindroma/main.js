'use strict';

/********
FUNCTION
********/
function isPalindrome(variableWord) {
    //console.log(variableWord);
    let newWord = '';  //nuova variabile con stringa vuota
    for(let i = variableWord.length - 1; i >=0; i--){
    //console.log(i, variableWord[i]);
    newWord += variableWord[i];
    }
    //console.log(newWord);
    if(newWord ===variableWord){
        console.log('la parola è palindroma')
        alert('la parola è palindroma')
        return true;
    }
    alert('la parola NON è palindroma')
    console.log('la parola non è palindroma')
    return false;

}

/*****
MAIN
******/ 

const userWord = prompt('Inserisci una parola palindroma');

isPalindrome(userWord);
