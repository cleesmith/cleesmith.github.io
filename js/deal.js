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

const randomUnique = (range, count) => {
	let nums = new Set();
	while (nums.size < count) {
		nums.add(Math.floor(Math.random() * range));
	}
	return [...nums];
};

var dealCards = function() {
	document.getElementById('spreadCards').value = 'Please use the proper RWS tarot card number and name in your reading, and I have the following cards for a Tarot Horseshoe spread: ';
	// 7 card spread
	spread = randomUnique(78, 7); // includes 0 to 78 = verified!
	i = 0;
	for (i; i <= 6; i++) {
		spreadPosition = "card" + (i+1);
		// setup "drawn/pulled card" image
		var img = document.getElementById(spreadPosition);
		// spread[i] is a number = 0 to 77 from an array of 7 random numbers including 0-78, and 
		// appending a ".jpg#?"" to the end of a URL makes the value available as a parameter
		img.src = ("images/taropian_songs/" + cards[spread[i]] + ".jpg#" + spread[i]);
		
		// setup card title
		titlePos = "title" + (i+1);
		var cardtitle = document.getElementById(titlePos);
		cleanTitle = cards[spread[i]].replace("_tiff", "");
		cardtitle.innerHTML = cleanTitle.replaceAll("_", " ");
		if (i === 0) {
			document.getElementById('spreadCards').value += cardtitle.innerHTML;
		} else {
			document.getElementById('spreadCards').value += ', ' + cardtitle.innerHTML;
		};
		// hide/remember card number for cards array
		cardNumPos = "cardNum" + (i+1);
		var cardnum = document.getElementById(cardNumPos);
		cardnum.innerHTML = spread[i];
	}
};

function shuffleDeck() {
	location.reload();
};

function pull7Cards() {
	dealCards();
};
