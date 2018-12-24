import * as React from 'react';
import styles from './addButtonStyle';

interface IProps {
    onAddInput(input: [[string, string]]):void;
}
interface IState {
    showInput: boolean;
    input: string;
}

class AddButton extends React.Component<IProps, IState>{
    public state = {
        input: '',
        showInput: false, 
    }
    onInputChange: (e:any)=>void = (e: any) => {
        const value = e.target.value;
        this.setState({ input: value })
    }
    onSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        const [ shortname, longname ] = this.state.input.split(',');
        this.props.onAddInput && this.props.onAddInput([[shortname, longname]]);
        this.setState({ showInput: false })
    }
    showInput = e => {
        this.setState({ showInput: true });
    }
    render(){
        const { input, showInput } = this.state;
        // ternary in typescript mu
        return(
            <div style={styles.root}>
                {
                    showInput ? 
                    <form style={styles.form} onSubmit={this.onSubmit}>
                        <div>
                            <input 
                                placeholder="Input currency here"
                                style={styles.input}
                                value={input} 
                                onChange={this.onInputChange}
                            />
                            <button style={styles.submitButton} type='submit'>Submit</button> 
                        </div>
                        <p>Type currency shortname and longname, separated by comma</p>
                        <p>currency longname is optional</p>
                    </form>
                    :
                    <div style={styles.button} onClick={this.showInput}>
                    +  Add More Currencies
                    </div>
                }
            </div>
        )
    }
}

export default AddButton;