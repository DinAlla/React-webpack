import React from 'react';
import TasksComponent from './TasksComponent.jsx';
import './MainComponent.css';
import DegreeOfImportanceContainer from '../containers/DegreeOfImportanceContainer.js';

const MainComponent = () => (
  <div>
    <DegreeOfImportanceContainer/>
    <TasksComponent/>
  </div>  
)

export default MainComponent;