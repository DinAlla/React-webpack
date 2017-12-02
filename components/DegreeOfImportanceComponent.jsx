import React from 'react';
import './DegreeOfImportanceComponent.css';

class DegreeOfImportanceComponent extends React.Component{
  constructor(props){
    super(props);
    this.sortData = this.sortData.bind(this);
    }

  sortData(e) {
    console.log("key in Degree " + e.target.value);
    this.props.sortData(e.target.value);
  }

  render(){
    return(
      <div id='DegreeOfImportance'>
        <h3>Фильтры</h3>
        <ul onClick={this.sortData}> 
          {this.props.data.map((item, i)=>(
            <li key={item.value} value={item.value}>{item.message}</li>
          ))
          }
        </ul>
      </div>
    )
  }
}

export default DegreeOfImportanceComponent