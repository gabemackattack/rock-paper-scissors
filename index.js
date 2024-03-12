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
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

function playRound(playerChoice) {
    playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);
    computerSelection = getComputerChoice();

    let result = ""
    player1.textContent = "PLAYER: " + playerSelection;
    computer.textContent = "COMPUTER: " + computerSelection;

    if (playerSelection === computerSelection) {
    result = "That is a tie!";
} else if (playerSelection === "Rock" && computerSelection === "Paper") {
    result = "You Lose!";
    computerScore++;
    
} else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    result = "You lose!";
    computerScore++;
} else if (playerSelection === "Scissors" && computerSelection === "Rock") {
   result = "You Lose!";
   computerScore++;
} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    result = "You Win!";
    playerScore++;
} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    result = "You Win!";
    playerScore++
} else if (playerSelection === "Paper" && computerSelection === "Rock") {
    result = "You Win!";
    playerScore++;
}
scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
return result;
}
const body = document.querySelector("body");

const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");
const buttonReset = document.createElement("button");

const result = document.createElement("div");
const scoreDisplay = document.createElement("p");
const returnDisplay = document.createElement("p");
const player1 = document.createElement("h2");
const computer = document.createElement("h2");
const winner = document.createElement("h1");


body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissors);
body.appendChild(result);
body.appendChild(player1);
body.appendChild(computer);
body.appendChild(winner);
body.appendChild(buttonReset);

result.appendChild(scoreDisplay);
result.appendChild(returnDisplay);




buttonRock.addEventListener('click', function() {
    returnDisplay.textContent = playRound("Rock");
    playGame();
});
buttonRock.textContent = "Rock";

buttonPaper.addEventListener('click', function() {
   returnDisplay.textContent = playRound("Paper");
   playGame();
});
buttonPaper.textContent = "Paper";

buttonScissors.addEventListener('click', function() {
   returnDisplay.textContent = playRound("Scissors");
   playGame();
});
buttonScissors.textContent = "Scissors";

buttonReset.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = "Player: 0 | Computer: 0";
    returnDisplay.textContent = "";
    winner.textContent = ""; 

});
buttonReset.style.display = "block";
buttonReset.textContent = "Reset";

function playGame() {
    if (playerScore === 5) {
        winner.textContent = "PLAYER 1 IS THE WINNER";
    } else if (computerScore === 5) {
        winner.textContent = "COMPUTER IS THE WINNER";
    }
 }

