import lib from './lib';

export default class DailyInformation {
  date: string;
  price: number;
  change: number;
  start: number;
  high: number;
  low: number;
  volume: number;
  amount: number;

  constructor({
                day_Date, day_EndPrice, day_Dungrak, day_getDebi, day_Start, day_High, day_Low, day_Volume, day_getAmount,
              }) {
    this.date = day_Date;
    this.price = lib.getNumber(day_EndPrice);
    this.change = lib.getChange(day_Dungrak, day_getDebi);
    this.start = lib.getNumber(day_Start);
    this.high = lib.getNumber(day_High);
    this.low = lib.getNumber(day_Low);
    this.volume = lib.getNumber(day_Volume);
    this.amount = lib.getNumber(day_getAmount);
  }
}
