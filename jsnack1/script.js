// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore. 

//chiedo il primo numero
const userNumFirst = Number(prompt("Inserisci il primo numero: "));

//chiedo il secondo numero
const userNumSecond = Number(prompt("Inserisci il secondo numero: "));

console.log(Math.max(userNumFirst,userNumSecond ));