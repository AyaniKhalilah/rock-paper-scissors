// Possible choices
const choices = ["rock", "paper", "scissors"];


// Function to get the computer's random choice
const getComputerChoice = () => {
    // TODO: Generate a random index and return the corresponding choice
    const randomIndex = (Math.floor(Math.random() * choices.length));
    console.log(choices[randomIndex]);
    return choices[randomIndex];

};



// Function to determine the winner
const getWinner = (player, computer) => {
    // TODO: Compare player and computer choices to determine the winner
    // Return "It's a tie!", "You win!", or "Computer wins!"
    if (player === computer){
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!"
    } else {
        return "Computer wins!"
    }
    
};

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
// Main game logic

const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice(); // Get the computer's choice
    const result = getWinner(playerChoice, computerChoice); // Determine the winner
    console.log(result);
    document.getElementById("result").innerHTML = `
        <p>You chose: ${playerChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <h2>${result}</h2>
    `;
    // TODO: Update the #result element with the player choice, computer choice, and result
};