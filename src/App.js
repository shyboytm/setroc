import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App bg-gradient h-100 w-100">
        <div className="top-0">
          <Header />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
