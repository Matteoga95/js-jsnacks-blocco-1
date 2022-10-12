// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore. 

//chiedo il primo numero
const userNumFirst = Number(prompt("Inserisci il primo numero: "));

//chiedo il secondo numero
const userNumSecond = Number(prompt("Inserisci il secondo numero: "));

//stampo il numero massimo in console e sulla dom
const result = Math.max(userNumFirst, userNumSecond);
console.log(result);

//creo l'elemento da inserire
const divTitle = document.createElement('div');
divTitle.innerText = result

//lo appendo al body del dom
document.body.appendChild(divTitle)