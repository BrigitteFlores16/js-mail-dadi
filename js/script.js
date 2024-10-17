//*Mail
//*Chiedi all'utente la sua email,
//*controlla che sia nella lista di chi può accedere,
//*stampa un messaggio appropriato sull'esito del controllo.

const emails=[
    'gia@gmail.com',
    'carla@gmail.com',
    'alex@gmail.com',
    'Fernando@gmail.com',
];

const emailutente= prompt('inserisci la tua email:');
let email= false;

  for(let i =0 ;i<= emails.length-1; i++){
 const currentemail=emails[i];
  if (currentemail== emailutente) {
    email= true ;
}
  }

if (email==true){
    alert('email trovata');
}
else{
    alert('Email non trovata.');
}

//*Gioco dei dadi
//*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//*Stabilire il vincitore, in base a chi fa il punteggio più alto.
//*Prima di partire a scrivere codice poniamoci qualche domanda:
//*Che ci sia un array da qualche parte?
//*Se dobbiamo confrontare qualcosa che "cosa" ci serve?

//da 1 a 6 per il giocatore 
const Giocatore = Math.floor(Math.random() * 6);
//da 1 a 6 per il computer
const Computer = Math.floor(Math.random() * 6);

if (Giocatore > Computer) {
    alert('il vincitore è: Giocatore');
} else if (Giocatore < Computer) {
    alert('il vincitore è: Computer');
} else {
    alert('pareggio, il punteggio è: ' + Giocatore);
}







