const readLineSync = require("readline-sync");
//class card and player created

class card {
  constructor(name, value) {
    (this.name = name), (this.value = value);
  }
}

class player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
}

//instantiate each of the four suits of the English deck with their respective 12 cards
const D2 = new card("2♦", 2);
const D3 = new card("3♦", 3);
const D4 = new card("4♦", 4);
const D5 = new card("5♦", 5);
const D6 = new card("6♦", 6);
const D7 = new card("7♦", 7);
const D8 = new card("8♦", 8);
const D9 = new card("9♦", 9);
const JD = new card("J♦", 10);
const QD = new card("Q♦", 10);
const KD = new card("K♦", 10);
const AD = new card("A♦", 11);

const C2 = new card("2♣", 2);
const C3 = new card("3♣", 3);
const C4 = new card("4♣", 4);
const C5 = new card("5♣", 5);
const C6 = new card("6♣", 6);
const C7 = new card("7♣", 7);
const C8 = new card("8♣", 8);
const C9 = new card("9♣", 9);
const JC = new card("J♣", 10);
const QC = new card("Q♣", 10);
const KC = new card("K♣", 10);
const AC = new card("A♣", 11);

const H2 = new card("2♥", 2);
const H3 = new card("3♥", 3);
const H4 = new card("4♥", 4);
const H5 = new card("5♥", 5);
const H6 = new card("6♥", 6);
const H7 = new card("7♥", 7);
const H8 = new card("8♥", 8);
const H9 = new card("9♥", 9);
const JH = new card("J♥", 10);
const QH = new card("Q♥", 10);
const KH = new card("K♥", 10);
const AH = new card("A♥", 11);

const S2 = new card("2♠", 2);
const S3 = new card("3♠", 3);
const S4 = new card("4♠", 4);
const S5 = new card("5♠", 5);
const S6 = new card("6♠", 6);
const S7 = new card("7♠", 7);
const S8 = new card("8♠", 8);
const S9 = new card("9♠", 9);
const JS = new card("J♠", 10);
const QS = new card("Q♠", 10);
const KS = new card("K♠", 10);
const AS = new card("A♠", 11);

//this function sorts the deck randomly to start a new game
function createDeck() {
  let newdeck = [
    D2,
    D3,
    D4,
    D5,
    D6,
    D7,
    D8,
    D9,
    JD,
    QD,
    KD,
    AD,
    C2,
    C3,
    C4,
    C5,
    C6,
    C7,
    C8,
    C9,
    JC,
    QC,
    KC,
    AC,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
    S8,
    S9,
    JS,
    QS,
    KS,
    AS,
    H2,
    H3,
    H4,
    H5,
    H6,
    H7,
    H8,
    H9,
    JH,
    QH,
    KH,
    AH,
  ];

  newdeck.sort(() => Math.random() - 0.5);

  return newdeck;
}

function registerPlayer() {
  console.log("Hi Stranger, ready for some blackjack?");

  const name = readLineSync.question("what is your name\n");

  const player1 = new player(name);

  return player1;
}

//function that initializes the game
function game() {
  let currentPlayer = registerPlayer();

  let newGame = true;

  while (newGame) {
    newGame = newRound(currentPlayer);
  }
}

function validateTotal(total, deck) {
  let answer = readLineSync.question("Do you want another card? yes or no\n");
  answer.toLowerCase();
  if (answer == "yes") {
    let newCard = deck.pop();
    total += newCard.value;
    console.log("your new card is " + newCard.name);
    console.log("Now your total is = " + total);
  }
  return total;
}

function newRound(player) {
  let newDeck = createDeck();

  let currentTotal = 0;

  //this are the first two mandatory cards that the game give us
  let card1 = newDeck.pop();
  let card2 = newDeck.pop();

  currentTotal = card1.value + card2.value;

  console.log("your first card is " + card1.name);
  console.log("your second card is " + card2.name);
  console.log("Your total is = " + currentTotal);

  while (currentTotal < 18) {
    currentTotal = validateTotal(currentTotal, newDeck);
  }

  let continueGame = false;
  if (currentTotal > 21) {
    console.log("You lost");
    return continueGame
  }
  //if player wins
  console.log("Congratulations you won");
  player.score += 1000;
  console.log("you have gained: " + player.score + " points");
  let answer = readLineSync.question("do you want to play again? yes or no\n");
  answer.toLowerCase();
  continueGame = answer == "yes" ? true : false;
  return continueGame;
}

game();
