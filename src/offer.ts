import lib from './lib';

export default class Offer {
  price: number;
  amount: number;

  constructor(price, amount) {
    this.price = lib.getNumber(price);
    this.amount = lib.getNumber(amount);
  }
}
