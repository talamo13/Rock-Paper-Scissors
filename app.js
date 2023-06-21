const message = document.querySelector(".message");
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");

let userChoice = 0;
let compChoice = 0;
let userPoints = 0;
let computerPoints = 0;

//Computers First Choice On Webpage Start
randomizeComputer();

//Main Program Function
function start(user, computer){
    //Randomize Computer Choice
    randomizeComputer();

    //Ties
    if (user == 1 & computer == 1) {
        message.textContent = "You Both Chose Rock! Tie!";
    }
    else if (user == 2 & computer == 2) {
        message.textContent = "You Both Chose Paper! Tie!";
    }
    else if (user == 3 & computer == 3) {
        message.textContent = "You Both Chose Scissors! Tie!";
    }
    //User Wins
    else if (user == 1 & computer == 3) {
        message.textContent = "Rock Beats Scissors! You Win!"
        updateScore("user");
    }
    else if (user == 2 & computer == 1) {
        message.textContent = "Paper Beats Rock! You Win!"
        updateScore("user");
    }
    else if (user == 3 & computer == 2) {
        message.textContent = "Scissors Beats Paper! You Win!"
        updateScore("user");
    }
    //Computer Wins
    else if (user == 3 & computer == 1) {
        message.textContent = "Scissors Loses To Rock! You Lose!";       
        updateScore("computer");
    }
    else if (user == 1 & computer == 2) {
        message.textContent = "Rock Loses To Paper! You Lose!"
        updateScore("computer");
    }
    else if (user == 2 & computer == 3) {
        message.textContent = "Paper Loses To Scissors! You Lose!"
        updateScore("computer");
    }
}

//Adjusts Score
function updateScore(winner) {
    if (winner == "user"){
        userPoints++;
        userScore.textContent = userPoints;
    }
    else if (winner == "computer"){
        computerPoints++;
        computerScore.textContent = computerPoints;
    }
}

//Choses A Random Number For The Computer
function randomizeComputer() {
    compChoice = Math.floor(Math.random() * 3) + 1;
}

rock.addEventListener("click", function(e){
    userChoice = 1;
    start(userChoice, compChoice);
})

paper.addEventListener("click", function(e){
    userChoice = 2;
    start(userChoice, compChoice);
})

scissors.addEventListener("click", function(e){
    userChoice = 3;
    start(userChoice, compChoice);
})
