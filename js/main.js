class Game {
  constructor() {
    this.cardsArray = [
      "moon",
      "moon",
      "goat",
      "rat",
      "summer",
      "winter",
      "rabbit",
      "sigma",
      "new-moon",
      "new-moon",
      "goat",
      "rat",
      "summer",
      "winter",
      "rabbit",
      "sigma"
    ];
    this.lives = 12;
    this.moves = 0;
    this.opened = 0;

    this.cardsClicked = 0;
    this.clickedCardsArray = [];

    this.gameDom = document.querySelector(".game");
    this.gameOverDom = document.querySelector(".game-over");
    this.movesDom = document.querySelector(".moves");
    this.livesDom = document.querySelector(".lives");
    this.createCards();
  }
  newGame() {
    this.opened = 0;
    this.moves = 0;
    this.lives = 12;
    this.cardsArray.sort((a, b) => {
      return 0.5 - Math.random();
    });

    this.movesDom.textContent = +this.moves;
    this.livesDom.textContent = +this.lives;
    // updateDom();

    this.handleCardClick();
  }
  createCards() {
    this.cardsArray.forEach(cardName => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("flipped");
      card.dataset.name = cardName;

      const front = document.createElement("div");
      front.classList.add("front");

      const back = document.createElement("div");
      back.classList.add("back");

      this.gameDom.appendChild(card);
      card.appendChild(front);
      card.appendChild(back);
    });
  }

  editCard(node, addClass, removeClass) {
    node.classList.remove("flipped");
    node.classList.add(addClass);
    node.dataset.name = addClass;
    return node;
  }

  handleCardClick() {
    const cards = [...document.querySelectorAll(".card")];
    cards.forEach((card, index) => {
      card.addEventListener("click", event => {
        if (
          [...card.classList].indexOf("flipped") === -1 ||
          this.clickedCardsArray.length > 1
        ) {
          return;
        }
        let cardName = this.cardsArray[index];
        card.classList.remove("flipped");
        card.classList.add(cardName);

        this.clickedCardsArray.push(card);
        if (this.clickedCardsArray.length === 2) {
          this.checkGameOver();
        }
      });
    });
  }

  closeCards() {
    setTimeout(() => {
      this.clickedCardsArray.forEach(card => {
        card.classList.remove(card.dataset.name);
        card.classList.add("flipped");
      });
      this.clickedCardsArray = [];
    }, 1000);
  }
  checkGameOver() {
    if (this.compareCards()) {
      this.clickedCardsArray = [];
      this.opened++;
      this.updateMoves();
      if (this.opened === 8) {
        this.showGameOver("won");
      }
    } else {
      this.closeCards();
      this.updateLives();
      if (this.lives === 0) {
        this.showGameOver("lost");
      }
      this.updateMoves();
    }
  }

  showGameOver(status) {
    const domSt = document.getElementsByClassName(status)[0];
    const span = document.createElement("span");
    span.classList.add("play-again");
    span.innerHTML = "Play again";
    this.gameOverDom.style.display = "block";
    domSt.classList.add("status");
    domSt.appendChild(span);
    span.addEventListener("click", () => {
      this.gameOverDom.style.display = "none";
      domSt.classList.remove("status");
      game.newGame();
      span.remove();
    });
  }
  updateLives() {
    this.lives--;
    this.livesDom.textContent = this.lives;
  }
  updateMoves() {
    this.moves++;
    this.movesDom.textContent = this.moves;
  }
  updateOpened() {
    this.opened++;
  }
  compareCards() {
    if (
      this.clickedCardsArray[0].dataset.name ===
      this.clickedCardsArray[1].dataset.name
    ) {
      return true;
    } else return false;
  }

  reveal() {
    const cards = [...document.querySelectorAll(".card")];
    cards.forEach((card, index) => {
      card.classList.remove("flipped");
      const cardName = this.cardsArray[index];
      card.classList.add(cardName);
    });
  }
}

const game = new Game();
game.newGame();
