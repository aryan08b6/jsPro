let compChoice;
let result;

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
  };

function updateScore(){
  const scoreEle = document.querySelector('.js-score');
  scoreEle.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

updateScore();

let isAutoPlaying = false;
let intervalID;


function choice(){
  rNo = Math.random();
  if (rNo >= 0 && rNo <= 1/3){
    compChoice = 'rock';
  }
  else if (rNo > 1/3 && rNo <= 2/3){
    compChoice = 'paper';
  }
  else{
    compChoice = 'scissors';
  }
  return compChoice;
}

function autoPlay(){
if (!isAutoPlaying){
  intervalID = setInterval(() => {
    const playerMove = choice();
    playGame(playerMove);
  }, 1000)
  isAutoPlaying = true;
}
else{
 clearInterval(intervalID);
 isAutoPlaying = false;
}
}

function playGame(playerMove){
  compChoice = choice();
  if (playerMove == 'scissors'){
    if (compChoice == 'scissors'){
      result = 'Tie';
    }
    else if (compChoice == 'rock'){
      result = 'You Lose';
    }
    else{
      result = 'You Win';
    }
  }
  else if (playerMove == 'rock'){
    if (compChoice == 'rock'){
      result = 'Tie';
    }
    else if (compChoice == 'paper'){
      result = 'You Lose';
    }
    else{
      result = 'You Win';
    }
  }
  else{
    if (compChoice == 'paper'){
      result = 'Tie';
    }
    else if (compChoice == 'scissors'){
      result = 'You Lose';
    }
    else{
      result = 'You Win';
      }
}

if (result === 'You Win'){
  score.wins += 1;
} else if (result === 'You Lose'){
  score.losses += 1;
} else{
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScore();


const status = document.querySelector('.js-moves');
status.innerHTML=`You 
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${compChoice}-emoji.png" class="move-icon">
Computer`;

const res = document.querySelector('.js-result');
res.innerHTML = result;

}

document.body.addEventListener('keydown', (event)=>{
  if (event.key === 'r'){
    playGame('rock');
  } else if(event.key === 'p'){
    playGame('paper');
  } else if(event.key === 's'){
    playGame('scissors')
  }
});
