import lib from './lib';
import Stock from './stock';

export default {
  getStockList() {

  },
  async getStock(code: string) {
    return new Stock(await lib.getData(code));
  },
  /**
   *
   */
  getIndex() {

  },

}
