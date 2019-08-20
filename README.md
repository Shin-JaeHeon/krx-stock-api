# krx-stock-api
[![npm](https://img.shields.io/npm/v/krx-stock-api.svg?style=flat-square)](https://www.npmjs.com/package/krx-stock-api)
[![npm](https://img.shields.io/npm/dt/krx-stock-api.svg?style=flat-square)](https://www.npmjs.com/package/krx-stock-api)
[![npm](https://img.shields.io/npm/l/krx-stock-api.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)

`krx-stock-api`는 간편하게 한국거래소(KRX)의 API를 사용할 수 있는 라이브러리입니다.

### 주의사항
> 라이브러리의 사용으로 발생한 문제(투자 실패 등)에 대해서는 사용자 본인에게 책임이 있습니다.
>
## 사양
`TypeScript`로 개발된 라이브러리로, 정확한 타입 정보를 얻을 수 있습니다.

### Stock Class
Stock 데이터를 종합한 클래스입니다.
* queryTime (`string`) : 조회시간
* name (`string`) : 종목명
* price (`number`) : 현재가격
* change (`number`) : 전일 대비
* previousPrice (`number`) : 전일 종가
* volume (`number`) : 거래량
* tradingVolume (`number`) : 거래대금
* start (`number`) : 시가
* high (`number`) : 고가
* low (`number`) : 저가
* high52 (`number`) : 52주 고가
* low52 (`number`) : 52주 저가
* up (`number`) : 상한가
* down (`number`) : 하한가
* per (`number`) :  PER
* amount (`number`) : 상장 주식 수
* faceValue (`number`) : 액면가
* daily (`Array<dailyInformation>`) : 일자별 시세 
* institutionalInvestorAsk (`Array<InstitutionalInvestorOffer>`) : 기관 매도 상위 
* institutionalInvestorBid (`Array<InstitutionalInvestorOffer>`) : 기관 매수 상위
* ask (`Array<Offer>`) : 매도 호가
* bid (`Array<Offer>`) : 매수 호가
* transactions (`Array<Transaction>`) : 시간대별 체결가 
* kospi (`Market`) : KOSPI 지수
* kosdaq (`Market`) : KOSDAQ 지수
* marketOpen (`boolean`) : 개장 여부
* krx100 (`Market`) : KRX100 지수
* kospi200 (`Market`) : KOSPI200 지수

### DailyInformation Class
* date (`string`) : 일자
* price (`number`) : 종가
* change (`number`) : 전일 대비
* volume (`number`) : 거래량
* amount (`number`) : 거래대금
* start (`number`) : 시가
* high (`number`) : 고가
* low (`number`) : 저가

### InstitutionalInvestorOffer Class
* name (`string`) : 기관명
* volume (`number`) : 거래량

### Market Class
* name (`string`) : 지수명
* price (`number`) : 지수
* change (`number`) : 전일 대비

### Offer Class
* price (`number`) : 호가
* amount (`number`) : 잔량

### Transaction Class
* time (`string`) : 시간
* transactionPrice (`number`) : 체결과
* change (`number`) : 전일 대비
* sellPrice (`number`) : 매도 호가
* buyPrice (`number`) : 매수 호가
* amount (`number`) : 체결량

## 예제
```typescript
import krx from 'krx-stock-api';

(async () => console.log(await krx.getStock('종목코드')))();
```


