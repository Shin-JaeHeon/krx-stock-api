import Stock from './stock'
import * as xmlJs from 'xml-js';

const request = require('request-promise');

export default {

  /**
   * @param {string} code
   * @return {Promise<Object>}
   */
  async getData(code: string) {
    const body = await request.get({
      url: 'http://asp1.krx.co.kr/servlet/krx.asp.XMLSise?code=' + code,
      method: 'GET',
      encoding: null,
      timeout: 10000,
    });
    // @ts-ignore
    let data = xmlJs.xml2js(body.toString(), {compact: true}).stockprice;
    data.TBL_DailyStock = data.TBL_DailyStock.DailyStock.map(value => value._attributes);
    data.TBL_StockInfo = data.TBL_StockInfo._attributes;
    data.TBL_Hoga = data.TBL_Hoga._attributes;
    data.TBL_TimeConclude = data.TBL_TimeConclude.TBL_TimeConclude.map(value => value._attributes);
    data.stockInfo = data.stockInfo._attributes;
    data.TBL_AskPrice = data.TBL_AskPrice.AskPrice.map(value => value._attributes);
    return data;
  },
  getNumber(num: string) {
    if (num === '') return 0;
    return parseFloat(num.replace(/,/g, ''));
  },
  getChange(dungrak: string, debi: string) {
    return (this.getNumber(dungrak) < 4 ? 1 : -1) * this.getNumber(debi);
  },

}
