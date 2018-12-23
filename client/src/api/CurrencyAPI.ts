import * as fetch from 'isomorphic-fetch';
import { Currency } from './../model/Currency';

class CurrencyAPI {
    public static getAllCurrencyInList(arr: Array<[string, string]>):Promise<Currency[]> {
        const currencies : Currency[] = arr.map(([shortname, longname]) => {
            const currency: Currency = { shortname, longname };
            return currency;
        })
        return Promise.all(currencies.map(this.getCurrencyInDollar))
    }

    // free.currencyconverterapi, can only convert max 2 query in free version
    private static getCurrencyInDollar(currency:Currency):Promise<Currency>{
        const currencyAPIurl = 'https://free.currencyconverterapi.com/api/v6/convert?compact=y&q=';
        const toConvert = `USD_${currency.shortname}`;
        const url = currencyAPIurl + toConvert;
        return new Promise((resolve, reject) => {
            fetch(url).then(res => {
                if(!res.ok) { throw res; }
                return res.json()
            })
            .then(res => {
                console.log(res)
                const valueOf1Usd = res[toConvert].val;
                currency.valueOf1Usd = valueOf1Usd;
                resolve(currency)
            })
            .catch(reject)
        })
    }
}

export default CurrencyAPI;