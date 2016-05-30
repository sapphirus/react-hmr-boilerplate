import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import Routes from './routes';

render((
  <Router history={browserHistory}>
  {Routes}
  </Router>
), document.getElementById('app'));
