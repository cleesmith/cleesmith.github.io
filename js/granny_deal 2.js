//create new object with cards
var cards = new Array ();

//create variables to limit cards dealt:
var cardsLeftToDeal = 7;
var cardsDealt = 0;

cards[00] = "Fool";
cards[01] = "Magician";
cards[02] = "HighPriestess";
cards[03] = "Empress";
cards[04] = "Emperor";
cards[05] = "Hierophant";
cards[06] = "Lovers";
cards[07] = "Chariot";
cards[08] = "Strength";
cards[09] = "Hermit";
cards[10] = "Wheel";
cards[11] = "Justice";
cards[12] = "HangedMan";
cards[13] = "Death";
cards[14] = "Temperance";
cards[15] = "Devil";
cards[16] = "Tower";
cards[17] = "Star";
cards[18] = "Moon";
cards[19] = "Sun";
cards[20] = "Judgement";
cards[21] = "World";
cards[22] = "Wands1";
cards[23] = "Wands2";
cards[24] = "Wands3";
cards[25] = "Wands4";
cards[26] = "Wands5";
cards[27] = "Wands6";
cards[28] = "Wands7";
cards[29] = "Wands8";
cards[30] = "Wands9";
cards[31] = "Wands10";
cards[32] = "WandsPage";
cards[33] = "WandsKnight";
cards[34] = "WandsQueen";
cards[35] = "WandsKing";
cards[36] = "Pentacles1";
cards[37] = "Pentacles2";
cards[38] = "Pentacles3";
cards[39] = "Pentacles4";
cards[40] = "Pentacles5";
cards[41] = "Pentacles6";
cards[42] = "Pentacles7";
cards[43] = "Pentacles8";
cards[44] = "Pentacles9";
cards[45] = "Pentacles10";
cards[46] = "PentaclesPage";
cards[47] = "PentaclesKnight";
cards[48] = "PentaclesQueen";
cards[49] = "PentaclesKing";
cards[50] = "Cups1";
cards[51] = "Cups2";
cards[52] = "Cups3";
cards[53] = "Cups4";
cards[54] = "Cups5";
cards[55] = "Cups6";
cards[56] = "Cups7";
cards[57] = "Cups8";
cards[58] = "Cups9";
cards[59] = "Cups10";
cards[60] = "CupsPage";
cards[61] = "CupsKnight";
cards[62] = "CupsQueen";
cards[63] = "CupsKing";
cards[64] = "Swords1";
cards[65] = "Swords2";
cards[66] = "Swords3";
cards[67] = "Swords4";
cards[68] = "Swords5";
cards[69] = "Swords6";
cards[70] = "Swords7";
cards[71] = "Swords8";
cards[72] = "Swords9";
cards[73] = "Swords10";
cards[74] = "SwordsPage";
cards[75] = "SwordsKnight";
cards[76] = "SwordsQueen";
cards[77] = "SwordsKing";

// cls: is this more random:
// var array = new Uint32Array(7);
// window.crypto.getRandomValues(array);
// for (var i = 0; i < array.length; i++) {
//		console.log(array[i] % 78);
// }

// create function to randomly select a number
// that corresponds with the number of cards available.
// Used Math.floor to remove remainder from the random
// calculation, found that i could never get the
// King Of Swords because 78 was an impossibility.
// opted for math.round in order to achieve that possibility.
var random = function() {
  return Math.round(Math.random() * (77-cardsDealt));
};

// create a function to randomly determine if the card
// will be oriented up or down,
// if randomOrient returns 0, do nothing.
// if randomOrient returns 1, rotate the card at a 180 degree angle.
var randomOrient = function() {
	return Math.round(Math.random());
};

// create a function to remove a card once it has been used.
// This is a basic way to avoid duplicates.
// Implies that to deal we must refresh the page.
var removeCard = function(k) {
	for (var j=k; j<cards.length; j++) {
		cards[j] = cards[j+1];
	}
	cardsLeftToDeal--;
	cardsDealt++;
};

// deal your random number as a card and orient:
// up = randomOrient is 0
// down = randomOrient is 1
var dealCard = function(i) {
	if (cardsLeftToDeal == 0) {
		return false;
	} else {
		//display card chosen in HTML by creating an image element
		var img = document.createElement("img");
		var cardJustDealt = cards[i];
		// cls: 0 equals no reversals:
		var orient = 0; //randomOrient(); <-- allows reversals
		$(img).addClass(cardJustDealt);
		// addClass for card's position (1-7)
		img.src = ("images/grannys_deck/" + cards[i] + ".jpg");
		img.alt = cards[i];

		if (orient === 1) {
			$(img).addClass("orientationDown");
			document.getElementById("hand").appendChild(img);
			removeCard(i);
		} else {
			$(img).addClass("orientationUp");
			document.getElementById("hand").appendChild(img);
			removeCard(i);
		}
	}
};

// deal cards when "deck" is clicked and
// shuffle the deck by reloading the page
$(document).ready(function() {
	$('#deal').click(function() {
		dealCard(random());
	});
	$('#shuffle').click(function() {
		location.reload();
	});
});
