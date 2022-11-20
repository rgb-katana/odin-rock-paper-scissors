'use strict';

// Variables declaration
const userChoice = document.querySelector('.play--buttons');
const userScore = document.getElementById('user--score');
const computerScore = document.getElementById('computer--score');

function getComputerChoice() {
  return ['rock', 'paper', 'scissors'][Math.trunc(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const playerSelectLower = playerSelection.toLowerCase();
  if (playerSelectLower === computerSelection)
    return `DRAW! ${playerSelectLower} and ${computerSelection}`;
  if (playerSelectLower === 'scissors' && computerSelection === 'paper')
    return `You WIN! ${playerSelectLower} beats ${computerSelection}}`;
  if (playerSelectLower === 'rock' && computerSelection === 'scissors')
    return `You WIN! ${playerSelectLower} beats ${computerSelection}}`;
  if (playerSelectLower === 'paper' && computerSelection === 'rock')
    return `You WIN! ${playerSelectLower} beats ${computerSelection}}`;
  else return `You LOSE! ${computerSelection} beats ${playerSelectLower} `;
}

function game() {
  let userScore = 0;
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (/WIN/.test(playRound(playerSelection, computerSelection))) userScore++;
    if (/LOSE/.test(playRound(playerSelection, computerSelection))) compScore++;
  }
  return userScore > compScore
    ? `You win, ${userScore}:${compScore}`
    : userScore < compScore
    ? `You lose, ${compScore}:${userScore}`
    : `There is a draw, ${userScore}:${compScore}`;
}

// console.log(game());

// Declare empty

let playerSelection = '';
// Assign here

userChoice.addEventListener('click', function (e) {
  if (e.target.dataset.choice === 'rock') playerSelection = 'rock';
  if (e.target.dataset.choice === 'paper') playerSelection = 'paper';
  if (e.target.dataset.choice === 'scissors') playerSelection = 'scissors';
});

const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
