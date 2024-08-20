const choices = [
    "rock", "paper", "scissors", "snake", "human", "tree", "wolf", "sponge", 
    "fire", "air", "water", "dragon", "devil", "lightning", "gun"
];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);

    switch (playerChoice) {
        case "rock":
            if (["scissors", "snake", "human", "tree", "wolf", "sponge"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "rock") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "paper":
            if (["air", "water", "dragon", "devil", "lightning", "gun", "rock"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "paper") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "scissors":
            if (["snake", "human", "tree", "wolf", "sponge", "paper", "air"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "scissors") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "snake":
            if (["human", "tree", "wolf", "sponge", "paper", "air", "water"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "snake") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "human":
            if (["tree", "wolf", "sponge", "paper", "air", "water", "dragon"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "human") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "tree":
            if (["wolf", "sponge", "paper", "air", "water", "dragon", "devil"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "tree") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "wolf":
            if (["sponge", "paper", "air", "water", "dragon", "devil", "lightning"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "wolf") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "sponge":
            if (["paper", "air", "water", "dragon", "devil", "lightning", "gun"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "sponge") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "fire":
            if (["scissors", "snake", "human", "tree", "wolf", "sponge", "paper"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "fire") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "air":
            if (["water", "dragon", "devil", "lightning", "gun", "rock", "fire"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "air") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "water":
            if (["dragon", "devil", "lightning", "gun", "rock", "fire", "scissors"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "water") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "dragon":
            if (["devil", "lightning", "gun", "rock", "fire", "scissors", "snake"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "dragon") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "devil":
            if (["lightning", "gun", "rock", "fire", "scissors", "snake", "human"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "devil") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "lightning":
            if (["rock", "fire", "scissors", "snake", "human", "tree"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "lightning") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        case "gun":
            if (["fire", "scissors", "snake", "human", "tree", "wolf"].includes(computerChoice)) {
                result = "YOU WIN!";
            } else if (computerChoice === "gun") {
                result = "IT'S A TIE!";
            } else {
                result = "YOU LOSE!";
            }
            break;
        default:
            result = "Invalid choice!";
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}
