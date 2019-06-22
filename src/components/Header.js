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
          <a className="b f6 tracked ttu">Modern</a>
          <span className="black-20 ph2">|</span>
          <a className="b f6 tracked ttu">Vintage</a>
          <div className="pl4">
            <Today />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
