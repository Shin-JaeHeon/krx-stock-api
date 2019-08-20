import lib from './lib';

export default class Transaction {
  time: string;
  transactionPrice: number;
  change: number;
  sellPrice: number;
  buyPrice: number;
  amount: number;

  constructor({time = '', negoprice, Dungrak, Debi, sellprice, buyprice, amount}) {
    this.time = time;
    this.transactionPrice = lib.getNumber(negoprice);
    this.change = lib.getChange(Dungrak, Debi);
    this.sellPrice = lib.getNumber(sellprice);
    this.buyPrice = lib.getNumber(buyprice);
    this.amount = lib.getNumber(amount);
  }
}
