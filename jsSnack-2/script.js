// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const myNumber= [];

let promptElement= parseInt(prompt("inserisci un numero"));

let sum= 0;

for (let i = 0; sum < 50; i++){
  promptElement= parseInt(prompt("inserisci un numero"))
  myNumber.push(promptElement);
  console.log(myNumber);
  sum+= promptElement;
  console.log(sum);
}

console.log(sum);





