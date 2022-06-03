// Game variables and messages for winning or losing a round

const choices = ['rock','paper', 'scissors'];
const playerSelection = userPlay()
const computerSelection  = computerPlay();
let playerScore = 0;
let computerScore = 0;
let draws = 0;
let playerWin = "Player wins the game! Congratz!"
let computerWin = "The computer has won the game! Better luck next time"
let draw = "Draw!"

// function that plays five rounds of the game, and returns the results of the winner after the five rounds
// also keeps track of current score after each round

function game() {
  for (let i = 0; i < 5; i++){
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);
    
  }
}

// Function that grabs the input from userPlay and grabs the input from computerPlay and 
// returns a result, either win, lose or tie!

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    return draw;
  
  } else if (playerSelection === "rock" && computerSelection == "scissors"){
    return playerWin;
  } else if (playerSelection === "paper" && computerSelection == "rock"){
    return playerWin;
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
    return playerWin
  }

    else {
      return computerWin;
    }
}    
  
// userPlay function that prompt the user to type in either rock, paper or scissors!

 function userPlay(){
   let input = prompt("Pick rock paper or scissors").toLowerCase();
   return input;
 }

 // computerPlay function that takes an item from the given array and returns a random result

 function computerPlay() {
   return choices[Math.floor(Math.random()*choices.length)];
 }

 // Keeps track of game score and returns a winner or a loser

 function gameScore(result){

   if (result === playerWin) {
     playerScore++;
   } else if (result === "tie"){
     draws++;
   } else {
     computerScore++;
   }

   if (playerScore === 5) {
     console.log(playerWin);
     return;
   }
   if (computerScore === 5){
     console.log(computerWin);
     return;
   }
 }

console.log(game());