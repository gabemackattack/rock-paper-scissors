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


function playRound() {
    let playerChoice = prompt("Please pick Rock, Paper, or Scissors.");
    const playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);
    const computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
    return "That is a tie!";
} else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose!";
} else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beats Paper";
} else if (playerSelection === "Scissors" && computerSelection === "Rock") {
   return "You Lose!";
} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win!";
} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win!";
} else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win!";
}
}

function playGame() {
let player = 0;
let computer = 0;
  
let result = playRound();

if (result === "That is a tie!") {
      player += 1;
      computer += 1;
      console.log("You Tied!");
  } else if (result === "You Lose!") {
      computer +=1;
      console.log("you lose this round");
  } else if (result === "You Win!") {
      player += 1;
      console.log("you win this round!");
  }

result = playRound();

if (result === "That is a tie!") {
    player += 1;
    computer += 1;
    console.log("You Tied!");
} else if (result === "You Lose!") {
    computer +=1;
    console.log("you lose this round");
} else if (result === "You Win!") {
    player += 1;
    console.log("you win this round!");
}

result = playRound();

if (result === "That is a tie!") {
    player += 1;
    computer += 1;
    console.log("You Tied!");
} else if (result === "You Lose!") {
    computer +=1;
    console.log("you lose this round");
} else if (result === "You Win!") {
    player += 1;
    console.log("you win this round!");
}

result = playRound();

if (result === "That is a tie!") {
    player += 1;
    computer += 1;
    console.log("You Tied!");
} else if (result === "You Lose!") {
    computer +=1;
    console.log("you lose this round");
} else if (result === "You Win!") {
    player += 1;
    console.log("you win this round!");
}

result = playRound();

if (result === "That is a tie!") {
    player += 1;
    computer += 1;
    console.log("You Tied!");
} else if (result === "You Lose!") {
    computer +=1;
    console.log("you lose this round");
} else if (result === "You Win!") {
    player += 1;
    console.log("you win this round!");
}
if (player > computer) {
    console.log("You win the game!");
} else if (player < computer) {
    console.log("You lose the game :(");
}

console.log(`Player: ${player}, Computer: ${computer}`);
}

playGame();