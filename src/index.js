import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Books from './components/Pages/Books';
import Livestream from './components/Pages/Livestream';
import People from './components/Pages/People';
import Thanks from './components/Pages/Thanks';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      {/*<Route path="/books" component={Books} />*/}
      <Route path="/livestream" component={Livestream} />
      {/*<Route path="/people" component={People} />*/}
      <Route path="/thanks" component={Thanks} />
    </Route>
  </Router>,
  document.getElementById('root')
);
