import { CSSProperties } from 'react';
const grey = `rgba(0,0,0,0.2)`;

const style: {[any:string]:CSSProperties} = {
    root: {
        display: 'flex',
        fontSize: 12,
        margin: '8px 0',
        border: `1px solid ${grey}`,
        borderRadius: 3,
    },
    currencyDetail:{
        width: 350,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-around",
        borderRight: `1px solid ${grey}`,
        height: 60,
        padding: 8
    },
    firstRow: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 16
    },
    deleteButton:{
        fontSize: 20,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    error: {
        color: 'red'
    }
}

export default style;