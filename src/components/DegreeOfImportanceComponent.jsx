import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {blue500} from 'material-design-icons';

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
    const style = {
      display: 'inline-flex',
      width: '35%',
      backgroundColor: 'grey',
      zIndex: '1',
      float: 'left',
      padding: '0.1em 2%',
      backgroundColor: '#e9e9e9',
      color: 'inherit',
      fontFamily: 'Bradley Hand, cursive',
      height: '100vh',
      overflow: 'auto',
      overflowX: 'hidden'
    };
    return(
      <Paper style={style}>
        <Menu onClick={this.sortingData} style={{marginLeft: '0 auto'}}> 
          <MenuItem disabled={true} style={{color: 'black', fontSize: '18px'}}><h3>Фильтры</h3></MenuItem>
          <Divider />
          {
            data.map((item, i)=>(
              <MenuItem key={item.value} value={item.value} style={{fontFamily: 'Bradley Hand, cursive', fontSize: '18px'}}>
              <FontIcon className="material-icons" color={blue500}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32"><path fill="#3CAED6" d="M12 0s12 13.373 12 20-5.372 12-12 12c-6.627 0-12-5.373-12-12l12-20z"/><path fill="#63BFDE" d="M16.994 16c-1.108 0-2.006.898-2.006 2.007 0 1.107.897 2.005 2.006 2.005 1.107 0 2.006-.897 2.006-2.005 0-1.109-.898-2.007-2.006-2.007z"/><path fill="#369DC0" d="M13 31c-6.627 0-12-5.373-12-12 0-5.497 8.25-15.627 11.066-18.926l-.066-.074s-12 13.373-12 20 5.373 12 12 12c3.568 0 6.764-1.566 8.961-4.039-2.119 1.885-4.901 3.039-7.961 3.039z"/></svg>
              </FontIcon>
              {item.message}</MenuItem>
            ))
          }
        </Menu>
      </Paper>
    )
  }
}

export default DegreeOfImportanceComponent