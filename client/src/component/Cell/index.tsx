import * as React from 'react';
import { Currency } from '../../model/Currency';
import styles from './cellStyle';

type Props = { 
    currency: Currency 
    totalNumber: number,
    onRemoveCurrency: (currency) => void,
}   



class Cell extends React.PureComponent<Props> {
    render(){
        const { currency, totalNumber, onRemoveCurrency } = this.props;
        const totalValue = currency.valueOf1Usd ? (totalNumber * currency.valueOf1Usd) : <div style={styles.error}>Failed To Load</div>;

        return(
            <div style={styles.root}>
                <section style={styles.currencyDetail}>
                    <div style={styles.firstRow}>
                        <div>{currency.shortname}</div>
                        <div>{totalValue}</div>
                    </div>
                    <div>{currency.shortname} - {currency.longname}</div>
                    <div>1 USD = {currency.shortname} {currency.valueOf1Usd}</div>
                </section>
                <section
                    style={styles.deleteButton}
                    onClick={onRemoveCurrency.bind(this, currency)}>
                    x
                </section>
            </div>
        )
    }
}

export default Cell;