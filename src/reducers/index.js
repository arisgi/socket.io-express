import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const user = (state = { status: 'away' }, action) => {
  switch (action.type) {
    case 'ENTER_ROOM':
      return {
        status: 'attend',
        name: action.payload.name,
      };
    default:
      return state;
  }
};

const messages = (state = { list: [] }, action) => {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        list: [...state.list, action.payload.message],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
  messages,
  form: formReducer,
});

export default rootReducer;
