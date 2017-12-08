import React from 'react';
import { addTodo } from '../actions';

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
    
    this.props.onClick(text, importance);

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
	        Add 
	        </button>
          <select size = "1" id = "importance" onChange={this.handleChangeImportance}>
	          {this.props.data.map((item, i)=>(
              <option key={item.value} value={item.value}>{item.message}</option>
	          ))}
          </select>
        </div>
      </div>
	  )
  }	
}

export default ButtonsComponent