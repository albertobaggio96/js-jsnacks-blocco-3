/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi dalla lista, diversi tra loro.
 *
 */
 const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

 const newList= [];

 function getRandomNumber(minNum, maxNum){
  const random = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  return random
 }

 while(newList.length < 10){
  const randomListNumber= getRandomNumber(0, startingList.length-1);
  
  if (!newList.includes(startingList[randomListNumber])){
    newList.push(startingList[randomListNumber]);
  }
 }

 console.log(newList, "length " + newList.length)

