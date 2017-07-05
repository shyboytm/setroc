import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="flex w-100 pb5 bottom-0 top-auto z-1">
        <div className="flex-auto">
          <Logo />
        </div>
        <div className="flex items-center">
          <a href="http://fromcortes.tumblr.com" target="_blank" className="f6 link link-underlined rainbow-hover black ml1 fw6">
            Inspiration
          </a>
          <Link to="/" className="f6 link link-underlined rainbow-hover black ml4 fw6">
            About
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
