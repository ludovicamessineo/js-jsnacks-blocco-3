// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

const array = [];
let userNumber = 0;
let sum = 0;


do {
    const userNumber = parseInt(prompt("Dimmi un numero"));
    if (userNumber <= 49) {
        sum += userNumber
        console.log(sum);
    }
     
} while (sum <= 49)



