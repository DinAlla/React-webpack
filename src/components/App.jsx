import React from 'react';
import TasksComponent from './TasksComponent.jsx';
import './App.css';
import DegreeOfImportance from './DegreeOfImportanceComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx'

const App = () => (
  <div>
    <HeaderComponent/>
    <DegreeOfImportance />
    <TasksComponent />
  </div>  
)

export default App;