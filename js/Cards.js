export default class Cards {
  constructor() {
    this.cardsArray = [
      'moon',
      'moon',
      'goat',
      'rat',
      'summer',
      'winter',
      'rabbit',
      'sigma',
      'new-moon',
      'new-moon',
      'goat',
      'rat',
      'summer',
      'winter',
      'rabbit',
      'sigma',
    ];
  }

  compareCards(card1, card2) {
    if (card1 === card2) return true;
    return false;
  }

  randomCards() {
    this.cardsArray.sort((a, b) => {
      return 0.5 - Math.random();
    });
  }

  getName(index) {
    return this.cardsArray[index];
  }
}
