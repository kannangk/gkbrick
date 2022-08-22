const { Controller } = require('cores/Controller')

class SupportedCurrencyRoute extends Controller{
  constructor() {
    super()
  }
  route() {
    return this.get('/mhs/getSupportedCurrency',(req,res)=>{
        var data='["btc","eth","ltc","bch","bnb","eos","xrp","xlm","link","dot","yfi","usd","aed","ars","aud","bdt","bhd","bmd","brl","cad","chf","clp","cny","czk","dkk","eur","gbp","hkd","huf","idr","ils","inr","jpy","krw","kwd","lkr","mmk","mxn","myr","ngn","nok","nzd","php","pkr","pln","rub","sar","sek","sgd","thb","try","twd","uah","vef","vnd","zar","xdr","xag","xau","bits","sats","giant"]'
        res.send(data)
    });
    
  }
}

module.exports = { SupportedCurrencyRoute }
