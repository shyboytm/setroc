import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Home from './pages/Home';
import Music from './pages/music/Music';

import HM07 from './pages/music/HM-07';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/music" component={Music} />
      <Route path="/music/hm-07" component={HM07} />
    </Route>
  </Router>,
  document.getElementById('root')
);
