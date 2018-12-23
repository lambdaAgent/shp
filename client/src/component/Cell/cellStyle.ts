import { CSSProperties } from 'react';
const grey = `rgba(0,0,0,0.2)`;

const style: {[any:string]:CSSProperties} = {
    root: {
        display: 'flex',
        fontSize: 12
    },
    currencyDetail:{
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
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    }
}

export default style;