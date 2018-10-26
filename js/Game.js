import Cards from './Cards.js';

class Game {
  constructor(lives) {
    this.newGame(lives);
    this.cardsClicked = 0;
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
    this.openToWin = 1;
    // this.movesDom.textContent = +this.moves;
    // this.livesDom.textContent = +this.lives;
    // updateDom();
    // this.handleCardClick();
  }

  addClickedCardName(cardName) {
    this.clickedCardsArray.push(cardName);
  }
  // checkGameOver() {
  //   this.updateMoves();

  //     this.clickedCardsArray = [];
  //     this.updateOpened();
  //     if (this.opened === this.openToWin) {
  //       return 'won';
  //     }
  //   } else {
  //     //this.closeCards();
  //     this.updateLives();
  //     if (this.lives === 0) {
  //       return 'lost';
  //     }

  // }

  compareCards(card1, card2) {
    if (card1.dataset.name === card2.dataset.name) return true;
    return false;
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
