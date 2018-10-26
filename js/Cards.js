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

  randomCards() {
    this.cardsArray.sort((a, b) => {
      return 0.5 - Math.random();
    });
  }

  getName(index) {
    return this.cardsArray[index];
  }
}
