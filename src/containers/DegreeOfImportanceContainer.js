import { connect } from 'react-redux';
import DegreeOfImportanceComponent from '../components/DegreeOfImportanceComponent.jsx';
import { sortTodo } from '../actions';

const mapDispatchToProps = (state) => {
  return {
    data: state.importance
  }
}

const mapStateToProps = (dispatch) => {
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