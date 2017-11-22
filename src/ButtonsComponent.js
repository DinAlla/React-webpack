import React from 'react';

class ButtonsComponent extends React.Component {
	render(){
		return(
		<div>
		  <input onChange={this.props.onDataChange} value={this.props.value}/>
          <div id='btns'>
	          <button onClick={this.props.submit} id="add">
	            Add #{this.props.items.length + 1}
	          </button>
	          <button onClick={this.props.delete} id="del">
	          	Deleted
	          </button>
            //вынести в компонент, в него value и callback
            <select size = "1" id = "importance" required>
              <option value="0">Степень важности 1</option>
              <option value="1">Степень важности 2</option>
              <option value="2">Степень важности 3</option>
              <option value="3">Степень важности 4</option>
            </select>
          </div>
        </div>
		)
	}	
}

export default ButtonsComponent