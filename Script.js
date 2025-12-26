function getHumanChoice() {
    const choice =
    prompt("Please enter your choice Rock, Paper or Scissors").toLowerCase();
    return choice;
}
console.log(getHumanChoice())

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1){
        return "paper";
    } else {
        return "scissors";
    }    
}
console.log(getComputerChoice());



function playGame() {
  
  let humanScore = 0;
  let computerScore = 0;



  function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

    console.log("=== Rock Paper Scissors - First to 3 wins! ===\n");

    for (let round = 1; round <=5; round++) {
        console.log(`--- Round ${round} ---`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Score You: ${humanScore} | Computer: ${computerScore}\n`);
        }

        console.log("=== GAME OVER ===");
        console.log(`Final Score You: ${humanScore} | Computer: ${computerScore}\n`);

        if (humanScore > computerScore) {
            console.log("Congrats! You win the game")
        }
        else if (humanScore < computerScore) {
            console.log("You lose! Try again");
        }
        else {
            console.log("It's a tie!");
        }
    }


playGame();