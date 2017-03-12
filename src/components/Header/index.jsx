import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="z-max top-0 w-100 center pv3 bg-white ph4-l ph3 cf">
        <div className="fixed-l w-40-l w-100 fl dib pb0-l pb3">
          <Link to="/" className="b pv2 f6 db-l dib link black lh-title tooltip">
            <span className="name">Dennis Cortés</span> <span className="green ml1 f5 tooltip">•<span className="tooltiptext green dib f6 fw4">Available for work!</span></span>
          </Link>
          <Link to="/" className="rainbow-hover pb2 f6 db-l ml0-l ml3 link black-30 hover-blue lh-title" title="About">
            About
          </Link>
          <Link to="/" className="rainbow-hover f6 db-l ml0-l ml3 link black-30 hover-blue lh-title" title="Blog">
            Blog
          </Link>
        </div>
        <div className="w-50-l w-100 fr pv2">
          <div className="w-50 fl">
            <a href="mailto:hi@cortes.us" className="f6 db pb2 link pointer hover-blue black-30">hi@cortes.us</a>
            <a href="https://twitter.com/fromcortes" className="f6 db pb2 link pointer hover-light-blue black-30">Twitter</a>
            <a href="https://dribbble.com/fromcortes" className="f6 db pb2 link pointer hover-pink black-30">Dribbble</a>
          </div>
          <div className="w-50 fl">
            <a href="https://twitch.tv/cortesarts" className="f6 db pb2 link pointer hover-purple black-30">Twitch</a>
            <a href="https://instagram.com/fromcortes" className="f6 db pb2 link pointer hover-dark-blue black-30">Instagram</a>
            <a href="https://github.com/fromcortes" className="f6 db pb2 link pointer hover-gold black-30">Github</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
