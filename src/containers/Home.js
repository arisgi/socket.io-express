import { connect } from 'react-redux';
import { enterRoom } from '../actions';
import Home from '../components/Home';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (values) => { dispatch(enterRoom(values)); },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
