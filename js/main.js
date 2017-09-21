class Game {
  constructor() {
    this.cardsGrid = ['moon', 'moon', 'goat', 'rat', 'summer', 'winter', 'rabbit', 'sigma', 'new-moon', 'new-moon', 'goat', 'rat', 'summer', 'winter', 'rabbit', 'sigma'];
    this.lives = 12;
    this.moves = 0;
    this.opened = 0;
  }
  newGame() {

    //duplicate mouse bug
    //you won mesage bug
    this.moves = 0;
    this.lives = 12;
    this.cardsGrid.sort((a, b) => {
      return 0.5 - Math.random();
    });
    updateDom();
  }

  updateLives() {
    this.lives--;


  }
  updateMoves() {
    this.moves++;

  }

  checkStatus() {
    if (this.lives === 0) {
      return 'lost';
    };

    if (this.opened === 8) {
      return 'won';
    };

    return null;
  }
  reveal() {
    
  }


  render() {}
}

const lives = document.querySelector('.lives');
const moves = document.querySelector('.moves');
const game = new Game();
game.newGame();
const gameOverP = document.querySelector('.game-over');
gameOverP.style.display = 'none';



function updateDom() {
  lives.innerHTML = game.lives;
  moves.innerHTML = game.moves;
}

function showPopup(status) {  
  const domSt = document.getElementsByClassName(status)[0];
  const spn = document.createElement('span');
  spn.classList.add('play-again');
  spn.innerHTML = 'Play again';

  gameOverP.style.display = 'block';
  domSt.classList.add('status');
  domSt.appendChild(spn);


  spn.addEventListener('click', () => {
    gameOverP.style.display = 'none';    
    domSt.classList.remove('status');
    game.newGame();
    spn.remove();
  });
}




let clickedCards = [];
const cards = Array.from(document.querySelectorAll('.card'));
cards.forEach((card, index) => {
  card.addEventListener('click', (event) => {
    let cardName = game.cardsGrid[index];
    console.log(game.cardsGrid)
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
        if ('lost' === game.checkStatus()) {
          showPopup('lost');
        }
      } else {
        if (clickedCards[0].dataset.name === clickedCards[1].dataset.name) {
          game.updateMoves();
          let status = game.checkStatus();
          if (status === 'won') {
            showPopup('won');
          }          
        }
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