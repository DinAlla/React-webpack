import React, { PropTypes } from 'react';

 const Todo = ({ text, onClick})=>(
  <li >{text}<button onClick={()=>{onClick}} id="onli">Х</button></li>
 )
 
 export default Todo