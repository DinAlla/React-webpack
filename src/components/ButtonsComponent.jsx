import React from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class ButtonsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      importance: ' '
    };
    const {dispatch} = props;
    this.boundActionCreators = bindActionCreators(actions, dispatch);    
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeImportance = this.handleChangeImportance.bind(this);
  }

  handleChangeInput(e){
    this.setState({
      text: e.target.value
   	});
  }

  handleChangeImportance(e){
    this.setState({
   	  importance: e.target.value
    });
  }

  handleSubmit(text, importance){
    if(!this.state.text.length){
      return;
    }
    let { dispatch } = this.props;
    let action = actions.addTodo(text, importance);
    dispatch(action);
    this.setState({
      importance: '',
      text: ''
    });
  }
  
  render(){
    const { data} = this.props;
    return(
      <div>
        <input onChange={this.handleChangeInput} value={this.state.text}/>
        <div id='btns'>
          <button onClick={()=>{this.handleSubmit(this.state.text, this.state.importance)}} id="add">
	        Add 
	        </button>
          <select size = "1" id = "importance" onChange={this.handleChangeImportance}>
	          {data.map((item, i)=>(
              <option key={item.value} value={item.value}>{item.message}</option>
	          ))}
          </select>
        </div>
      </div>
	  )
  }	
}

export default ButtonsComponent