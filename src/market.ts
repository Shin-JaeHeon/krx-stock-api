export default class Market {
  name: string;
  price: number;
  change: number;

  constructor(name: string, price: number, change: number) {
    this.name = name;
    this.price = price;
    this.change = change;
  }
}
