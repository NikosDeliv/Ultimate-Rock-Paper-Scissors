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

// Rules map where each key has an array of choices it can defeat
const rules = {
    rock: ["scissors", "snake", "human", "tree", "wolf", "sponge"],
    paper: ["air", "water", "dragon", "devil", "lightning", "gun", "rock"],
    scissors: ["snake", "human", "tree", "wolf", "sponge", "paper", "air"],
    snake: ["human", "tree", "wolf", "sponge", "paper", "air", "water"],
    human: ["tree", "wolf", "sponge", "paper", "air", "water", "dragon"],
    tree: ["wolf", "sponge", "paper", "air", "water", "dragon", "devil"],
    wolf: ["sponge", "paper", "air", "water", "dragon", "devil", "lightning"],
    sponge: ["paper", "air", "water", "dragon", "devil", "lightning", "gun"],
    fire: ["scissors", "snake", "human", "tree", "wolf", "sponge", "paper"],
    air: ["water", "dragon", "devil", "lightning", "gun", "rock", "fire"],
    water: ["dragon", "devil", "lightning", "gun", "rock", "fire", "scissors"],
    dragon: ["devil", "lightning", "gun", "rock", "fire", "scissors", "snake"],
    devil: ["lightning", "gun", "rock", "fire", "scissors", "snake", "human"],
    lightning: ["rock", "fire", "scissors", "snake", "human", "tree"],
    gun: ["fire", "scissors", "snake", "human", "tree", "wolf"],
    EnragedGreek: []
};

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    if (playerChoice === "EnragedGreek") {
        // Enraged Greek action
        result = "YOU UNLEASHED THE ENRAGED GREEK!";
        playerScore += 10;  // adds 10 points for Enraged Greek
        playerScoreDisplay.textContent = playerScore; // Update score display
    } else
     {
    // Determine the result
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else if (rules[playerChoice]?.includes(computerChoice)) {
        result = "YOU WIN!";
        playerScore++;
    } else {
        result = "YOU LOSE!";
        computerScore++;
    }
     }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    if (result === "YOU WIN!") {
        resultDisplay.classList.add("greenText");
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "YOU LOSE!") {
        resultDisplay.classList.add("redText");
        computerScoreDisplay.textContent = computerScore;
    }

    checkUnlockUltimate(); // Check if Enraged Greek should be unlocked
}

// Check if the "Enraged Greek" button should be unlocked
function checkUnlockUltimate() {
    const EGButton = document.getElementById('EnragedGreek');
    if (playerScore >= 100) {
        EGButton.disabled = false;
        EGButton.innerText = "Enraged Greek (Unlocked)";
        EGButton.classList.remove('hidden');  // Make it visible
        EGButton.classList.add('unlocked');   // Center the button
    }
}
