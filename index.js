function getComputerChoice() {
const random = parseInt(Math.floor(Math.random() * 90) + 1);

const Rock = (random <= 30);
const Paper = (random <= 60) &&  (random > 30);
const Scissors = (random <= 90) && (random > 60);

if (Rock) {
    return "Rock";
} else if (Paper) {
    return "Paper";
} else if (Scissors) {
    return "Scissors";
} else {
    return "Uh oh!";
}
}

const computerChoice = getComputerChoice();

function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    return "That is a tie!";
} else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
} else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beats Paper";
} else if (playerSelection === "Scissors" && computerSelection === "Rock") {
   return "You Lose! Rock beats Scissors";
} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
} else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
}
}

let playerChoice = prompt("Please pick Rock, Paper, or Scissors.")
    console.log(playerChoice);
    const playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);
    const computerSelection = computerChoice;


function playGame() {
    
}
