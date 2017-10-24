import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';
import Spacer from '../Spacer';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="blur-late flex-l justify-between w-100 pa3 system bb b--black-10">
        <div className="flex items-center mb0-l mb3">
          <Link to="/" className="link dim">
            <Logo />
          </Link>
          <Link to="/" className="link dim">
            <h1 className="ml2 dib f5 black">Dennis Cortés</h1>
          </Link>
        </div>
        <ul className="list pl0">
          <li className="dib mr3">
            <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="items-center flex f6 fw4 mb0-l mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
              Work ↗
            </a>
          </li>
          {/*<li className="dib mr3">
            <Link to="/mentoring" className="items-center flex f6 fw4 mb0-l mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
              Mentoring
            </Link>
          </li>*/}
          <li className="dib mr3">
            <Link to="/tools" className="items-center flex f6 fw4 mb0-l mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
              Tools
            </Link>
          </li>
          <li className="dib mr3">
            <a href="https://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="items-center flex f6 fw4 mb0-l mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
              Inspo ↗
            </a>
          </li>
          <li className="dib mr3">
            <a href="https://blog.cortes.us" target="_blank" rel="nofollow" className="items-center flex f6 fw4 mb0-l mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
              Blog ↗
            </a>
          </li>
          <li className="dib mr3">
            <Link to="/about" className="items-center dn-l flex f6 fw4 mb0-l mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
              About
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
