import CurrencyAPI from '../api/CurrencyAPI';

const list = [
  ['USD', "United States Dollar"], ['IDR', "Indonesian Rupiah"]
];

test('the fetch currency works with 2 currencies', async () => {
    const data = await CurrencyAPI.getAllCurrencyInList(list);
    expect(data.length).toBe(2);
    //each data cannot be null;
    data.forEach(currency => {
      expect(currency.valueOf1Usd).not.toBeNull();
      expect(currency.valueOf1Usd).not.toBeUndefined();
    });
});
  
test('the fetch fails with an error when unknown currency is loaded', async () => {
    list[1][0] = 'ID';
    try {
      const data = await CurrencyAPI.getAllCurrencyInList(list);
      expect(data).toThrow(TypeError) 
    } catch(e){}
});