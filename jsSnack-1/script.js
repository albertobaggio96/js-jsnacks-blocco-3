let promptElement= parseInt(prompt("Inserisci un numero da 1 a 10"));

while(promptElement<0 || promptElement>10 || Number.isNaN(promptElement)){
  promptElement= parseInt(prompt("Inserisci SOLO un numero da 1 a 10"));
}

console.log(promptElement, "è il numero iserito")