'use strict';

const userWord = prompt('Inserisci una parola palindroma');

console.log(userWord);



for (let i = 0; i < userWord.length; i++){
    console.log(userWord[i])
}

for (let y = userWord.length - 1 ; y > -1 ; y--){
    console.log(userWord[y])

    
}
/* if(userWord[i] === userWord[y]){
    alert('la parola è PALINDROMA');
}else {
    alert('la parola NON è PALINDROMA');
} */