import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {

    const { children } = this.props;

    return (
      <div className="App bg-gradient h-100 w-100">
        <div className="top-0">
          <Header />
        </div>
        {children}
      </div>
    );
  }
}

export default App;
