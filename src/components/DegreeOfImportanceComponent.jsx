import React from 'react';
import './DegreeOfImportanceComponent.css';
import '../containers/DegreeOfImportanceContainer'

class DegreeOfImportanceComponent extends React.Component{
  constructor(props){
    super(props);
    console.log(props.data + ' props in DegreeOfImportance');
    console.log(props.sortData + ' props in DegreeOfImportance');
    this.sortData = this.sortData.bind(this);
    }

  sortData(e) {
    console.log("key in Degree " + e.target.value);
    sortData(e.target.value);
  }

  render(){
    const {data, sortData} = this.props;
    return(
      <div id='DegreeOfImportance'>
        <h3>Фильтры</h3>
        <ul onClick={this.sortData}> 
          {
            data.map((item, i)=>(
              <li key={item.value} value={item.value}>{item.message}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default DegreeOfImportanceComponent