// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

const invitati = [
    "Nick Carraway",
    "Jay Gatsby",
    "Daisy Buchanan",
    "Tom Buchanan",
    "Jordan Baker",
    "Myrtle Wilson",
    "George Wilson",
    "Owl Eyes",
    "Klipspringer",
    "Meyer Wolfsheim"
];

//chiedo all'utente il suo nome
const userName = prompt("Scrivi il tuo nome per vedere se sei nella lista degli invitati: ")

//ciclo gli invitati finchè non trovo il nome dell'utente
let trovato = false
let cnt = 0

while (trovato === false && cnt <= invitati.length - 1) {

    if (userName == invitati[cnt]) {

        trovato = true
    }

    cnt++
}

//se trovato = true è invitato altrimenti no
if (trovato === true) {
    console.log("Benvenuto alla festa");
} else {
    console.log("Sono spiacente di informarla che non può partecipare alla festa");
}