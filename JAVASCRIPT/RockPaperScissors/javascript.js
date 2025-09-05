console.log("Let's play Rock, Paper, Scissors!");

function getComputerChoice(){
    let computerChoice= Math.random();
    if (computerChoice < 0.34) { 
        return "Rock"; 
    } else if (computerChoice < 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function getHumanChoice() {
  let humanChoice = prompt("Make a choice! (Rock, Paper, or Scissors)");
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

  if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
    return humanChoice;
  } else {
    return "Invalid";
  }
}





function playGame(){
    let humanScore= 0
    let computerScore= 0
    function playRound(humanChoice, computerChoice){
     if (humanChoice === computerChoice){
        console.log("it's a tie! you both chose " + humanChoice)
    } else if ((humanChoice==="Rock" && computerChoice==="Scissors") ||
               (humanChoice==="Paper" && computerChoice==="Rock") ||
               (humanChoice==="Scissors" && computerChoice==="Paper")
        ) {console.log("You win! " + humanChoice+ " beats " +computerChoice+ "!");
            humanScore++
    } else {
        console.log("You lose... " +computerChoice+ " beats " +humanChoice+ "...");
        computerScore++
    }
    }

    for (let i=1; i<=5; i++){
        console.log(`\nRound ${i}:`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    }

   console.log("\nFinal Result:");
      if (humanScore > computerScore) {
        console.log("Congratulations! You win the game 🎉");
      } else if (computerScore > humanScore) {
        console.log("Sorry, the computer wins the game 🤖");
      } else {
        console.log("It's a tie game!");
    }

}

playGame();