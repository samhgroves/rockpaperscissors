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

function playRound(computer) {
    
    let userChoice = prompt("rock, paper, or scissors?","");

    if (computer == userChoice) {
        return("it's a tie")
    } else if (computer == "rock" && userChoice == "paper"){
        userScore +=1;
        return("Paper beats rock. you win")
    } else if (computer == "rock" && userChoice == "scissors"){
        computerScore +=1;
        return("rock beats scissors. you lose")
    } else if (computer == "paper" && userChoice == "rock"){
        computerScore +=1;
        return("paper beats rock. you lose")
    } else if (computer == "paper" && userChoice == "scissors"){
        userScore +=1;
        return("scissors beats paper. you win")
    } else if (computer == "scissors" && userChoice == "rock"){
        userScore +=1;
        return("rock beats scissors. you win")
    } else if (computer == "scissors" && userChoice == "paper"){
        computerScore +=1;
        return("scissors beats paper. you lose")
    } else {return("why did you say " + userChoice + "? are you a stupid baby?")}

    }

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