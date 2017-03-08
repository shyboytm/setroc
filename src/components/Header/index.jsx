import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="fixed-l z-max top-0 w-100 center pv3 bg-white ph4-l ph3 cf">
        <div className="w-50-l w-100 fl dib pb0-l pb2">
          <Link to="/" className="b pv2 f6 db-l dib link black lh-title" title="Dennis Cortes">
            Dennis Cortés
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
            <span className="f6 db pb2">Email:
            <Link to="mailto:hi@cortes.us" className="link pointer black-30 hover-blue"> hi@cortes.us</Link></span>
            <span className="f6 db pb2">Twitter:
            <Link to="https://twitter.com/fromcortes" className="link pointer black-30 hover-blue"> @fromcortes</Link></span>
            <span className="f6 db pb2">Dribbble:
            <Link to="https://dribbble.com/fromcortes" className="link pointer black-30 hover-blue"> /fromcortes</Link></span>
          </div>
          <div className="w-50 fl">
            <span className="f6 db pb2">Twitch:
            <Link to="https://twitch.tv/cortesarts" className="link pointer black-30 hover-blue"> /cortesarts</Link></span>
            <span className="f6 db pb2">Instagram:
            <Link to="https://instagram.com/fromcortes" className="link pointer black-30 hover-blue"> @fromcortes</Link></span>
            <span className="f6 db pb2">GitHub:
            <Link to="https://github.com/fromcortes" className="link pointer black-30 hover-blue"> /fromcortes</Link></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
