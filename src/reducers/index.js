import { combineReducers } from 'redux';

const user = (state = { status: 'away' }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
