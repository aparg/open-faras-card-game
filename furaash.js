
// MODIFIED CODE :D

// FUNCTION DECLARATIONS

/**
 * Function to generate 3 cards and return as array
 */
function generateCards () {

	var cards = [
		Math.floor((Math.random()*12)+1), 
		Math.floor((Math.random()*12)+1), 
		Math.floor((Math.random()*12)+1)
	]

	return cards

}


/**
 * Function to convert card number to card name
 * @param {Number} num  Card Number
 */
function conCard(num) {

	if (num == 11) 
		return "Jack"
	else if (num == 12)
		return "Queen"
	else if  (num == 13)
		return "King"
	else
		return num
}


/**
 * Function to check for match from array of card
 * @param {Array} cards
 */
function checkMatchFromCards(cards) {
	
	// Spreading cards to x,y & z from Array
	var x = cards[0]
	var y = cards[1]
	var z = cards[2]

	// Game Logic Conditions
	if (x == y && y == z) {

		return 3  // Trial

	} else if ((x == (y+1) && y == (z+1)) ||
	 		   (z == (y+1) && y == (x+1)) ||
	  		   (y == (z+1) && z == (x+1) )) {

		return 2 // Run

	} else if ( x==y || y == z || z==x) {

		return 1 // Juut

	} else {

		return 0 // None
	}
}



// START OF THE GAME

console.log("=====================================")
console.log("==   WELCOME TO THE APAAR CASINO   ==")
console.log("=====================================")
console.log()  // Blank Line

var playerCards = generateCards()
var computerCards = generateCards()



console.log ("These are the cards you've got: ");
console.log (...playerCards);

console.log() // BLANK LINE

console.log ("These are the cards PC has got: ");
console.log (...computerCards);

console.log() // BLANK LINE

var playerResult = checkMatchFromCards(playerCards)
var computerResult = checkMatchFromCards(computerCards)


if (playerResult > computerResult) {

	console.log("You WIN! 😎 😎 😎")

} else if ( playerResult == computerResult) {

	var playerLargest = Math.max(...playerCards)
	var computerLargest = Math.max(...computerCards)

	if (playerLargest == 1) playerLargest = 14
	if (computerLargest == 1) computerLargest = 14

	if (playerLargest > computerLargest) {
		console.log('You WIN! 😎 😎 😎')
	}else {
		console.log('YOU LOSE! 🖕')
	}

} else {

	console.log('YOU LOSE! 🖕')

}


console.log("You got:" + "<img src='" + playerCards[0] + ".png'/>" + "<img src='" + playerCards[1] + ".png'/>" +  "<img src='" + playerCards[2] + ".png'/>")
document.getElementById("oppa").innerHTML = "You got:" +"<br>" + "<img src='" + playerCards[0] + ".png'/>" + "<img src='" + playerCards[1] + ".png'/>" +  "<img src='" + playerCards[2] + ".png'/>"
document.getElementById("oppa1").innerHTML = "Computer got:" + "<img src='" + computerCards[0] + ".png'/>" + "<img src='" + computerCards[1] + ".png'/>" +  "<img src='" + computerCards[2] + ".png'/>"
document.getElementById("oppa2").innerHTML = checkArray()
document.getElementById("oppa3").innerHTML = checkArray1()
document.getElementById("oppa4").innerHTML = o