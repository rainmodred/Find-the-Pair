import Cards from './Cards.js';

class Game {
  constructor(lives) {
    this.newGame(lives);
    this.cardsClicked = 0;
    this.clickedCardsArray = [];

    // this.gameDom = document.querySelector(".game");
    // this.gameOverDom = document.querySelector(".game-over");
    // this.movesDom = document.querySelector(".moves");
    // this.livesDom = document.querySelector(".lives");
    // this.createCards();
  }
  newGame(lives) {
    this.opened = 0;
    this.moves = 0;
    this.lives = lives;
    // this.movesDom.textContent = +this.moves;
    // this.livesDom.textContent = +this.lives;
    // updateDom();
    // this.handleCardClick();
  }

  addClickedCard(card) {
    this.clickedCardsArray.push(card);
  }
  checkGameOver() {
    if (this.compareCards()) {
      this.clickedCardsArray = [];
      this.opened++;
      this.updateMoves();
      if (this.opened === 8) {
        this.showGameOver('won');
      }
    } else {
      this.closeCards();
      this.updateLives();
      if (this.lives === 0) {
        this.showGameOver('lost');
      }
      this.updateMoves();
    }
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
