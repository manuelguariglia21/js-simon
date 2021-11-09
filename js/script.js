/*** 
 * 
 * 1. Estrarre 5 numeri casuali inserirli in un array e stamparli a monitor.
 * 2. Inserire questi dati in un array.
 * 3. Chiedere all'utente di inserire 5 numeri.
 * 4. Se il numero inserito dall'utente è nell'array aggiungerlo ad un altro array e incrementare corretti, altrimenti incrementare errori.
 * 
 ***/

/** array and numbers */

const numbers = []

//chiamo la funzione che genera i numeri e li aggiunge all'array

addRandomNumbersToArray(5, numbers, 0, 100);
console.log(numbers);


/**** FUNZIONI ****/

function getRandomInt(min, max){
const num = Math.floor(Math.random() * max) - min;
return num;
}

/*** Questa funzione passando come argomento numero di numeri da inserire, array dove inserirli e valore minimo e massimo crea numeri random e li aggiunge nel array ***/
function addRandomNumbersToArray(index, array, min, max){
  for(let i = 0; i < index; i++){
    const num = getRandomInt(min, max);
    array.push(num);
  }
}



