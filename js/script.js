/*  -----------------------------------------------------------------------------------------------
    Palidroma

    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
--------------------------------------------------------------------------------------------------- */

// Variabili che prendono elementi dell'HTML
const parolaHTML = document.getElementById('parola');
const controllaBUTTON = document.getElementById('controlla');
const containerParola = document.querySelector('.container-parola');
const risultatoParola = document.getElementById('output-parola');

// Funzione on click per il bottone
controllaBUTTON.addEventListener('click', function(){

    const parolaUtente = parolaHTML.value;

    // Istruzione if per verificare se l'utente ha inserito correttamente una parola
    if(!parolaUtente) {
        risultatoParola.innerHTML = '';
        const divAlert = notificationError('Devi scrivere qualcosa!');
        containerParola.prepend(divAlert);
        return;
    } removeFirstNotification();

    // Istruzione if per verificare se la parola inserita dall'utente è palindroma o no
    if(parolaPalindroma(parolaUtente)){
        risultatoParola.innerHTML = 'La parola ' + parolaUtente + ' è palindorma';
    } else {
        risultatoParola.innerHTML = 'La parola ' + parolaUtente + ' non è palindorma';
    }
    parolaHTML.value = ''; // svuoto la casella di input
});

/*  -----------------------------------------------------------------------------------------------
    Pari e Dispari    

    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
--------------------------------------------------------------------------------------------------- */

// Variabili che prendono elementi dell'HTML
const inputNumberHTML = document.getElementById('input-numero');
const sceltaHTMl = document.getElementById('pari-dispari');
const checkButton = document.getElementById('check');
const risultatoNumber = document.getElementById('output-numero');
const containerNumber = document.querySelector('.container-number');

// Variabili per verificare se la somma sia pari e dispari
const pari = 'pari';
const dispari = 'dispari';

// Funzione on click per il bottone
checkButton.addEventListener('click', function(){
    let sceltaPariDispari = sceltaHTMl.value;
    let inputUtente = parseInt(inputNumberHTML.value);
    
    // Istruzione if per verificare se l'utente ha inserito correttamente pari o dispari
    if(sceltaPariDispari != pari && sceltaPariDispari != dispari) {
        risultatoNumber.innerHTML = '';
        const divAlert = notificationError('Devi scegliere se è pari o dispari!');
        containerNumber.prepend(divAlert);
        return;
    } removeFirstNotification();

    // Istruzione if per verificare se l'utente ha inserito correttamente un numero da 1 a 5
    if(inputUtente < 0 || inputUtente > 5 || !inputUtente) {
        risultatoNumber.innerHTML = '';
        const divAlert = notificationError('Devi inserire un numero da 1 a 5!');
        containerNumber.prepend(divAlert);
        return;
    } removeFirstNotification();

    let numeroComputer = randomNumber(1, 5);
    // console.log(numeroComputer);
    let sommaTotale = numeroComputer + inputUtente;
    // console.log(sommaTotale);

    // Istruzione if per verificare chi ha vinto tra l'utente o il computer
    if(isEven(sommaTotale) && sceltaPariDispari == pari) {
        risultatoNumber.innerHTML = "Il numero dell'utente è: " + inputUtente + '<br>' + 'Il numero del computer è: ' + numeroComputer + '<br>' + 'La somma dei due numeri è: ' + sommaTotale + '<br>' + "Ha vinto l'utente";
    } else if(!isEven(sommaTotale) && sceltaPariDispari == dispari) {
        risultatoNumber.innerHTML = "Il numero dell'utente è: " + inputUtente + '<br>' + 'Il numero del computer è: ' + numeroComputer + '<br>' + 'La somma dei due numeri è: ' + sommaTotale + '<br>' + "Ha vinto l'utente";
    } else {
        risultatoNumber.innerHTML = "Il numero dell'utente è: " + inputUtente + '<br>' + 'Il numero del computer è: ' + numeroComputer + '<br>' + 'La somma dei due numeri è: ' + sommaTotale + '<br>' + 'Ha vinto il computer';
        // Svuoto gli input dopo che il computer ha vinto
        inputNumberHTML.value = '';
        sceltaHTMl.value = '';
    }
});