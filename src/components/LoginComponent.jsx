import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class LoginComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changePass = this.changePass.bind(this);
  }

  handleSubmit(e) { 
    e.preventDefault();
    this.props.onLoginClick(this.state.name, this.state.password);
  }
  
  changeName(e){
    this.setState({
      name: e.target.value
   	});
  }

  changePass(e){
    this.setState({
      password: e.target.value
   	});
  }
  componentDidUpdate(){
    this.props.isAuthenticated === true
    ? this.props.history.push('/app')
    : null
  }

  render(){
    return (
      <Paper style={{
        height: 300,
        width: 300,
        margin: '0 auto',
        paddingTop: '20px',
        textAlign: 'center',
        display: 'block',
        background: '#7b68ee',
        opacity: '0.9',
        fontFamily: 'Bradley Hand, cursive',
        color: 'black'
      }}>
      <br />Name<br /><TextField onChange={this.changeName}/>
      <br />Password<TextField onChange={this.changePass} />
      <br /><RaisedButton  label="Login" onClick={this.handleSubmit}/>
      </Paper>
    );
  }
}

export default LoginComponent;