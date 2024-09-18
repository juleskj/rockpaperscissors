let userGuess;
let result;

//her laver jeg en constant som vælger alle mine knapper
const buttons = document.querySelectorAll(".chooseButton");

//her tilføjer jeg en event listerne til alle mine knapper
buttons.forEach((button) => {
  button.addEventListener("click", getUserGuess);
});

//henter jeg data-value fra mine kapper og laver den om til userGuess variablen og tilsidt sender den vider med til buttonClicked
function getUserGuess(event) {
  userGuess = event.target.getAttribute("data-value");
  console.log("You selected:", userGuess);

  buttonClicked(userGuess);
}

const buttonDiv = document.getElementById("buttons");
const resetButton = document.querySelector(".reset");

const draw = document.getElementById("draw");

const win = document.getElementById("win");

const lose = document.getElementById("lose");

const userPlayer = document.getElementById("player1");
const computerPlayer = document.getElementById("player2");

const allPlayers = document.querySelectorAll(".player");
const player = document.querySelector(".player");

function buttonClicked() {
  //her giver jeg alle spillere klassen shake
  allPlayers.forEach((player) => {
    player.classList.add("shake");
  });

  //her lytter event listeren på at shake ender
  player.addEventListener("animationend", computerGuesses);
}

function computerGuesses() {
  //her fjerne jeg shake igen
  allPlayers.forEach((player) => {
    player.classList.remove("shake");
  });

  //her laver jeg array med choices og
  const choices = ["scissors", "rock", "paper"];

  // Generate a random integer between 0 and 2 and pick the corresponding value
  let computerGuess = choices[Math.floor(Math.random() * 3)];

  //her sender jeg computerGuess vider til determenWinner
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

  resetButton.classList.remove("hidden");
  //denne event listerne skal kun trigger en gang
  resetButton.addEventListener("click", playAgian, { once: true });
}

function userWins() {
  win.classList.remove("hidden");
  document.querySelector(".reset").classList.remove("hidden");

  resetButton.classList.remove("hidden");
  resetButton.addEventListener("click", playAgian, { once: true });
}

function userLoses() {
  lose.classList.remove("hidden");
  document.querySelector(".reset").classList.remove("hidden");

  resetButton.classList.remove("hidden");
  resetButton.addEventListener("click", playAgian, { once: true });
}

function playAgian() {
  //her tilføjer jeg hidden til texten igen
  lose.classList.add("hidden");
  win.classList.add("hidden");
  draw.classList.add("hidden");
  resetButton.classList.add("hidden");

  //her reseter jeg hænderne så de kun har klassen player
  allPlayers.forEach((player) => {
    player.classList = "player";
  });
}
