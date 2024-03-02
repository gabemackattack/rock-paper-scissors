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

  return {playerSelection, computerSelection};
}
const playerChoice = "PaPER";
const playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);
const computerSelection = computerChoice;