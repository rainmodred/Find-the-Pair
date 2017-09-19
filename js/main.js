class Game {
  constructor() {
    this.cardsGrid = ['moon', 'moon', 'goat', 'rat', 'summer', 'winter', 'rabbit', 'sigma', 'new-moon', 'new-moon', 'goat', 'rat', 'summer', 'winter', 'rabbit', 'sigma'];
    this.lives = 12;
    this.timeLeft = 30;
  }
  newGame() {
    this.cardsGrid.sort((a, b) => {
      return 0.5 - Math.random();
    });
  }

  move() {
    this.lives--;
  }
  render() {

  }


}




const game = new Game();

console.log(game);


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

    card.classList.remove('quest');
    card.classList.add(cardName);
    card.dataset.name = cardName;
    //need stack?

    clickedCards.push(card);

    // console.dir(clickedCards);

    if (clickedCards.length > 1) {
      if (clickedCards[0].dataset.name !== clickedCards[1].dataset.name) {
        game.move();
        closeCard(clickedCards);
      }
    }
    if (clickedCards.length === 2) clickedCards = [];

    //game.move(clickedCard );
  })
});

function closeCard(cards) {
  console.log(cards);


  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.remove(card.dataset.name);
      card.classList.add('quest');
    });
  }, 500);
}