let humanScore = 0;
let computerScore = 0;


function getHumanChoice() {
    const humanChoice =
    prompt("Please enter your choice Rock, Paper or Scissors").toLowerCase();
    return humanChoice;
}
console.log(getHumanChoice());

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1){
        return "paper";
    } else return "scissors";
}
console.log(getComputerChoice());

function playRound() {
   const humanScoren = humanChoice();
    computerScore = computerChoice();
    
    if (humanChoice === computerChoice) {
        console.log("Its a tie! Both chose ${humanChoice}");
        return;
    }
    else if (humanChoice === "rock" &&computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log('You win! ${humanScore} beat ${computerScore}')
    }
    else {
        computerScore++;
        console.log("You lose! ${computerScore} beat ${humanScore}")
    }

}
console.log(playRound());