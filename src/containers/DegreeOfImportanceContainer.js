import { connect } from 'react-redux';
import DegreeOfImportanceComponent from '../components/DegreeOfImportanceComponent.jsx';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return {
    data: state.importance
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({sortData: actions.sortTodo}, dispatch)
}

const DegreeOfImportanceContainer  = connect(
  mapStateToProps,
  mapDispatchToProps
)(DegreeOfImportanceComponent)

export default DegreeOfImportanceContainer;