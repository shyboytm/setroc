import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="fixed-l z-max top-0 w-100 center pv3 bg-white ph4-l ph3 cf">
        <div className="w-30-l w-100 fl dib pv2">
          <Link to="/" className="b f6 link black lh-title name">
            Dennis Cortés
          </Link>
          <span className="ml3 pb2">
            <Link to="/about" className="rainbow-hover f6 link black-30 lh-title" title="About">About</Link>
          </span>
          <span className="ml3 pb2">
            <Link to="/" className="rainbow-hover f6 link black-30 lh-title" title="Blog">Blog</Link>
          </span>
          <span className="ml3 pb2">
            <Link to="/" className="rainbow-hover f6 link black-30 lh-title" title="Newsletter">Newsletter</Link>
          </span>
        </div>
        <div className="w-50-l w-100 fr-l fl pv2">
          <a href="mailto:hi@cortes.us" className="fr-l fl ml3-l ml0 f6 link pointer rainbow-hover blue">hi@cortes.us</a>
          <a href="https://twitch.tv/cortesarts" className="fr-l fl ml3 ml0-l f6 link pointer rainbow-hover green">Livestream</a>
        </div>
      </div>
    );
  }
}

export default Header;
