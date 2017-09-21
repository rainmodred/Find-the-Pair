class Game {
  constructor() {
    this.cardsGrid = ['moon', 'moon', 'goat', 'rat', 'summer', 'winter', 'rabbit', 'sigma', 'new-moon', 'new-moon', 'goat', 'rat', 'summer', 'winter', 'rabbit', 'sigma'];
    this.lives = 12;
    this.moves = 0;
    this.opened = 0;
  }
  newGame() {    
    this.opened = 0;
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
  updateOpened() {
    this.opened++;
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
  render() {}
}

const lives = document.querySelector('.lives');
const moves = document.querySelector('.moves');
const gameOverP = document.querySelector('.game-over');
gameOverP.style.display = 'none';
const cards = Array.from(document.querySelectorAll('.card'));
const game = new Game();
game.newGame();

function closeCard(cards) {
  console.log(cards);
  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.remove(card.dataset.name);
      card.classList.add('flipped');
    });
  }, 500);
}

function reveal() {
  const cards = Array.from(document.querySelectorAll('.card'));
  cards.forEach((card,index)=> {
    card.classList.remove('flipped');
    let cardName = game.cardsGrid[index];
    card.classList.add(cardName);
  })
}

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

function editNodeClass(node, addClassName, removeClassName) {
  node.classList.remove(removeClassName);
  node.classList.add(addClassName);
  node.dataset.name = addClassName;
  return node;
}

let clickedCards = [];
cards.forEach((card, index) => {
  card.addEventListener('click', (event) => {
    let cardName = game.cardsGrid[index];  
    //prevent click after reveal
    if ([...card.classList].indexOf(cardName) !== -1) {
      event.preventDefault();
      return;
    };

    let node = editNodeClass(card, cardName, 'flipped');
    clickedCards.push(node);    
    if (clickedCards.length > 1) {
      game.updateMoves();
      moves.innerHTML = game.moves;
      if (clickedCards[0].dataset.name !== clickedCards[1].dataset.name) {
        game.updateLives();
        lives.innerHTML = game.lives;
        closeCard(clickedCards);
        if ('lost' === game.checkStatus()) {
          closeCard(cards);
          showPopup('lost');
        }
      } else {
        if (clickedCards[0].dataset.name === clickedCards[1].dataset.name) {
          game.updateOpened();
          let status = game.checkStatus();
          if (status === 'won') {
            closeCard(cards);
            showPopup('won');
          }          
        }
      }
    }
    if (clickedCards.length === 2) clickedCards = [];
  })
});

