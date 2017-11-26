import React from 'react';
import ImportanceComponent from './ImportanceComponent.jsx'

class ButtonsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ' ',
            importance: ' '
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeImportance = this.handleChangeImportance.bind(this);
    }

    handleChangeInput(e){
    	this.setState({
    		text: e.target.value
    	});
    }
    handleChangeImportance(value){
    	this.setState({
    		importance: value
    	});
    }
    handleSubmit(text, importance){
    	if(!this.state.text.length){
    		return;
    	}
    	this.props.submit(text, importance);
    	this.setState({
    		importance: '',
    		text: ''
    	});
    }
	render(){
		return(
            <div>
                <input onChange={this.handleChangeInput} value={this.state.text}/>
                <div id='btns'>
                    <button onClick={()=>{this.handleSubmit(this.state.text, this.state.importance)}} id="add">
	            	Add #{this.props.items.length + 1}
	          		</button>
	          		<button onClick={this.props.delete} id="del">
	          		Deleted
	          		</button>
            		<ImportanceComponent onChangeData={this.handleChangeImportance}/>
          		</div>
        	</div>
		)
	}	
}

export default ButtonsComponent