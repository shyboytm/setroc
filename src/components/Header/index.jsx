import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="z-max top-0 w-100 center pv3 bg-white ph4-l ph3 cf">
        <div className="fixed-l w-50-l w-100 fl dib pb0-l pb3">
          <Link to="/" className="b pv2 f6 db-l dib link black lh-title tooltip">
            Dennis Cortés <span className="green ml1 f5 tooltip">•<span className="tooltiptext green dib f6 fw4">Available for work!</span></span>
          </Link>
          <Link to="/" className="pb2 f6 db-l dib ml0-l ml3 link black-50 hover-blue lh-title" title="About">
            About
          </Link>
          <Link to="/" className="f6 db-l dib ml0-l ml3 link black-50 hover-blue lh-title" title="Blog">
            Blog
          </Link>
        </div>
        <div className="w-50-l w-100 fr pv2">
          <div className="w-50 fl">
            <Link to="mailto:hi@cortes.us" className="f6 db pb2 link pointer hover-blue black-50">hi@cortes.us</Link>
            <Link to="https://twitter.com/fromcortes" className="f6 db pb2 link pointer hover-light-blue black-50">Twitter</Link>
            <Link to="https://dribbble.com/fromcortes" className="f6 db pb2 link pointer hover-pink black-50">Dribbble</Link>
          </div>
          <div className="w-50 fl">
            <Link to="https://twitch.tv/cortesarts" className="f6 db pb2 link pointer hover-purple black-50">Twitch</Link>
            <Link to="https://instagram.com/fromcortes" className="f6 db pb2 link pointer hover-dark-blue black-50">Instagram</Link>
            <Link to="https://github.com/fromcortes" className="f6 db pb2 link pointer hover-gold black-50">Github</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
