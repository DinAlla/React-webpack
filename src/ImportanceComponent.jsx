import React from 'react';

class ImportanceComponent extends React.Component{
  constructor(props){
    super(props);
	this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
	this.props.onChangeData(e.target.value);
  }
  
  render(){
	return(
	  <select size = "1" id = "importance" onChange={this.handleChange}>
        <option value="0">Степень важности 1</option>
        <option value="1">Степень важности 2</option>
        <option value="2">Степень важности 3</option>
        <option value="3">Степень важности 4</option>
      </select>
	);
  }
}

export default ImportanceComponent