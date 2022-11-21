'use strict';

// DOM variables declaration
const userChoice = document.querySelector('.play--buttons');
const userScore = document.getElementById('user--score');
const computerScore = document.getElementById('computer--score');
const gameWindow = document.querySelector('.game--window');
const resultsWindow = document.querySelector('.results');
const endScreen = document.querySelector('.end--screen');

// Game variables
let gameUserScore = 0;
let gameCompScore = 0;

function getComputerChoice() {
  return ['rock', 'paper', 'scissors'][Math.trunc(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultsWindow.innerText = `${playerSelection} / ${computerSelection}`;
    return;
  }
  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    userScore.innerText = ++gameUserScore;
    resultsWindow.innerText = `${playerSelection} / ${computerSelection}`;
    return;
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    userScore.innerText = ++gameUserScore;
    resultsWindow.innerText = `${playerSelection} / ${computerSelection}`;
    return;
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    userScore.innerText = ++gameUserScore;
    resultsWindow.innerText = `${playerSelection} / ${computerSelection}`;
    return;
  } else {
    computerScore.innerText = ++gameCompScore;
    resultsWindow.innerText = `${playerSelection} / ${computerSelection}`;
    return;
  }
}

function end() {
  if (gameUserScore === 5 || gameCompScore === 5) {
    gameWindow.classList.add('hidden');
    endScreen.classList.remove('hidden');
  }
  if (gameUserScore === 5) {
    endScreen.innerText = `You WON!`;
    endScreen.style.color = 'green';
  } else {
    endScreen.innerText = `You LOST!`;
    endScreen.style.color = 'red';
  }
  endScreen.insertAdjacentHTML(
    'beforeend',
    `<div class="replay--button">REPLAY</div>`
  );
  endScreen.insertAdjacentHTML(
    'afterbegin',
    `      <div class="scores">
    <div class="user--score">&#128104;<span id="user--score">${gameUserScore}</span></div>
    <div class="separator">/</div>
    <div class="computer--score">
      &#128421;<span id="computer--score">${gameCompScore}</span>
    </div>
  </div>`
  );
  const replayButton = document.querySelector('.replay--button');
  replayButton.addEventListener('click', function () {
    gameCompScore = 0;
    gameUserScore = 0;
    userScore.innerText = gameUserScore;
    computerScore.innerText = gameCompScore;
    resultsWindow.innerText = '';
    endScreen.classList.add('hidden');
    gameWindow.classList.remove('hidden');
  });
}

function game() {
  userChoice.addEventListener('click', function (e) {
    const compChoice = getComputerChoice();
    if (e.target.dataset.choice === 'rock') {
      console.log(playRound('rock', compChoice));
    }
    if (e.target.dataset.choice === 'paper') {
      console.log(playRound('paper', compChoice));
    }
    if (e.target.dataset.choice === 'scissors') {
      console.log(playRound('scissors', compChoice));
    }
    end();
  });
}

game();
