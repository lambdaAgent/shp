import { Currency } from './../model/Currency';
import fetch from 'isomorphic-fetch';

class CurrencyAPI {
    // free.currencyconverterapi, can only convert max 2 query in free version
    static currencyAPIurl = 'https://free.currencyconverterapi.com/api/v6/convert?q=';
    private static getCurrencyInDollar(currency:Currency):Promise<Currency>{
        const _toConvert = `USD_${currency.shortname}`
        const url = `https://free.currencyconverterapi.com/api/v6/convert?q=${_toConvert}`
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => {
                if(!res.ok) throw res;
                return res.json()
            })
            .then(res => {
                const valueOf1Usd = res[_toConvert].val;
                currency.valueOf1Usd = valueOf1Usd;
                resolve(currency)
            })
            .catch(reject)
        })
    }

    public static getAllCurrencyInList(arr: Array<Currency>):Promise<Array<Currency>> {
        return Promise.all(arr.map(this.getCurrencyInDollar))
    }
}

export default CurrencyAPI;