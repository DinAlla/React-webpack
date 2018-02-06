import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

class ButtonsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      importance: '0'
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeImportance = this.handleChangeImportance.bind(this);
    this.someSubmit = this.someSubmit.bind(this);
  }

  handleChangeInput(e){
    this.setState({
      text: e.target.value
   	});
  }

  handleChangeImportance(e, index, value){
    e.preventDefault();
    this.setState({
   	  importance: value
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
  
  someSubmit(){
    this.props.ClickOnCancel();
    this.setState({
      importance: '',
      text: ''
    });
  }

  render(){
    const {data, Click, name} = this.props;

    return(
      <div>
        <TextField 
        onChange={this.handleChangeInput} 
        value={this.state.text}
        floatingLabelText="Например: купить кроссовки или помыть посуду"
        style={{
          marginLeft: '20px',
          width: '700px'
        }}/>
        <div>
          <RaisedButton 
            backgroundColor = "#d14836" 
            label="Добавить запись" 
            labelColor = '#FFFFFF'
            labelStyle={{
              fontFamily: 'serif',
              fontSize: '90%'
            }}
            onClick={()=>{
              this.handleSubmit(this.state.text, this.state.importance, name)
            }}
          />
          <RaisedButton
            label="Отменить"
            style={{
              marginLeft: '10px',
              border: '0',
              boxShadow: '0'
            }}
            labelStyle={{
              fontSize: '90%'
            }}
            onClick={()=>{this.someSubmit()}}
          />
          <SelectField 
            size = "1" 
            id = "importance" 
            onChange={this.handleChangeImportance} 
            floatingLabelText="Степень важности задачи"
          >
            {data.map((item, i)=>(
              <MenuItem 
                key={item.value} 
                value={item.value} 
                primaryText={`Степень важности ${+item.value + 1}`}
              >
              </MenuItem>
	          ))}
          </SelectField>
        </div>
      </div>
	  )
  }	
}

export default ButtonsComponent;