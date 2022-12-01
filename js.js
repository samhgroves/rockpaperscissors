const myScore = document.querySelector('.playerScore');
myScore.textContent = 0;
const oppScore = document.querySelector('.computerScore');
oppScore.textContent = 0;

const myChoice = document.querySelector('#myChoice');
const pcChoice = document.querySelector('#pcChoice');
const gameOver = document.querySelector('#gameover');
const playAgain = document.querySelector('#playagain');
playAgain.disabled = true;
myChoice.className = 'fa-solid fa-question fa-5x';
pcChoice.className = 'fa-solid fa-question fa-5x';

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

    if (computer == "rock" && user == "rock") {
        pcChoice.className = 'fa-regular fa-hand-back-fist fa-5x';
    } else if (computer == "paper" && user == "paper"){
        pcChoice.className = 'fa-solid fa-newspaper fa-5x';
    } else if (computer == "scissors" && user == "scissors"){
        pcChoice.className = 'fa-solid fa-scissors fa-5x';
    } else if (computer == "rock" && user == "paper"){
        pcChoice.className = 'fa-regular fa-hand-back-fist fa-5x';
        myScore.textContent ++
        checkScore();
    } else if (computer == "rock" && user == "scissors"){
        pcChoice.className = 'fa-regular fa-hand-back-fist fa-5x';
        oppScore.textContent ++;
        checkScore();
    } else if (computer == "paper" && user == "rock"){
        pcChoice.className = 'fa-solid fa-newspaper fa-5x';
        oppScore.textContent ++;
        checkScore();
    } else if (computer == "paper" && user == "scissors"){
        pcChoice.className = 'fa-solid fa-newspaper fa-5x';
        myScore.textContent ++;
        checkScore();
    } else if (computer == "scissors" && user == "rock"){
        pcChoice.className = 'fa-solid fa-scissors fa-5x';
        myScore.textContent ++;
        checkScore();
    } else if (computer == "scissors" && user == "paper"){
        pcChoice.className = 'fa-solid fa-scissors fa-5x';
        oppScore.textContent ++;
        checkScore();
    } else {console.log("Something went wrong...")}
    }

function checkScore() {
 if (myScore.textContent == 5) {
    playAgain.disabled = false;
    playRock.disabled = true;
    playPaper.disabled = true;
    playScissors.disabled = true;
    gameOver.textContent = 'You Win!'
    gameOver.classList.remove('hidden');
    playAgain.classList.remove('hidden');
 } else if (oppScore.textContent == 5){
    playAgain.disabled = false;
    playRock.disabled = true;
    playPaper.disabled = true;
    playScissors.disabled = true;
    gameOver.textContent = 'You lose!'
    gameOver.classList.remove('hidden');
    playAgain.classList.remove('hidden');
 }
}

playAgain.addEventListener('click', () => {
    gameOver.classList.add('hidden');
    playAgain.classList.add('hidden');
    myChoice.className = 'fa-solid fa-question fa-5x';
    pcChoice.className = 'fa-solid fa-question fa-5x';
    myScore.textContent = 0;
    oppScore.textContent = 0;
    playRock.disabled = false;
    playPaper.disabled = false;
    playScissors.disabled = false;
});

const playRock = document.querySelector('.rock');

playRock.addEventListener('click', () => {
    myChoice.className = 'fa-regular fa-hand-back-fist fa-5x';
    playRound(getComputerChoice(), 'rock');
});

const playScissors = document.querySelector('.scissors');

playScissors.addEventListener('click', () => {
    myChoice.className = 'fa-solid fa-scissors fa-5x'
   playRound(getComputerChoice(), 'scissors');
});

const playPaper = document.querySelector('.paper');

playPaper.addEventListener('click', () => {
    myChoice.className = 'fa-solid fa-newspaper fa-5x';
    playRound(getComputerChoice(), 'paper');
});
