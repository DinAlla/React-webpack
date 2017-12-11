import React from 'react';
import TasksComponent from './TasksComponent.jsx';
import './AppComponent.css';
import DegreeOfImportanceContainer from '../containers/DegreeOfImportanceContainer.js';
import HeaderComponent from './HeaderComponent.jsx'

const App = () => (
  <div>
    <HeaderComponent/>
    <DegreeOfImportanceContainer/>
    <TasksComponent/>
  </div>  
)

export default App;