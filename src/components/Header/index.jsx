import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="fixed z-max top-0 w-100 center pv2 bg-white shadow-header">
        <div className="dib w-100 border-box ph4-l ph3">
          <Link to="/" className="pt3 dib v-mid link dim w-10" title="Dennis Cortes">
            <Logo />
          </Link>
          <div className="dib v-mid-ns center w-90 tr-l tc">
            <Link to="/" className="f6 dib pv0 link pointer black-30 hover-blue">About</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
