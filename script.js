// Possible choices
const choices = ["rock", "paper", "scissors"];
// Function to get the computer's random choice
const getComputerChoice = () => {
    // TODO: Generate a random index and return the corresponding choice
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};
// Function to determine the winner
const getWinner = (player, computer) => {
    // TODO: Compare player and computer choices to determine the winner
    // Return "It's a tie!", "You win!", or "Computer wins!"
    console.log("player choses", player);
    console.log ("Computer choses", computer);
    if (player === computer) {
        return "It's a tie!";
    } else if ((player == choices[0] && computer == choices[2])|| (player == choices[1] && computer == choices[0]) || player == choices[2] && computer == choices[1]) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
};

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
document.getElementById("reset").addEventListener("click", () => { 
    document.getElementById("result").innerHTML = ""; //clear result display
    document.getElementById("player-score").innerHTML = "0";
    document.getElementById("computer-score").innerHTML = "0";
    playerScore = 0;
    computerScore = 0;
    //reset scores
});

// Main game logic
const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice(); // Get the computer's choice
    const result = getWinner(playerChoice, computerChoice); // Determine the winner
    console.log(result);

    document.getElementById("result").innerHTML = `<p> You chose: ${playerChoice}</p>
    <p> Computer chose: ${computerChoice}</p>
    <h2> ${result}</h2>`;
    // TODO: Update the #result element with the player choice, computer choice, and result
    updateScores(result);
    //Call updateScores(result); in the playGame function
};

let playerScore = 0;
let computerScore = 0;
 

const updateScores = (result) => { if (result === "You win!") {
    playerScore += 1; //update playerScore
    const newPlayerScore = document.getElementById("player-score"); 
    newPlayerScore.innerHTML = `${playerScore}`; //update the textContent of tag element id# "player-score"

} else if (result === "Computer wins!") {
    computerScore += 1; //update computerScore
    const newComputerScore = document.getElementById("computer-score");
    newComputerScore.innerHTML = `${computerScore}`; //update the textContent of tag element id# "computer-score"
}};