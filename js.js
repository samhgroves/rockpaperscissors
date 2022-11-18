let userScore = 0;
let computerScore = 0;
let score = (" You: " + userScore + " Computer: " + computerScore);

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        return "rock"
    } else if (randomInt == 1){
        return "paper"
    } else if (randomInt == 2){
        return "scissors"
    }
}

function playRound(computer, user) {

    if (computer == user) {
        return("it's a tie")
    } else if (computer == "rock" && user == "paper"){
        userScore +=1;
        return("Paper beats rock. you win")
    } else if (computer == "rock" && user == "scissors"){
        computerScore +=1;
        return("rock beats scissors. you lose")
    } else if (computer == "paper" && user == "rock"){
        computerScore +=1;
        return("paper beats rock. you lose")
    } else if (computer == "paper" && user == "scissors"){
        userScore +=1;
        return("scissors beats paper. you win")
    } else if (computer == "scissors" && user == "rock"){
        userScore +=1;
        return("rock beats scissors. you win")
    } else if (computer == "scissors" && user == "paper"){
        computerScore +=1;
        return("scissors beats paper. you lose")
    } else {return("why did you say " + user + "? are you a stupid baby?")}

    }

const playRock = document.querySelector('.rock');

playRock.addEventListener('click', () => {
    console.log(playRound(getComputerChoice(), 'rock'))
});

const playScissors = document.querySelector('.scissors');

playScissors.addEventListener('click', () => {
    console.log(playRound(getComputerChoice(), 'scissors'))
});

const playPaper = document.querySelector('.paper');

playPaper.addEventListener('click', () => {
    console.log(playRound(getComputerChoice(), 'paper'))
});

/*
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice()));
    }
    if (userScore > computerScore) {
        console.log("You Win! You: " + userScore + " Computer: " + computerScore)
    } else if (userScore < computerScore) {
        console.log("You Lose! You: " + userScore + " Computer: " + computerScore)
    } else if (userScore = computerScore) {
        console.log("It's a tie! You: " + userScore + " Computer: " + computerScore)
    } else {console.log("Something went horribly wrong")}
}

game();
*/