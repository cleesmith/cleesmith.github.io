//create new object with card file names
var cards = new Array ();

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

function integerToRoman(num) {
    const romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';
    for (let key in romanValues) {
        while (num >= romanValues[key]) {
            roman += key;
            num -= romanValues[key];
        }
    }
    return roman;
}

// Format card name with Roman numerals where appropriate
function formatCardName(cardName) {
	// Remove the _tiff suffix and replace underscores with spaces
	let cleanTitle = cardName.replace("_tiff", "").replaceAll("_", " ");
	
	// Check if it starts with "Ace" - NO roman numeral
	if (cleanTitle.startsWith("Ace ")) {
		return "The " + cleanTitle;
	}
	
	// Check if it's a court card (Page, Knight, Queen, King) - NO roman numeral
	if (cleanTitle.startsWith("Page ") || cleanTitle.startsWith("Knight ") || 
	    cleanTitle.startsWith("Queen ") || cleanTitle.startsWith("King ")) {
		return "The " + cleanTitle;
	}
	
	// Check if it's a numbered card
	let match = cleanTitle.match(/^(\d+)\s+(.+)$/);
	if (match) {
		let number = parseInt(match[1]);
		let rest = match[2];
		
		// Check if it's a Minor Arcana numbered pip card (has a suit name)
		if (rest.includes("Wands") || rest.includes("Pentacles") || 
		    rest.includes("Cups") || rest.includes("Swords")) {
			// Numbered pip card (2-10 of suit) - format: "IX (9) of Cups"
			let roman = integerToRoman(number);
			return roman + " (" + number + ") of " + rest;
		} else {
			// It's Major Arcana - format: "The Hermit IX (9)"
			if (number === 0) {
				return "The " + rest + " (0)";
			} else {
				let roman = integerToRoman(number);
				return "The " + rest + " " + roman + " (" + number + ")";
			}
		}
	}
	
	// For any other cards, add "The" prefix
	return "The " + cleanTitle;
}

const randomUnique = (range, count) => {
	let nums = new Set();
	while (nums.size < count) {
		nums.add(Math.floor(Math.random() * range));
	}
	return [...nums];
};

var dealCards = function(revealAll) {
	if (revealAll) {
		document.getElementById('spreadCards').textContent = 'Please use the proper RWS tarot card number and name in your reading, and I have the following cards for a Tarot Horseshoe spread:\n';
	}
	// 7 card spread
	spread = randomUnique(78, 7); // includes 0 to 78 = verified!
	var iCard = 0;
	for (iCard; iCard<= 6; iCard++) {
		spreadPosition = "card" + (iCard+1);
		// setup "drawn/pulled card" image
		var img = document.getElementById(spreadPosition);
		// spread[iCard] is a number = 0 to 77 from an array of 7 random numbers including 0-78, and
		// appending a ".jpg#?"" to the end of a URL makes the value available as a parameter
		// console.log("images/taropian_songs/" + cards[spread[iCard]] + ".jpg#" + spread[iCard]);

		// Only reveal the card image if revealAll is true
		if (revealAll) {
			img.src = ("images/taropian_songs/" + cards[spread[iCard]] + ".jpg#" + spread[iCard]);
		}

		// setup card title
		titlePos = "title" + (iCard+1);
		var cardtitle = document.getElementById(titlePos);
		cleanTitle = cards[spread[iCard]].replace("_tiff", "");
		if (revealAll) {
			cardtitle.innerHTML = cleanTitle.replaceAll("_", " ");
		}
		// hide/remember card number for cards array
		cardNumPos = "cardNum" + (iCard+1);
		var cardnum = document.getElementById(cardNumPos);
		cardnum.innerHTML = spread[iCard];
	}

	// If revealing all, add cards in horseshoe order with position labels
	if (revealAll) {
		var horseshoeOrder = [5, 3, 1, 0, 2, 4, 6]; // card6, card4, card2, card1, card3, card5, card7
		var positionLabels = [
			"The Past",
			"The Present",
			"The Future (Near)",
			"The Core Problem or Center of the Matter",
			"The Influence of Others",
			"Hopes and Fears",
			"The Final Outcome"
		];
		
		for (var i = 0; i < horseshoeOrder.length; i++) {
			var cardIndex = spread[horseshoeOrder[i]];
			var formattedName = formatCardName(cards[cardIndex]);
			
			// Add period after Position 7, then newline for all positions
			var ending = (i === 6) ? ".\n" : "\n";
			
			document.getElementById('spreadCards').textContent += 
				"Position " + (i + 1) + ": " + positionLabels[i] + " - " + formattedName + ending;
		}
		
		// Show the copy panel
		document.getElementById('spreadCards').textContent += 'Also include an Overall Message for the reading.';
		document.getElementById('copyPanel').style.display = 'block';
	}
};

function shuffleDeck() {
	location.reload();
};

function pull7Cards() {
	// Check if cards have already been dealt
	if (typeof cardsDealt !== 'undefined' && cardsDealt) {
		// Just reveal all cards without re-dealing
		document.getElementById('spreadCards').textContent = 'Please use the proper RWS tarot card number and name in your reading, and I have the following cards for a Tarot Horseshoe spread:\n';

		// Horseshoe order: Past, Present, Future, You, Setting, Obstacles, Outcome
		var horseshoeOrder = [6, 4, 2, 1, 3, 5, 7]; // card6, card4, card2, card1, card3, card5, card7
		var positionLabels = [
			"The Past",
			"The Present",
			"The Future (Near)",
			"The Core Problem or Center of the Matter",
			"The Influence of Others",
			"Hopes and Fears",
			"The Final Outcome"
		];

		for (var i = 0; i < horseshoeOrder.length; i++) {
			var cardNum = horseshoeOrder[i];
			var cardId = "card" + cardNum;
			var img = document.getElementById(cardId);
			var cardNumId = "cardNum" + cardNum;
			var cardIndex = parseInt(document.getElementById(cardNumId).innerHTML);

			// Get the formatted card name
			var formattedName = formatCardName(cards[cardIndex]);

			// Add period after Position 7, then newline for all positions
			var ending = (i === 6) ? ".\n" : "\n";

			// Add to div with position label
			document.getElementById('spreadCards').textContent += 
				"Position " + (i + 1) + ": " + positionLabels[i] + " - " + formattedName + ending;

			// Only reveal if still showing card back
			if (img.src.includes('0_Backs')) {
				img.src = "images/taropian_songs/" + cards[cardIndex] + ".jpg#" + cardIndex;

				// Update the title
				var titleId = "title" + cardNum;
				var cleanTitle = cards[cardIndex].replace("_tiff", "").replaceAll("_", " ");
				document.getElementById(titleId).innerHTML = cleanTitle;
			}
		}

		// Show the copy panel
		document.getElementById('spreadCards').textContent += 'Also include an Overall Message for the reading.';
		document.getElementById('copyPanel').style.display = 'block';
	} else {
		// Deal and reveal all cards
		dealCards(true);
		if (typeof cardsDealt !== 'undefined') {
			cardsDealt = true;
		}
	}
};
