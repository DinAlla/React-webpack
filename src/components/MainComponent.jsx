import React from 'react';
import TasksComponent from './TasksComponent.jsx';
import './MainComponent.css';
import DegreeOfImportanceContainer from '../containers/DegreeOfImportanceContainer.js';
import HeaderContainer from '../containers/HeaderContainer.js';

const MainComponent = () => (
  <div>
    <HeaderContainer />
    <DegreeOfImportanceContainer/>
    <TasksComponent/>
  </div>  
)

export default MainComponent;