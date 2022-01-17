function computerPlay() {
	let randomNumber = Math.floor(Math.random() * (3 - 0));

	if (randomNumber === 0) {
		console.log('Rock');
		return 'Rock';
	} else if (randomNumber === 1) {
		console.log('Paper');
		return 'Paper';
	}
	console.log('Scissors');
	return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	if (
		playerSelection != 'paper' &&
		playerSelection != 'rock' &&
		playerSelection != 'scissors'
	) {
		alert("You didn't input the correct word!");
		return;
	}

	if (
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		score++;
		return `You Win! ${playerSelection} beats ${computerSelection}`;
	}
	score--;
	return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

//const playerSelection = 'rock';
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game() {
	let playerSelection;
	for (i = 0; i < 5; i++) {
		playerSelection = prompt('Please input rock, paper or scissors');
		let computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
	}
	if (score > 0) {
		console.log('Congratulations! You are the winner of the game!');
		return;
	}
	console.log('You lost the game! Try again!');
	return;
}

let score = 0;
game();
