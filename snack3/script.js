// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti


//chiedo i numeri e li aggiungo 

//uso il ciclo for
// let resultNum = 0
// for (let num = 1; num < 11; num++) {
//     const userNum = Number(prompt("Inserisci un numero: "));
   
//     resultNum += userNum
// }


//uso il ciclo while
let resultNum = 0
let num = 1;
while (num < 11){
    const userNum = Number(prompt("Inserisci un numero: "));
   
    resultNum += userNum
    num ++
}

//stampo 
console.log(resultNum);
