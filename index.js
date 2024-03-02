function getComputerChoice() {
const random = parseInt(Math.floor(Math.random() * 90) + 1);
return (random);
}
const answer = getComputerChoice();
const Rock = (answer <= 30);
const Paper = (answer <= 60) &&  (answer > 30);
const Scissors = (answer <= 90) && (answer > 60);
if (Rock) {
    console.log("Rock");
} else if (Paper) {
    console.log("Paper");
} else if (Scissors) {
    console.log("Scissors");
} else {
    console.log("Error")
}