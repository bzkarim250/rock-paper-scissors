function getComputerChoice() {
  let choices = ["rock", "paper", "scissor"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a draw";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissor') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissor' && computerSelection === 'paper')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${playerSelection} can't beat ${computerSelection}`;
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let round = 0; round < 5; round++) {
    let playerSelection = prompt("Enter your choice between Rock, Scissor, or Paper");
    playerSelection = playerSelection.toLowerCase();

    if (
      playerSelection !== "rock" &&
      playerSelection !== "scissor" &&
      playerSelection !== "paper"
    ) {
      alert("Wrong choice, try again");
      round--;
      continue;
    }

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerWins++;
    } else if (result.includes("lose")) {
      computerWins++;
    }
  }

  if (playerWins > computerWins) {
    return alert(`Congratulations! You win the game with ${playerWins} - ${computerWins}`);
  } else if (computerWins > playerWins) {
    return alert(`You lose the game! with ${playerWins} - ${computerWins}`);
  } else {
    return alert(`It's a tie. The game ends in a draw with ${playerWins} - ${computerWins}`);
  }
}

console.log(game());
