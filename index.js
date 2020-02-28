import Cards from './src/js/Cards'
import Game from './src/js/Game'

function createCards() {
  cards.cardsArray.forEach(cardName => {
    const card = document.createElement('div');

    card.classList.add('card');
    card.classList.add('flipped');
    card.dataset.name = cardName;

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');

    handleCardClick(card);
    gameDom.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });
}

function closeCards(cards, ms) {
  setTimeout(() => {
    cards.forEach(card => {
      card.classList.remove(card.dataset.name);
      card.classList.add('flipped');
    });
  }, ms);
}

function showGameOver(status) {
  const domSt = document.querySelector(`.${status}`)
  const span = document.createElement('span');

  span.classList.add('play-again');
  span.innerHTML = 'Play again';
  gameOverDom.style.display = 'block';
  domSt.classList.add('status');
  domSt.appendChild(span);
  span.addEventListener('click', () => {
    gameOverDom.style.display = 'none';
    domSt.classList.remove('status');
    startNewGame(LIVES);
    span.remove();
  });
}

function updateStats() {
  movesDom.textContent = game.moves;
  livesDom.textContent = game.lives;
}

function handleCardClick(card) {
  card.addEventListener('click', () => {
    if ([...card.classList].indexOf('flipped') === -1 || clickedCards.length > 1) {
      return;
    }
    let cardName = card.dataset.name;
    card.classList.remove('flipped');
    card.classList.add(cardName);

    clickedCards.push(card);

    if (clickedCards.length === 2) {
      compareCards();
    }
  });
}

function compareCards() {
  game.updateMoves();
  let compare = game.compareCards(...clickedCards);
  if (compare) {
    game.updateOpened();
    clickedCards = [];
    if (game.opened === game.openToWin) {
      showGameOver('won');
    }
  } else {
    game.updateLives();

    if (game.lives === 0) {
      showGameOver('lost');
    }
    closeCards(clickedCards, 1000);
    clickedCards = [];
    updateStats();
  }
}

function removeCards() {
  while (gameDom.hasChildNodes()) {
    gameDom.removeChild(gameDom.lastChild);
  }
}

function startNewGame(lives) {
  removeCards();
  game.newGame(lives);
  cards.randomCards();
  createCards();
  movesDom.textContent = 0;
  livesDom.textContent = 0;
}


const LIVES = 20;

const gameDom = document.querySelector('.game');
const gameOverDom = document.querySelector('.game-over');
const movesDom = document.querySelector('.moves');
const livesDom = document.querySelector('.lives');

const game = new Game(LIVES);
const cards = new Cards();

window.onload = () => updateStats()

let clickedCards = [];
startNewGame(LIVES);
