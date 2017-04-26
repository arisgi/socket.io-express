import { connect } from 'react-redux';
import { sendMessage } from '../actions';
import Room from '../components/Room';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (values) => { dispatch(sendMessage(values)); },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Room);
