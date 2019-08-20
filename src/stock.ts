import Transaction from './transaction';
import Offer from './offer';
import InstitutionalInvestorOffer from './institutionalInvestorOffer';
import dailyInformation from './dailyInformation';
import stockRowData from './interface/stockRowData';
import Market from './market';
import lib from './lib';
import DailyInformation from './dailyInformation';

export default class Stock {
  queryTime: string;
  name: string;
  price: number;
  change: number;
  previousPrice: number;
  volume: number;
  tradingVolume: number;
  start: number;
  high: number;
  low: number;
  high52: number;
  low52: number;
  up: number;
  down: number;
  per: number;
  amount: number;
  faceValue: number;
  daily: Array<dailyInformation>;
  institutionalInvestorAsk: Array<InstitutionalInvestorOffer>;
  institutionalInvestorBid: Array<InstitutionalInvestorOffer>;
  ask: Array<Offer>;
  bid: Array<Offer>;
  transactions: Array<Transaction>;
  kospi: Market;
  kosdaq: Market;
  marketOpen: boolean;
  krx100: Market;
  kospi200: Market;

  constructor(data: stockRowData | any) {
    this.queryTime = data._attributes.querytime;
    this.name = data.TBL_StockInfo.JongName;
    this.change = lib.getChange(data.TBL_StockInfo.DungRak, data.TBL_StockInfo.Debi);

    [['price', 'CurJuka'],
      ['previousPrice', 'PrevJuka'],
      ['volume', 'Volume'],
      ['tradingVolume', 'Money'],
      ['start', 'StartJuka'],
      ['high', 'HighJuka'],
      ['low', 'LowJuka'],
      ['high52', 'High52'],
      ['low52', 'Low52'],
      ['up', 'UpJuka'],
      ['down', 'DownJuka'],
      ['per', 'Per'],
      ['amount', 'Amount'],
      ['faceValue', 'FaceJuka'],
    ].forEach(value => this[value[0]] = lib.getNumber(data.TBL_StockInfo[value[1]]));

    this.bid = [0, 1, 2, 3, 4].map(value => new Offer(data.TBL_Hoga['mesuHoka' + value], data.TBL_Hoga['mesuJan' + value]));
    this.ask = [0, 1, 2, 3, 4].map(value => new Offer(data.TBL_Hoga['medoHoka' + value], data.TBL_Hoga['medoJan' + value]));
    this.daily = data.TBL_DailyStock.map(value => new DailyInformation(value));

    const ask = [];
    const bid = [];
    data.TBL_AskPrice.forEach(value => {
      ask.push(new InstitutionalInvestorOffer(value.member_memdoMem, value.member_memdoVol));
      bid.push(new InstitutionalInvestorOffer(value.member_memsoMem, value.member_mesuoVol))
    });

    this.institutionalInvestorAsk = ask;
    this.institutionalInvestorBid = bid;
    this.transactions = data.TBL_TimeConclude.map(value => new Transaction(value));

    this.kosdaq = new Market('KOSDAQ', lib.getNumber(data.stockInfo.kosdaqJisu), lib.getChange(data.stockInfo.kosdaqJisuBuho, data.stockInfo.kosdaqJisuDebi));
    this.kospi = new Market('KOSPI', lib.getNumber(data.stockInfo.kospiJisu), lib.getChange(data.stockInfo.kospiBuho, data.stockInfo.kospiDebi));
    this.krx100 = new Market('KRX100', lib.getNumber(data.stockInfo.krx100Jisu), lib.getChange(data.stockInfo.krx100buho, data.stockInfo.krx100Debi));
    this.kospi200 = new Market('KOSPI200', lib.getNumber(data.stockInfo.kospi200Jisu), lib.getChange(data.stockInfo.kospi200Buho, data.stockInfo.kospi200Debi));
    this.marketOpen = data.stockInfo.myJangGubun === '장중';
  };
}
