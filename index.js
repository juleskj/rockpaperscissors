let userGuess;
let result;

const allButtons = document.getElementById("buttons");
const draw = document.getElementById("draw");

const win = document.getElementById("win");

const lose = document.getElementById("lose");

const computerPlayer = document.getElementById("player2");
const userPlayer = document.getElementById("player1");

const allPlayers = document.querySelectorAll(".player");
const player = document.querySelector(".player");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("mousedown", clickRock);
paper.addEventListener("mousedown", clickPaper);
scissors.addEventListener("mousedown", clickScissors);
// document.querySelector(".scissors").addEventListener("mouseDown", playScissors);
// document.querySelector(".paper").addEventListener("mouseDown", playPaper);

function clickRock() {
  allPlayers.forEach((player) => {
    player.classList.add("shake");
  });

  document
    .querySelector(".player")
    .addEventListener("animationend", computerGuesses);

  userGuess = "rock";
}

function clickPaper() {
  userGuess = "paper";

  allPlayers.forEach((player) => {
    player.classList.add("shake");
  });

  player.addEventListener("animationend", computerGuesses);
}

function clickScissors() {
  userGuess = "scissors";

  allPlayers.forEach((player) => {
    player.classList.add("shake");
  });

  player.addEventListener("animationend", computerGuesses);
}

function computerGuesses() {
  allPlayers.forEach((player) => {
    player.classList.remove("shake");
  });

  const choices = ["scissors", "rock", "paper"];

  // Generate a random integer between 0 and 2 and pick the corresponding value
  let computerGuess = choices[Math.floor(Math.random() * 3)];

  determenWinner(computerGuess);
  console.log(computerGuess);
  console.log(userGuess);
}

function determenWinner(computerGuess) {
  //computer choose rock
  if (computerGuess === "rock" && userGuess === "rock") {
    result = tie();

    computerPlayer.classList.add("rock");
    userPlayer.classList.add("rock");
  }

  if (computerGuess === "rock" && userGuess === "paper") {
    result = userWins();

    computerPlayer.classList.add("rock");
    userPlayer.classList.add("paper");
  }

  if (computerGuess === "rock" && userGuess === "scissors") {
    result = userLoses();

    computerPlayer.classList.add("rock");
    userPlayer.classList.add("scissors");
  }

  //computer choose paper
  if (computerGuess === "paper" && userGuess === "paper") {
    result = tie();

    computerPlayer.classList.add("paper");
    userPlayer.classList.add("paper");
  }

  if (computerGuess === "paper" && userGuess === "rock") {
    result = userLoses();

    computerPlayer.classList.add("paper");
    userPlayer.classList.add("rock");
  }

  if (computerGuess === "paper" && userGuess === "scissors") {
    result = userWins();

    computerPlayer.classList.add("paper");
    userPlayer.classList.add("scissors");
  }

  //computer choose scissors
  if (computerGuess === "scissors" && userGuess === "scissors") {
    result = tie();

    computerPlayer.classList.add("scissors");
    userPlayer.classList.add("scissors");
  }

  if (computerGuess === "scissors" && userGuess === "rock") {
    result = userWins();

    computerPlayer.classList.add("scissors");
    userPlayer.classList.add("rock");
  }

  if (computerGuess === "scissors" && userGuess === "paper") {
    result = userLoses();

    computerPlayer.classList.add("scissors");
    userPlayer.classList.add("paper");
  }
}

function tie() {
  draw.classList.remove("hidden");
  allButtons.addEventListener("click", playAgian, { once: true });
}

function userWins() {
  win.classList.remove("hidden");
  allButtons.addEventListener("click", playAgian, { once: true });
}

function userLoses() {
  lose.classList.remove("hidden");
  allButtons.addEventListener("click", playAgian, { once: true });
}

function playAgian() {
  lose.classList.add("hidden");
  win.classList.add("hidden");
  draw.classList.add("hidden");

  resetHand();
}

function resetHand() {
  allPlayers.forEach((player) => {
    player.classList = "player";
  });
}
