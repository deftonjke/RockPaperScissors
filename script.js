let words = [
	'камень', 'ножницы', 'бумага'
	];
  let computerPlay = () => {
    let resultComp = words[Math.floor(Math.random() * Math.floor(3))];
    return resultComp;
    };

    let computerSelection = '';
    let playerSelection = '';
    let playerScore = 0;
    let compScore = 0;
    let rounds = 5;
    let result = document.createElement('p');
    let commonScore = document.createElement('p');

    let playerScoreNew = document.createElement('p');
    let compScoreNew = document.createElement('p');

const playerScoreNewDva = document.querySelector('.score.player');
const compScoreNewDva = document.querySelector('.score.comp');

const tablo = document.querySelector('.tablo');
  const buttons = document.querySelectorAll('button');
    // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {
      // and for each one we add a 'click' listener
    button.addEventListener('click', function(e) {
        if (e.target.classList.contains("rock")) {
          playerSelection = 'камень';
          game(rounds);
      } else if (e.target.classList.contains("scirios")) {
          playerSelection = 'ножницы';
          game(rounds);
      } else {
          playerSelection = 'бумага';
          game(rounds);
      }
    });
    });
  
let playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
    result.textContent = 'Ничья';
    commonScore.textContent = `Игрок: ${playerScore} | Комп: ${compScore}`;
    playerScoreNew.textContent = playerScore;
    compScoreNew.textContent = compScore;
  return;
  } else if (playerSelection === 'камень' && computerSelection === 'ножницы') {
  playerScore += 1;
  playerScoreNew.textContent = playerScore;
    result.textContent = 'Вы побили ' + computerSelection;
    commonScore.textContent = `Игрок: ${playerScore} | Комп: ${compScore}`;
  return;
  } else if (playerSelection === 'ножницы' && computerSelection === 'бумага') {
  playerScore += 1;
  playerScoreNew.textContent = playerScore;
  result.textContent = 'Вы побили ' + computerSelection;
  commonScore.textContent = `Игрок: ${playerScore} | Комп: ${compScore}`;
  return;
  } else if (playerSelection === 'бумага' && computerSelection === 'камень') {
  playerScore += 1;
  playerScoreNew.textContent = playerScore;
  result.textContent = 'Вы побили ' + computerSelection;
  commonScore.textContent = `Игрок: ${playerScore} | Комп: ${compScore}`;
  return;
  } else {
  compScore += 1;
  playerScoreNew.textContent = playerScore;
  compScoreNew.textContent = compScore;
  result.textContent = `Вы проиграли против ${computerSelection}`;
  commonScore.textContent = `Игрок: ${playerScore} | Комп: ${compScore}`;
  return;
  }
}

let game = (rounds) => {
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
      if (playerScore === 5) {
            tablo.removeChild(result);
            commonScore.textContent = `Победа игрока: ${playerScore}`;
            tablo.appendChild(commonScore);
            compScore = 0;
            playerScore = 0;
      } else if (compScore === 5) {
            tablo.removeChild(result);
            commonScore.textContent = `Победа компа: ${compScore}`;
            tablo.appendChild(commonScore);
            compScore = 0;
            playerScore = 0;
      } else {
        tablo.appendChild(result);
        tablo.appendChild(commonScore);
        playerScoreNewDva.appendChild(playerScoreNew);
        compScoreNewDva.appendChild(compScoreNew);
      }
      }
    

