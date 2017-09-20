class Game {
  constructor() {
    this.cardsGrid = ['moon', 'moon', 'goat', 'rat', 'summer', 'winter', 'rabbit', 'sigma', 'new-moon', 'new-moon', 'goat', 'rat', 'summer', 'winter', 'rabbit', 'sigma'];
    this.lives = 12;
    this.moves = 0;
  }
  newGame() {
    this.moves = 0;
    this.lives = 12;
    this.cardsGrid.sort((a, b) => {
      return 0.5 - Math.random();
    });
  }

  updateLives() {
    this.lives--;   
    if (this.lives === 0) {
      this.gameOver();
    }
  }
  updateMoves() {
    this.moves++;
  }

  gameOver() {
    console.log('game over');
  }
  render() {
  }
}

const lives = document.querySelector('.lives');
const moves = document.querySelector('.moves');
const game = new Game();




let clickedCards = [];
const cards = Array.from(document.querySelectorAll('.card'));
cards.forEach((card, index) => {
  card.addEventListener('click', (event) => {
    let cardName = game.cardsGrid[index];

    //prevent click after reveal
    if ([...card.classList].indexOf(cardName) !== -1) {
      event.preventDefault();
      return;
    };
    card.classList.remove('flipped');
    card.classList.add(cardName);
    card.dataset.name = cardName;
    clickedCards.push(card);   

    
    if (clickedCards.length > 1) {
      game.updateMoves();
      moves.innerHTML = game.moves;
      if (clickedCards[0].dataset.name !== clickedCards[1].dataset.name) {
        game.updateLives();
        lives.innerHTML = game.lives;
        closeCard(clickedCards);
      }
    }
    if (clickedCards.length === 2) clickedCards = [];
   

  })
});

function closeCard(cards) {
  console.log(cards);
  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.remove(card.dataset.name);
      card.classList.add('flipped');
    });
  }, 500);
}