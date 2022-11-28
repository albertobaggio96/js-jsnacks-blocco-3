// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const arrUno= [1, 2, 3, 4, 5, 6, 7];

const arrDue= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

while(arrUno.length !== arrDue.length){
  const userPrompt= prompt("inserisci qualsiasi cosa");
  if (arrUno < arrDue){
    arrUno.push(userPrompt);
  }else{
    arrDue.push(userPrompt);
  }
  console.log(arrUno.length, arrDue.length);
}

