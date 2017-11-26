import React from 'react';
import './DegreeOfImportanceComponent.css';

class DegreeOfImportanceComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id='DegreeOfImportance'>
        <h3>Фильтры</h3>
        <ul>
          <li onClick={()=>{this.props.sortData('1', this.props.items)}}>Степень важности 1</li>
          <li>Степень важности 2</li>
          <li>Степень важности 3</li>
          <li>Степень важности 4</li>
          <li>Показать все</li>
        </ul>
      </div>
    )
  }
}

export default DegreeOfImportanceComponent