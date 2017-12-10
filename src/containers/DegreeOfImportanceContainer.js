import { connect } from 'react-redux';
import DegreeOfImportanceComponent from '../components/DegreeOfImportanceComponent.jsx';
import { sortTodo } from '../actions';

const mapStateToProps = (state) => {
  console.log(state + ' in container');
  return {
    data: state.importance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortData: (number)=>{
      dispatch(sortTodo(number))            
    }
  }
}

const DegreeOfImportanceContainer  = connect(
  mapStateToProps,
  mapDispatchToProps
)(DegreeOfImportanceComponent)

export default DegreeOfImportanceContainer;