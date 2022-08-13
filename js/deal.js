//create new object with cards
var cards = new Array ();

//create variables to limit cards dealt:
var cardsLeftToDeal = 7;
var cardsDealt = 0;

cards[00] = "0_Fool_tiff";
cards[01] = "1_Magician_tiff";
cards[02] = "2_High_Priestess_tiff";
cards[03] = "3_Empress_tiff";
cards[04] = "4_Emperor_tiff";
cards[05] = "5_Hierophant_tiff";
cards[06] = "6_Lovers_tiff";
cards[07] = "7_Chariot_tiff";
cards[08] = "8_Strength_tiff";
cards[09] = "9_Hermit_tiff";
cards[10] = "10_Wheel_of_Fortune_tiff";
cards[11] = "11_Justice_tiff";
cards[12] = "12_Hanged_tiff";
cards[13] = "13_Death_tiff";
cards[14] = "14_Temperance_tiff";
cards[15] = "15_Devil_tiff";
cards[16] = "16_Tower_tiff";
cards[17] = "17_Star_tiff";
cards[18] = "18_Moon_tiff";
cards[19] = "19_Sun_tiff";
cards[20] = "20_Judgement_tiff";
cards[21] = "21_World_tiff";
cards[22] = "Ace_of_Wands_tiff";
cards[23] = "2_Wands_tiff";
cards[24] = "3_Wands_tiff";
cards[25] = "4_Wands_tiff";
cards[26] = "5_Wands_tiff";
cards[27] = "6_Wands_tiff";
cards[28] = "7_Wands_tiff";
cards[29] = "8_Wands_tiff";
cards[30] = "9_Wands_tiff";
cards[31] = "10_Wands_tiff";
cards[32] = "Page_of_Wands_tiff";
cards[33] = "Knight_of_Wands_tiff";
cards[34] = "Queen_of_Wands_tiff";
cards[35] = "King_of_Wands_tiff";
cards[36] = "Ace_of_Pentacles_tiff";
cards[37] = "2_Pentacles_tiff";
cards[38] = "3_Pentacles_tiff";
cards[39] = "4_Pentacles_tiff";
cards[40] = "5_Pentacles_tiff";
cards[41] = "6_Pentacles_tiff";
cards[42] = "7_Pentacles_tiff";
cards[43] = "8_Pentacles_tiff";
cards[44] = "9_Pentacles_tiff";
cards[45] = "10_Pentacles_tiff";
cards[46] = "Page_of_Pentacles_tiff";
cards[47] = "Knight_of_Pentacles_tiff";
cards[48] = "Queen_of_Pentacles_tiff";
cards[49] = "King_of_Pentacles_tiff";
cards[50] = "Ace_of_Cups_tiff";
cards[51] = "2_Cups_tiff";
cards[52] = "3_Cups_tiff";
cards[53] = "4_Cups_tiff";
cards[54] = "5_Cups_tiff";
cards[55] = "6_Cups_tiff";
cards[56] = "7_Cups_tiff";
cards[57] = "8_Cups_tiff";
cards[58] = "9_Cups_tiff";
cards[59] = "10_Cups_tiff";
cards[60] = "Page_of_Cups_tiff";
cards[61] = "Knight_of_Cups_tiff";
cards[62] = "Queen_of_Cups_tiff";
cards[63] = "King_of_Cups_tiff";
cards[64] = "Ace_of_Swords_tiff";
cards[65] = "2_Swords_tiff";
cards[66] = "3_Swords_tiff";
cards[67] = "4_Swords_tiff";
cards[68] = "5_Swords_tiff";
cards[69] = "6_Swords_tiff";
cards[70] = "7_Swords_tiff";
cards[71] = "8_Swords_tiff";
cards[72] = "9_Swords_tiff";
cards[73] = "10_Swords_tiff";
cards[74] = "Page_of_Swords_tiff";
cards[75] = "Knight_of_Swords_tiff";
cards[76] = "Queen_of_Swords_tiff";
cards[77] = "King_of_Swords_tiff";

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
		img.src = ("images/taropian_songs/" + cards[i] + ".jpg");
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
