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

/*
function getHumanChoice() {
  let humanChoice = prompt("Make a choice! (Rock, Paper, or Scissors)");
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

  if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
    return humanChoice;
  } else {
    return "Invalid";
  }
}
*/

let humanScore = 0;
let computerScore= 0;
const resultsDiv = document.getElementById("results");

function playRound(humanChoice, computerChoice) {
  let resultMessage= "";
  if (humanChoice === computerChoice) {
    resultMessage=`It's a tie! You both chose ${humanChoice}`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    resultMessage= `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    resultMessage=`You lose... ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  resultsDiv.innerHTML= `
  <p>${resultMessage}</p>
  <p>Score => Human: ${humanScore}, Computer: ${computerScore}</p>
  `;

    if (humanScore === 5 || computerScore === 5) {
    gameOver = true;
    let finalMessage =
      humanScore === 5
        ? "🎉 Congratulations, you win the game!"
        : "🤖 Sorry, the computer wins the game!";
    resultsDiv.innerHTML += `<p><strong>${finalMessage}</strong></p>`;
  }

}
const rock= document.getElementById("rock");
const paper= document.getElementById("paper");
const scissors= document.getElementById("scissors");

rock.addEventListener("click", ()=> {
  playRound("Rock", getComputerChoice());
});
paper.addEventListener("click", ()=> {
  playRound("Paper", getComputerChoice());
});
scissors.addEventListener("click", ()=> {
  playRound("Scissors", getComputerChoice());
});

/*
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
*/
