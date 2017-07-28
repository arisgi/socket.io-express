import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import App from './containers/App';
import Home from './containers/Home';
import Room from './containers/Room';

/* global document */

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="room" component={Room} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
