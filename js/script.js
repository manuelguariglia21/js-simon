/*** 
 * 
 * 1. Estrarre 5 numeri casuali inserirli in un array e stamparli a monitor.
 * 2. Inserire questi dati in un array.
 * 3. Stampare i numeri a mornitor
 * 4. Dare tempo 30 secondi all'utente per memorizzare i numeri;
 * 5. Nascondere i numeri
 * 6. Chiedere all'utente di inserire 5 numeri.
 * 7. Se il numero inserito dall'utente è nell'array aggiungerlo ad un altro array e incrementare corretti, altrimenti incrementare errori.
 * 
 ***/

/** array and numbers */

const numbers = [];
const valid = [];
const invalid = [];
// 1. , 2. , 3.
addRandomNumbersToArray(5, numbers, 0, 100);
  console.log(numbers); 

const numbersBox = document.getElementById('mg-numbers');
for(let number of numbers){
  const numberPrinted = document.createElement('div');
  numberPrinted.className = 'number';
  numbersBox.append(numberPrinted);
  numberPrinted.innerHTML = ` ${number}`;
} 

// 4., 5., 6., 7.
setTimeout(function(){ 
  numbersBox.innerHTML = ` `;
  for(number of numbers){
    const userNumber = parseInt(prompt('Inserisci uno dei numeri che hai visualizzato: '));
    numbers.includes(userNumber) ? valid.push(userNumber) : invalid.push(userNumber);
  }
  const result = document.createElement('div');
  result.className = 'result';
  numbersBox.append(result);
  result.innerHTML = `
  <p>Hai dato ${valid.length} risposte corrette</p>
  <p> e ${invalid.length} risposte sbagliate</p>
  
  `;

  for(number of valid){
    result.append("(" + number + ")");
  }

}, 3000);







/**** FUNZIONI ****/

/*** Questa funzione passando come argomento valore minimo e massimo crea un numero random e lo restituisce ***/
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



