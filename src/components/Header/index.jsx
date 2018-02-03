import React, { Component } from 'react';
import { Link } from 'react-router';

import Today from '../Pages/Home/Data/Today';
import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div className="fixed-l z-max w-100 shadow-large">
        <div id="Header" className="flex-l justify-between items-center tl-l tc w-100 ph0 pv0-l pv2 system bg-black-blue">
          <div className="blur flex items-center justify-center mv0-l mv3">
            <Link to="/" className="dim flex items-center link ml3-l">
              <div className="dib flex mr1-l mr2">
                <Logo />
              </div>
              <h1 className="ml2-l dib f6-l f5 fw7 ttu tracked white">
                <span className="fw3">Dennis</span> Cortés
              </h1>
            </Link>
          </div>

          <p className="f6-l f5 fw4 flex items-center justify-center dib mv2-l mt0 mb4 relative white">
            <span className="f4">🌦</span> <Today />
          </p>

          <ul className="list ph0-l ph3 mv1">
            <li className="dib mr3">
              <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="items-center flex f6 fw4 hover-bg-white-10 br2 up mb0-l mb3 db link white-90 hover-bg-black-05 bg-animate tracked-tiny ph2">
                Work ↗
              </a>
            </li>
            <li className="dib mr3">
              <Link to="/mentoring" className="items-center flex f6 fw4 hover-bg-white-10 br2 up mb0-l mb3 db link white-90 hover-bg-black-05 bg-animate tracked-tiny ph2">
                Mentoring
              </Link>
            </li>
            <li className="dib mr3">
              <Link to="/tools" className="items-center flex f6 fw4 hover-bg-white-10 br2 up mb0-l mb3 db link white-90 hover-bg-black-05 bg-animate tracked-tiny ph2">
                Tools
              </Link>
            </li>
            {/* <li className="dib mr3">
              <a href="https://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="items-center flex f6 fw4 hover-bg-white-10 br2 up mb0-l mb3 db link white-90 hover-bg-black-05 bg-animate tracked-tiny ph2">
                Inspo ↗
              </a>
            </li> */}
            <li className="dib mr3">
              <a href="http://blog.cortes.us" target="_blank" rel="nofollow" className="items-center flex f6 fw4 hover-bg-white-10 br2 up mb0-l mb3 db link white-90 hover-bg-black-05 bg-animate tracked-tiny ph2">
                Blog ↗
              </a>
            </li>
            <li className="dib mr3">
              <Link to="/folder" className="items-center flex f6 fw4 hover-bg-white-10 br2 up mb0-l mb3 db link white-90 hover-bg-black-05 bg-animate tracked-tiny ph2">
                Folder
              </Link>
            </li>
            {/* <li className="dib mr3">
              <Link to="/news" className="items-center flex f6 fw4 hover-bg-white-10 br2 up mb0-l mb3 db link white-90 hover-bg-black-05 bg-animate tracked-tiny ph2">
                News
              </Link>
            </li> */}
            <li className="dib">
              <Link to="/about" className="dn-l items-center flex f6 fw4 hover-bg-white-10 br2 up mb0-l mb3 db link white-90 hover-bg-black-05 bg-animate tracked-tiny ph2">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-rainbow w-100" style={{height: 3 + "px"}}></div>
      </div>
    );
  }
}

export default Header;
