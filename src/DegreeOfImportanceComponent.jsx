import React from 'react';
import './DegreeOfImportanceComponent.css';

class DegreeOfImportanceComponent extends React.Component{
  constructor(props){
    super(props);
    this.sortData = this.sortData.bind(this);
    }

  sortData(e) {
    this.props.sortData(e.target.value);
  }

  render(){
    return(
      <div id='DegreeOfImportance'>
        <h3>Фильтры</h3>
        <ul onClick={this.sortData}>
          <li value='0'>Степень важности 1</li>
          <li value='1'>Степень важности 2</li>
          <li value='2'>Степень важности 3</li>
          <li value='3'>Степень важности 4</li>
          <li value='4'>Показать все</li>
        </ul>
      </div>
    )
  }
}

export default DegreeOfImportanceComponent