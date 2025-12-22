


let getHumanchoice = prompt("Please enter your selection: Rock Paper or Scissors?");

console.log(getHumanchoice);

function getComputerChoice() {
     
    const choices = ["rock", "paper", "scissors"]

    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}
console.log(getComputerChoice());