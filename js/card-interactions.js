// Card interaction handlers for Taropian Songs Tarot
// Handles: single card flip/reveal, card clicks, modal popup, clipboard copy
// Dependencies: deal.js (cards array, formatCardName, dealCards), tarot-images.js (rwsTarot)

// Track if cards have been dealt
var cardsDealt = false;

// Reveal a single card
function revealSingleCard(cardId) {
  if (!cardsDealt) {
    // Deal cards first if not already dealt (but don't reveal them)
    dealCards(false);
    cardsDealt = true;
  }

  // Get the card number for this position
  var cardNumId = cardId.replace('card', 'cardNum');
  var cardNumElement = document.getElementById(cardNumId);
  var cardIndex = parseInt(cardNumElement.innerHTML);

  // Update the card image
  var img = document.getElementById(cardId);
  img.src = "images/taropian_songs/" + cards[cardIndex] + ".jpg#" + cardIndex;

  // Update the title
  var titleId = cardId.replace('card', 'title');
  var cardtitle = document.getElementById(titleId);
  var cleanTitle = cards[cardIndex].replace("_tiff", "");
  cardtitle.innerHTML = cleanTitle.replaceAll("_", " ");

  // Check if all cards are now revealed
  var allRevealed = true;
  for (var i = 1; i <= 7; i++) {
    var checkImg = document.getElementById('card' + i);
    if (checkImg.src.includes('0_Backs')) {
      allRevealed = false;
      break;
    }
  }

  // If all cards revealed, populate the div and show copy panel
  if (allRevealed) {
    document.getElementById('spreadCards').textContent = 'Please use the proper RWS tarot card number and name in your reading, and I have the following cards for a Tarot Horseshoe spread:\n';

    // Horseshoe order: Past, Present, Future, You, Setting, Obstacles, Outcome
    var horseshoeOrder = [6, 4, 2, 1, 3, 5, 7];
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
      var cardNumId = "cardNum" + cardNum;
      var cardIndex = parseInt(document.getElementById(cardNumId).innerHTML);
      var formattedName = formatCardName(cards[cardIndex]);

      // Add period after Position 7, then newline for all positions
      var ending = (i === 6) ? ".\n" : "\n";

      document.getElementById('spreadCards').textContent +=
        "Position " + (i + 1) + ": " + positionLabels[i] + " - " + formattedName + ending;
    }

    // Show the copy panel
    document.getElementById('spreadCards').textContent += "Also include an Overall Message for this 'Taropian Songs' tarot deck reading.";
    document.getElementById('copyPanel').style.display = 'block';
  }
}

function onClick(element) {
  var filepath = element.src;
  var filenameExt = filepath.replace(/^.*[\\\/]/, '');

  // Check if this is the card back - if so, reveal the card
  if (filenameExt.startsWith('0_Backs')) {
    revealSingleCard(element.id);
    return; // Don't open modal for card backs
  }

  var fileName = filenameExt.substring(0, filenameExt.lastIndexOf('.')) || filenameExt;
  fileName = fileName.replace("_tiff", "");
  fileName = fileName.replaceAll("_", " ");
  // replace the popup image with the spread card image:
  var imgTts = document.getElementById("imgTts");
  imgTts.src = element.src;
  imgTts.style.cursor = "pointer";

  // add the RWS equivalent image:
  cardNum = filenameExt.split('#')[1];
  if (cardNum == null) {
    cardNum = 78; // user clicked on back of card image
    fileName = " ";
  }

  var imgRws = document.getElementById("imgRws");
  imgRws.src = "images/rws_tarot/" + rwsTarot.cards[cardNum].img;
  imgRws.style.cursor = "pointer";

  // Set onclick handlers with card name and number
  var rwsCardName = rwsTarot.cards[cardNum].name;
  var cardNameAndNumber = rwsCardName + " (" + cardNum + ")";

  imgTts.onclick = function() {
    var searchQuery = '"Taropian Songs Tarot" RWS ' + cardNameAndNumber + ' meaning';
    window.open('https://www.google.com/search?q=' + encodeURIComponent(searchQuery), '_blank');
  };

  imgRws.onclick = function() {
    var searchQuery = '"Rider Waite Smith Tarot" ' + cardNameAndNumber + ' meaning';
    window.open('https://www.google.com/search?q=' + encodeURIComponent(searchQuery), '_blank');
  };

  // replace default text in p tag id=txtRws:
  document.getElementById("txtRws").innerText =
    rwsTarot.cards[cardNum].name + "\n" +
    "\u2014 " +
    "elemental: " + (rwsTarot.cards[cardNum].Elemental || "none") + "\n" +
    "\u2014 " +
    "affirmation: " + (rwsTarot.cards[cardNum].Affirmation || "none");

  // display altered popup modal:
  document.getElementById("modal01").style.display = "block";
}

function copyToClipboard() {
  var spreadText = document.getElementById('spreadCards').textContent;
  navigator.clipboard.writeText(spreadText);
  // Open Google search in new tab with the spread text
  window.open('https://www.google.com/search?q=' + encodeURIComponent(spreadText), '_blank');
  // Visual feedback
  var copyText = document.getElementById('copyText');
  var copyHeader = document.getElementById('copyHeader');
  var originalText = copyText.innerHTML;
  copyText.innerHTML = 'Copied!';
  copyHeader.classList.remove('w3-blue');
  copyHeader.classList.add('w3-green');
  setTimeout(function() {
    copyText.innerHTML = originalText;
    copyHeader.classList.remove('w3-green');
    copyHeader.classList.add('w3-blue');
  }, 2000);
}

// Plain old JS used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
