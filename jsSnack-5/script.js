/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */

function getRandomNumber(numMin, numMax){
  const randomNumber= Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return randomNumber;
}

console.log(getRandomNumber(1, 10));

const casualNamber= getRandomNumber(1, 10);

console.warn(casualNamber);