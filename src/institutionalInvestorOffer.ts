import lib from './lib';

export default class InstitutionalInvestorOffer {
  name: string;
  volume: number;

  constructor(name, volume) {
    this.name = name;
    this.volume = lib.getNumber(volume);
  }
}
