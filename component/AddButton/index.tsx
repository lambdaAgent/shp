import * as React from 'react';

type Props = {
    onAddInput(input: string):void;

}

class AddButton extends React.Component<Props>{
    state = {
        showInput: false, 
        input: ''
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
        const { onAddInput } = this.props;
        const { input, showInput } = this.state;
        // ternary in typescript mu
        return(
            <div>
                {
                    showInput ? 
                    <form onSubmit={this.onSubmit}>
                        <input 
                            value={input} 
                            onChange={() => {}}
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