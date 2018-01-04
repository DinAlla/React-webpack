import React from 'react';

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

  handleChangeImportance(e){
    this.setState({
   	  importance: e.target.value
    });
  }
  
  handleSubmit(text, importance, name){
    if(!this.state.text.length){
      return;
    }
    this.props.Click(text, importance, name);
    this.setState({
      importance: '',
      text: ''
    });
  }
  
  render(){
    const {data, Click, name} = this.props;
    return(
      <div>
        <input onChange={this.handleChangeInput} value={this.state.text}/>
        <div id='btns'>
          <button onClick={()=>{this.handleSubmit(this.state.text, this.state.importance, name)}} id="add">
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