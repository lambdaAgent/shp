import * as React from 'react';

interface IProps {
    onAddInput(input: string):void;
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
        this.props.onAddInput && this.props.onAddInput(this.state.input);
    }
    showInput = e => {
        this.setState({ showInput: true });
    }
    render(){
        const { input, showInput } = this.state;
        // ternary in typescript mu
        return(
            <div>
                {
                    showInput ? 
                    <form onSubmit={this.onSubmit}>
                        <input 
                            value={input} 
                            onChange={this.onInputChange}
                        />
                        <button type='submit'></button> 
                    </form>
                    :
                    <div onClick={this.showInput}>
                    +  Add More Currencies
                    </div>
                }
            </div>
        )
    }
}

export default AddButton;