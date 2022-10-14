function notificationError(msgError){
    const alerta = document.createElement('div');
    alerta.className='alert alert-danger';
    alerta.innerHTML = msgError;
    return alerta;
}
function removeFirstNotification(){
    const alertToRemove = document.querySelector('.alert');
    console.log(alertToRemove);
   if(alertToRemove) alertToRemove.remove();
}

function parolaPalindroma(parolaUtente) {
    
    let parola = parolaUtente.toLowerCase();
    let parolaInvertita = parola.split('').reverse().join('');
    return parolaInvertita == parola;
    
}