// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti


//chiedo i numeri e li aggiungo all array

const numberList =[];
let resultNum = 0
for (let num = 1; num < 11; num++) {
    const userNum = Number(prompt("Inserisci un numero: "));
    numberList.push(userNum);
    resultNum += userNum
}

//stampo l'array
console.log(resultNum);
