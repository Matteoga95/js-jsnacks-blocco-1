// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga. 

//chiedo la prima parola 
const userFirstWord = prompt("Inserisci la prima parola : ");

//chiedo la seconda parola 
const userSecondWord = prompt("Inserisci la seconda parola : ");

if (userFirstWord.length <= userSecondWord.length){
    console.log(userFirstWord);
    console.log(userSecondWord);
} else{
    console.log(userSecondWord);
    console.log(userFirstWord);
}