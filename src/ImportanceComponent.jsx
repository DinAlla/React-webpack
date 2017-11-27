import React from 'react';

class ImportanceComponent extends React.Component{
  constructor(props){
    super(props);
	this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    console.log("key in Import " + e.target.value);
	this.props.onChangeData(e.target.value);
  }
  
  render(){
	return(
	  <select size = "1" id = "importance" onChange={this.handleChange}>
	    {this.props.data.map((item, i)=>(
          <option key={item.value} value={item.value}>{item.message}</option>
	    ))
	    }
      </select>
	);
  }
}

export default ImportanceComponent