import React, { PropTypes } from 'react';

 const Todo = ({ text, onClick})=>(
  <li >{text}<button onClick={()=>{onClick}} id="onli">Х</button></li>
 )

 Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
 }
 
 export default Todo