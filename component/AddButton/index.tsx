import * as React from 'react';

type Props = {
    onAddInput(input: string):void;

}

class AddButton extends React.Component<Props>{
    state = {
        showInput: false,
        input: null
    }
    render(){
        const { onAddInput } = this.props;
        const { isAdding, input } = this.state;
        return(
            {
                //@ts-ignore
                showInput ? 
                    <input />
                :
                <div>
                +  Add More Currencies
                </div>
           
            }
        )
    }
}

export default AddButton;