import * as React from 'react';
import { Currency } from 'model/Currency';

type Props = { 
    currency: Currency 
    totalNumber: number,
    onRemoveCurrency: (currency) => void,
}   

class Cell extends React.PureComponent<Props> {
    render(){
        const { currency, totalNumber, onRemoveCurrency } = this.props;
        const totalValue = totalNumber * currency.valueOf1Usd;
        return(
            <div>
                <div>
                    <div>
                        {currency.shortname}
                        {totalValue}
                    </div>
                    {currency.shortname} - {currency.longname}
                    1 USD = {currency.shortname} {currency.valueOf1Usd}
                </div>
                <div onClick={onRemoveCurrency.bind(this, currency)}>x</div>
            </div>
        )
    }
}

export default Cell;