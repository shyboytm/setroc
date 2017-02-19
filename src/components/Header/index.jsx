import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="w-90 center mv4-ns mv2 ">
        <div className="dib dt-l w-100 border-box pv4 ph6-l ph3">
          <Link to="/" className="pt3 dib dtc-l v-mid white link dim w-40" title="Dennis Cortes">
            <Logo />
          </Link>
          <div className="dib dtc-l v-mid-ns center w-60 tr-l tc">
            <Link to="/" className="dib link pointer ttu tracked black-30 hover-blue fw7">About / Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
