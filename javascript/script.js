const mainBody = document.querySelector("#body");
mainBody.style.backgroundColor = "lightBlue";
mainBody.style.fontFamily = "'Poppins', sans-serif";  
mainBody.style.textAlign = "center";  
mainBody.style.paddingTop = "50px"; 

// ===== HEADINGS =====
const heading = document.createElement("h1");
heading.textContent = "Rock, Paper, Scissors!";
mainBody.appendChild(heading);

const subHeading = document.createElement("h2");
subHeading.textContent = "Please click your option below to play against the computer.";
mainBody.appendChild(subHeading);

// ===== BUTTONS =====
const rockBtn = document.createElement("button");
rockBtn.classList.add("rockBtn");
rockBtn.style.color = "white";
rockBtn.style.backgroundColor = "brown"; 
rockBtn.textContent = "Rock";
rockBtn.style.marginRight = "10px";
mainBody.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.classList.add("paperBtn");
paperBtn.style.color = "black";
paperBtn.style.backgroundColor = "white"; 
paperBtn.textContent = "Paper";
paperBtn.style.marginRight = "10px";
mainBody.appendChild(paperBtn);

const scissorBtn = document.createElement("button");
scissorBtn.classList.add("scissorBtn");
scissorBtn.style.color = "black";
scissorBtn.style.backgroundColor = "orange"; 
scissorBtn.textContent = "Scissors";
mainBody.appendChild(scissorBtn);

// ===== DISPLAY TEXTS =====
const humanPick = document.createElement("h4");
mainBody.appendChild(humanPick);

const cpuPick = document.createElement("h4");
mainBody.appendChild(cpuPick);

const resultText = document.createElement("h4");
mainBody.appendChild(resultText);

const scoreText = document.createElement("h4");
mainBody.appendChild(scoreText);

// ===== GAME LOGIC =====
const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  humanPick.textContent = `You chose: ${humanChoice}`;
  cpuPick.textContent = `Computer chose: ${computerChoice}`;

  if (humanChoice === computerChoice) {
    resultText.textContent = "It's a draw!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreText.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;

  // Game ends after 5 rounds
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultText.textContent = "🎉 Congratulations! You won the game!";
    } else {
      resultText.textContent = "😞 You lost the game. Better luck next time!";
    }

    // Disable buttons after game ends
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
  }
}

// ===== BUTTON CLICK EVENTS =====
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorBtn.addEventListener("click", () => playRound("scissors"));





