import React from 'react';
import DegreeOfImportanceComponent from './DegreeOfImportanceComponent';
import TasksComponent from './TasksComponent';
import './AppComponent.css';

class AppComponent extends React.Component{
	render(){
		return (
			<div>
				<DegreeOfImportanceComponent />
				<TasksComponent>Lalala</TasksComponent>
			</div>
		);
	}
}

export default AppComponent