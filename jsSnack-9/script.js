
let button= document.querySelector("button");

let sum = 0;

  button.addEventListener("click", function ten(){
    sum ++;
  
    button.innerHTML = `Play ${sum}`;
  
    if (sum === 10){
      button.classList.add("red");
      button.removeEventListener("click", ten);
      setTimeout(() => {
        button.classList.remove("red");
        button.addEventListener("click", ten);
        sum = 0
        button.innerHTML = `Play`;
      }, 3000);
    }

})
