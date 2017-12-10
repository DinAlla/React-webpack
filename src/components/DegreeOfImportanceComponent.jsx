import React from 'react';
import './DegreeOfImportanceComponent.css';
import '../containers/DegreeOfImportanceContainer'

class DegreeOfImportanceComponent extends React.Component{
  constructor(props){
    super(props);
    this.sortingData = this.sortingData.bind(this);
    }
    
  sortingData(e){
    this.props.sortData(e.target.value);
  }

  render(){
    const {data} = this.props;
    return(
      <div id='DegreeOfImportance'>
        <h3>Фильтры</h3>
        <ul onClick={this.sortingData}> 
          {
            data.map((item, i)=>(
              <li key={item.value} value={item.value} >{item.message}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default DegreeOfImportanceComponent