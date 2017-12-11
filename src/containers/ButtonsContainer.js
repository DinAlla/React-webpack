import { connect } from 'react-redux';
import ButtonsComponent from '../components/ButtonsComponent.jsx';

const mapStateToProps = (state) => {
  return {
    data: state.importance.slice(0,4)
  }
}

const ButtonsContainer  = connect(
  mapStateToProps
)(ButtonsComponent)

export default ButtonsContainer;