/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */

function getSum(array){
  let sum = 0;

  for(let i = 0; i< array.length; i++){

    const fixNumb= parseInt(array[i], 10);

    if (!Number.isNaN(fixNumb)){
      sum += fixNumb;
    }
  };

  return sum;
};

const list= [1, 2, 3, "ciao", "cioccolato", 120];

console.log(getSum(list));