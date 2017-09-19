class Game {
  constructor() {
    this.cardsGrid = ['moon', 'new-moon', 'goat', 'rat', 'summer', 'winter', 'rabbit', 'star', 'moon', 'new-moon', 'goat', 'rat', 'summer', 'winter', 'rabbit', 'star'];

  }

  newGame() {
    this.cardsGrid.sort((a, b) => {
      return 0.5 - Math.random();
    });
  }

  render() {

  }
}




const game = new Game();
game.newGame();
console.log(game);

const cards = Array.from(document.querySelectorAll('.card'));
cards.forEach((card,index) => {
  card.addEventListener('click', () => {
    card.classList.remove('quest');
    card.classList.add(game.cardsGrid[index]);
  })
});

