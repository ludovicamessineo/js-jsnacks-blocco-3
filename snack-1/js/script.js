// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


const firstArray = [56, 75, 43, 98];

const secondArray = [34, 83, 67, 29, 11, 73, 19];

while (firstArray.length < secondArray.length) {
    firstArray.push(getRndInteger(1, 100));
    console.log(firstArray);
} if (firstArray.length === secondArray.length) {
    console.log(firstArray, secondArray);
    console.log("Gli array hanno lo stesso numero di elementi");
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }