const array = [`rock`,`paper`,`scissors`];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getHumanChoice(){
    return prompt(`Please type in "rock", "paper" or "scissors".`).toLowerCase();
}

function playGame(){
    return function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(); 
        console.log(`You chose: ${humanChoice}.`)  
        console.log(`Computer chose: ${computerChoice}.`);
        
        if (humanChoice === `rock` && computerChoice === `scissors`) {
            console.log(`You win! Rock beats scissors. Your score: ${++humanScore}`);
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log(`You win! Paper beats rock. Your score: ${++humanScore}`);
        } else if (humanChoice === `scissors' && computerChoice === 'paper`) {
            console.log(`You win! Scissors beats paper. Your score: ${++humanScore}`);
        } else if (humanChoice === computerChoice) {
            console.log(`It's a draw.`);
        } else {
            console.log(`Sorry, you lose... Computer's score: ${++computerScore}`);
        }
    }()
}

function tally(){
    if (humanScore > computerScore) {
        console.log(`CONGRATULATIONS YOU WON THE GAME!`);
    } else if (humanScore < computerScore) {
        console.log(`You lost the game, better luck next time...`);
    } else {
        console.log(`It's a tie, nobody wins this time.`);
    }
}

playGame();
playGame();
playGame();
playGame();
playGame();
tally();



