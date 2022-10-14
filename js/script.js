const parolaHTML = document.getElementById('parola');
const controllaBUTTON = document.getElementById('controlla');
const container = document.querySelector('.container');

const risultato = document.getElementById('output-parola');


controllaBUTTON.addEventListener('click', function(){

    const parolaUtente = parolaHTML.value;

    if(!parolaUtente) {
        risultato.innerHTML = '';
        const divAlert = notificationError('scrivi qualcosa !');
        container.prepend(divAlert);
        return;
    } removeFirstNotification();

    if(parolaPalindroma(parolaUtente)){
        risultato.innerHTML = 'La parola ' + parolaUtente + ' è palindorma';
    } else {
        risultato.innerHTML = 'La parola ' + parolaUtente + ' non è palindorma';
    }
    parolaHTML.value = '';
});


