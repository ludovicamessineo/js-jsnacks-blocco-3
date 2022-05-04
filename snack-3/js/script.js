// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const teams = [
    {
     nome: "Roma",
     punti : 0,
     falli: 0
    },

    {
     nome: "Milan",
     punti : 0,
     falli: 0
    },

    {
     nome: "Atalanta",
     punti : 0,
     falli: 0
    }
];

console.log(teams);

teams.forEach(element => {
    element.punti = getRndInteger(1, 80);
    element.falli = getRndInteger(1, 50);
});

console.log(teams);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }