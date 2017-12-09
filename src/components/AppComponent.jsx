import React from 'react';
import TasksComponent from './TasksComponent.jsx';
import './AppComponent.css';
import DegreeOfImportance from '../containers/DegreeOfImportanceContainer.js';
import HeaderComponent from './HeaderComponent.jsx'

console.log('come to AppComponent ');
const App = () => (
  <div>
    <HeaderComponent/>
    <DegreeOfImportance />
    <TasksComponent />
  </div>  
)

export default App;