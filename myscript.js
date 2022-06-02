// 3 choices that stay constant 
const choices = ['rock','paper', 'scissors'];
const playerSelection = userPlay()
const computerSelection  = computerPlay();

// function that plays five rounds of the game, and returns the results of the winner after the five rounds

function game() {
  for (let i = 0; i < 5; i++){
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    const currentRound = playRound(playerSelection, computerSelection);
    console.log(currentRound);
  }
}

// Function that grabs the input from userPlay and grabs the input from computerPlay and 
// returns a result, either win, lose or tie!

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    return "tie";
  
  } else if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection == "paper")
  )
    
    {
      return "Player wins!";
    } else {
      return "The computer WINS REEEEEE";
    }
}    
  
// userPlay function that prompt the user to type in either rock, paper or scissors!

 function userPlay(){
   let input = prompt("Pick rock paper or scissors");
   return input;
 }

 // computerPlay function that takes an item from the given array and returns a random result

 function computerPlay() {
   return choices[Math.floor(Math.random()*choices.length)];
 }

console.log(game());