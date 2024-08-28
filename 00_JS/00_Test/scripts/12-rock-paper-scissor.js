// Carica il punteggio salvato dal localStorage, o crea un nuovo oggetto score se non esiste
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElemets();

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
    if (!isAutoPlaying){
        intervalId = setInterval(()=>{
            const playerMove= pickComputerMove();
            playerGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

// Funzione che gestisce il gioco quando un giocatore fa una scelta
function playerGame(playerMove) {
  // Seleziona la mossa del computer in modo casuale
  const computerMove = pickComputerMove();

  let result = ''; // Variabile per memorizzare il risultato del gioco
  
  // Logica per determinare il risultato del gioco in base alla scelta del giocatore e del computer
  if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
          result = 'You lose!';
      } else if (computerMove === 'paper') {
          result = 'You Win!!!';
      } else if (computerMove === 'scissors') {
          result = 'Tie.';
      }
  } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
          result = 'You Win!!!';
      } else if (computerMove === 'paper') {
          result = 'Tie.';
      } else if (computerMove === 'scissors') {
          result = 'You lose!';
      }
  } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
          result = 'Tie.';
      } else if (computerMove === 'paper') {
          result = 'You lose!';
      } else if (computerMove === 'scissors') {
          result = 'You Win!!!';
      }
  }

  // Aggiorna il punteggio in base al risultato ottenuto
  if (result === 'You Win!!!') {
      score.wins += 1;
  } else if (result === 'You lose!') {
      score.losses += 1;
  } else if (result === 'Tie.') {
      score.ties += 1;
  }

  updateScoreElemets();

  // Salva il punteggio aggiornato nel localStorage
  localStorage.setItem('score', JSON.stringify(score));
  
  document.querySelector('.js-result')
    .innerHTML = result;
  document.querySelector('.js-moves')
    .innerHTML = `You 
    <img src="imgs/${playerMove}.png" class="move-icon"> Computer 
    <img src="imgs/${computerMove}.png" class="move-icon">`;
}

function updateScoreElemets (){
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Funzione che sceglie in modo casuale la mossa del computer
function pickComputerMove() {
  const randomNumber = Math.random(); // Genera un numero casuale tra 0 e 1
  let computerMove = '';

  // Assegna una mossa in base al valore del numero casuale
  if (randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'rock'; // Il primo terzo è 'rock'
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
      computerMove = 'paper'; // Il secondo terzo è 'paper'
  } else {
      computerMove = 'scissors'; // L'ultimo terzo è 'scissors'
  }

  return computerMove; // Ritorna la mossa scelta dal computer
}