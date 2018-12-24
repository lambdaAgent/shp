import * as React from 'react';
import { Currency } from '../../model/Currency';
import CurrencyAPI from '../../api/CurrencyAPI';
import { defaultCurrencies } from '../../model/Currencies';
import Cell from '../Cell';
import styles from './appStyle'
import AddButton from '../AddButton';

interface IState {

  currencies: Array<Currency>;
  currencyToAdd: string;
  isLoading:boolean;
  totalNumber:number;
}

class App extends React.Component<any, IState> {
  private currencies: Array<Currency>;
  
  state = {
    totalNumber: 1.00,
    isLoading: false,
    currencyToAdd: '',
    currencies: [] as Currency[]
  }

  async componentDidMount(){
    this.setState({ isLoading: true })
    try {
      this.currencies = await CurrencyAPI.getAllCurrencyInList(defaultCurrencies);
      this.setState({ isLoading: false, currencies: this.currencies });
    } catch(e){
      console.error(e);
      this.setState({ isLoading: false, currencies: []});
    }
  }

  onRemoveCurrency = (curr:Currency) => {
    const cloneCurrencies = this.state.currencies.filter((currency:Currency) => {
      return currency.shortname !== curr.shortname;
    });
    this.setState({ currencies: cloneCurrencies });
  }

  onInputChange = e => {
    const value = e.target.value;
    this.setState({ totalNumber: value });
  }

  onCurrencyToAddChange = ([[shortname, longname]]) => {
    CurrencyAPI.getAllCurrencyInList([[shortname, longname]])
    .then(currencies => {
      const cloneCurrencies = this.state.currencies.slice();
      this.setState({ currencies: currencies.concat(cloneCurrencies) });
    })
  }

  public render() {
    const { isLoading, totalNumber, currencies } = this.state;
    let showLoading: React.ReactElement<any> | null = null;
    
    if(isLoading){
      showLoading = <div>Loading ...</div>
    } else if(!isLoading && currencies.length === 0){
      showLoading = <div> Oops No Currency Loaded, try again later</div>
    }
    
    return (
      <div style={styles.root}>
        {showLoading}
        {
          !isLoading &&
          <div>
              <section>
                Total 
                <input value={totalNumber} onChange={this.onInputChange}/>
              </section>
              <AddButton onAddInput={this.onCurrencyToAddChange}/>
              {
                currencies.map(currency => {
                  return (
                    <div>
                      <Cell key={currency.shortname} 
                        currency={currency} 
                        totalNumber={totalNumber} 
                        onRemoveCurrency={this.onRemoveCurrency}
                      />
                  </div>
                )})
              }
          </div>
        }
      </div>
    );
  }
}

export default App;
