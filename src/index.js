import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Home from './pages/Home';
import Music from './pages/music/Music';
import Tools from './pages/tools/Tools';
import Work from './pages/work/Work';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/music" component={Music} />
      <Route path="/tools" component={Tools} />
    </Route>
  </Router>,
  document.getElementById('root')
);
