import React from 'react';
import LogoutContainer from '../containers/LogoutContainer.js';
import CardHeader from 'material-ui/Card/CardHeader';

class HeaderComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {Click, name} = this.props;
    return (
      <CardHeader 
        style={{
          height: '50px',
          width: '100%',
          backgroundColor: '#8B0000',
          display: 'inline-flex',
          justifyContent: 'space-around'
        }}
        textStyle={{
          color: 'yellow'
        }}
        title='Hello!'
        titleStyle={{
          color: 'white',
          fontFamily: 'Bradley Hand, cursive',
          fontSize: '150%',
          margin: '-5px'
        }}
      >
      <LogoutContainer/>
      </CardHeader>
    );
  }
}

export default HeaderComponent;