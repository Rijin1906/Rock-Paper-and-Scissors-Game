let userScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.querySelector("#scissor");

const message= document.getElementById("msg");

const compScore = document.getElementById("computer-score");
const score = document.getElementById("user-score");

// Access and manipulate the buttons as needed
rockButton.addEventListener("click", () => {
  let valueR = "rock";
  playGame(valueR);
});
paperButton.addEventListener("click", () => {
  let valueP = "paper";
  playGame(valueP);
});
scissorButton.addEventListener("click", () => {
  let valueS = "scissor";
  playGame(valueS);
});

// playGame function to play the game
function playGame(userChoice) {
  console.log(userChoice, "choosed by user");
  let cc = computerChoice();

  if (cc === userChoice) {
    console.log("Game was draw");
    message.innerText = "It's Draw, Play Again";
    message.style.backgroundColor="blue";
  } else {
   let flag= true;
    if (cc === "rock" && userChoice === "scissor") {
      // console.log("Computer Won !");
      computerScore += 1;
      flag=false;
      showWinner(computerScore,flag,cc,userChoice);
    } else if (cc === "rock" && userChoice === "paper") {
      // console.log("You won !");
      userScore += 1;
      showWinner(userScore,flag,cc,userChoice);
    } else if (cc === "paper" && userChoice === "rock") {
      // console.log("Computer Won !");
      computerScore += 1;
      flag=false;
      showWinner(computerScore,flag,cc,userChoice);
    } else if (cc === "paper" && userChoice === "scissor") {
      // console.log("You won !");
      userScore += 1;
      showWinner(userScore,flag,cc,userChoice);
    } else if (cc === "scissor" && userChoice === "paper") {
      // console.log("Computer Won !");
      computerScore += 1;
      flag=false;
      showWinner(computerScore,flag,cc,userChoice);
    } else if (cc === "scissor" && userChoice === "rock") {
      // console.log("You won !");
      userScore += 1;
      showWinner(userScore,flag,cc,userChoice);
    }
  }
}

// Generate a choice for computer
function computerChoice() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerOption = options[randomIndex];
  console.log(computerOption, "choose by computer");
  return computerOption;
}


// Show Winnerfunction 
function showWinner(a,b,c,d){
if(b==true){
   // console.log("You won");
   // console.log(a);
   message.innerText = `You Won! ${d} beats ${c}`;
   message.style.backgroundColor="green";
   score.innerText = a;
}
else{
   // console.log("You lose!");
   // console.log(a);
   message.innerText = `You Lose! ${c} beats your ${d}`;
   message.style.backgroundColor="red";
   compScore.innerText=a;
}
}