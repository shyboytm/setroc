import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Home from './pages/Home';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);
