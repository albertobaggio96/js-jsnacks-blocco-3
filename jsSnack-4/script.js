// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const arrLetter= ["a", "b", "c", "e", "f"];

const arrNumber= [1, 2, 3, 4, 5];

const biggerArr= (arrLetter.length > arrNumber.length) ? arrLetter.length : arrNumber.length;

let arrCombo= [];

for (let i = 0; i < biggerArr; i++){
  arrCombo.push(arrLetter[i], arrNumber[i])
}

console.log(arrCombo)
