console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[2];
cardsInPlay.push(cardOne);

var cardTwo = cards[3];
cardsInPlay.push(cardTwo);

console.log("User flipped queen" + cardOne);
console.log("User flipped king" + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
