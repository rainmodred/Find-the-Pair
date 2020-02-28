class Game {
  constructor(lives) {
    this.newGame(lives);
    this.cardsClicked = 0;
    this.opened = 0;
    this.moves = 0;
    this.lives = lives;
    this.openToWin = 8;

  }
  newGame(lives) {
    this.opened = 0;
    this.moves = 0;
    this.lives = lives;
    this.openToWin = 8;
  }

  addClickedCardName(cardName) {
    this.clickedCardsArray.push(cardName);
  }

  compareCards(card1, card2) {
    return card1.dataset.name === card2.dataset.name;
  }

  updateLives() {
    this.lives--;
  }
  
  updateMoves() {
    this.moves++;
  }

  updateOpened() {
    this.opened++;
  }
}

export default Game;
