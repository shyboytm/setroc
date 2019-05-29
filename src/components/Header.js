import React, { Component } from 'react';

import Today from './Today';

class Header extends Component {
  render() {
    return (
      <div className="flex pa4 justify-between items-center">
        <div className="flex">
          <a className="f5 mv0">Dennis Cortés</a>
        </div>
        <div className="flex">
          <Today />
        </div>
      </div>
    );
  }
}

export default Header;
