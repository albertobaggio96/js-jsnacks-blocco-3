// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const myNumbers= [];

let sum= 0;

while (sum < 50){
  const promptElement= parseInt(prompt("inserisci un numero"))
  myNumbers.push(promptElement);
  console.log(myNumbers);
  sum+= promptElement;
  console.log(sum);
}

console.log(sum);





