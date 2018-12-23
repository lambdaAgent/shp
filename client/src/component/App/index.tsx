import * as React from 'react';
import { Currency } from '../../model/Currency';
import CurrencyAPI from '../../api/CurrencyAPI';
import { defaultCurrencies } from '../../model/Currencies';
import Cell from '../Cell';
import styles from './appStyle'

interface IState {
  totalNumber:number;
  isLoading:boolean;
  currencies: Array<Currency>;
}

class App extends React.Component<any, IState> {
  private currencies: Array<Currency>;
  
  state = {
    totalNumber: 1.00,
    isLoading: false,
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

  onRemoveCurrency = (shortname:string) => {
    const cloneCurrencies = this.state.currencies.filter((currency:Currency) => {
      return currency.shortname !== shortname;
    });
    this.setState({ currencies: cloneCurrencies });
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
          currencies.map(currency => {
            return (
            <Cell key={currency.shortname} 
              currency={currency} 
              totalNumber={totalNumber} 
              onRemoveCurrency={this.onRemoveCurrency}
            />
          )})
        }
      </div>
    );
  }
}

export default App;
