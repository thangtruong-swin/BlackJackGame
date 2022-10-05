let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEL = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
// let sumEL = document.querySelector(".sum-el");

let cardsEL = document.getElementById("cards-el");
let newCardBtn = document.getElementById("newCard-btn");
let startGameBtn = document.getElementById("startGame-btn");
let resetBtn = document.getElementById("reset-btn");

function startGame() {
	startGameBtn.setAttribute("disabled", "");
	resetBtn.setAttribute("disabled", "");
	renderGame();
}

function renderGame() {
	// cardsEL.textContent = "Cards: " + cards[0] + ", " + cards[1];
	// cardsEL.innerHTML = "Cards: " + cards;
	cardsEL.textContent = "Cards: ";
	for (let i = 0; i < cards.length; i++) {
		cardsEL.textContent += cards[i] + " ";
	}

	sumEL.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card ? 🙂";
	} else if (sum === 21) {
		message = "Wohoo! You've got Blackjack ! 🥳";
		hasBlackJack = true;
		newCardBtn.setAttribute("disabled", "");
		document.getElementById("reset-btn").disabled = false;
	} else {
		message = "You're out of the game ! 😭";
		isAlive = false;
		newCardBtn.setAttribute("disabled", "");
		// startGameBtn.setAttribute("disabled", "");
		// resetBtn.setAttribute("disabled", false);
		document.getElementById("reset-btn").disabled = false;
	}
	messageEL.textContent = message;
}

function newCard() {
	let card = Math.random() * 10;
	card = Math.round(card);
	cards.push(card);
	sum += card;

	renderGame();
	console.log(cardsEL.textContent);
}

function handleReload() {
	location.reload();
}
