let words = [
	'камень', 'ножницы', 'бумага'
	];

let computerPlay = () => {
    let resultComp = words[Math.floor(Math.random() * Math.floor(3))];
    return resultComp;
    };

    let computerSelection = '',
        playerSelection = '',
        playerScore = 0,
        compScore = 0,
        result = document.createElement('p'),
        playerScoreNew = document.createElement('p'),
        compScoreNew = document.createElement('p');

const playerScoreDisplay = document.querySelector('.player');
const compScoreDisplay = document.querySelector('.comp');

const tablo = document.querySelector('.tablo');
  const buttons = document.querySelectorAll('button');
    // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {
      // and for each one we add a 'click' listener
    button.addEventListener('click', function(e) {
        if (e.target.classList.contains("rock")) {
          playerSelection = 'камень';
          game();
      } else if (e.target.classList.contains("scirios")) {
          playerSelection = 'ножницы';
          game();
      } else {
          playerSelection = 'бумага';
          game();
      }
    });
    });
  
let playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
    result.textContent = 'Ничья';
    playerScoreNew.textContent = playerScore;
    compScoreNew.textContent = compScore;
  return;
  } else if (playerSelection === 'камень' && computerSelection === 'ножницы') {
  playerScore += 1;
  playerScoreNew.textContent = playerScore;
  compScoreNew.textContent = compScore;
    result.textContent = 'Вы побили ' + computerSelection;
  return;
  } else if (playerSelection === 'ножницы' && computerSelection === 'бумага') {
  playerScore += 1;
  playerScoreNew.textContent = playerScore;
  compScoreNew.textContent = compScore;
  result.textContent = 'Вы побили ' + computerSelection;
  return;
  } else if (playerSelection === 'бумага' && computerSelection === 'камень') {
  playerScore += 1;
  playerScoreNew.textContent = playerScore;
  compScoreNew.textContent = compScore;
  result.textContent = 'Вы побили ' + computerSelection;
  return;
  } else {
  compScore += 1;
  playerScoreNew.textContent = playerScore;
  compScoreNew.textContent = compScore;
  result.textContent = `Вы проиграли против ${computerSelection}`;
  return;
  }
}

let game = () => {
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
      if (playerScore === 5) {
            result.style.cssText = 'color: green';
            result.textContent = `ВЫ ВЫИГРАЛИ!`;
            tablo.appendChild(result);
            compScore = 0;
            playerScore = 0;
      } else if (compScore === 5) {
            result.style.cssText = 'color: red';
            result.textContent = `ВЫ ПРОИГРАЛИ!`;
            tablo.appendChild(result);
            compScore = 0;
            playerScore = 0;
      } else {
        result.style.cssText = 'color: #1b1d1f';
        tablo.appendChild(result);
        playerScoreDisplay.appendChild(playerScoreNew);
        compScoreDisplay.appendChild(compScoreNew);
      }
      }
    

