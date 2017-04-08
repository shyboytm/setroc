import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Secret from './components/Pages/Secret';
import Livestream from './components/Pages/Livestream';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/secret" component={Secret} />
      <Route path="/livestream" component={Livestream} />
    </Route>
  </Router>,
  document.getElementById('root')
);
