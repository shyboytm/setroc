import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div>
        <div id="Header" className="flex-l justify-between tl-l tc w-100 ph3 pv2 system bg-black-blue">
          <div className="blur flex items-center justify-center mv0-l mv3">
            <Link to="/" className="dim flex items-center link ml3-l">
              <div className="dib flex mr2">
                <Logo />
              </div>
              <h1 className="ml2-l dib f6 fw7 ttu tracked white">
                <span className="fw3">Dennis</span> Cortés
              </h1>
            </Link>
          </div>
          <ul className="list pl0">
            <li className="dib mr3">
              <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Work ↗
              </a>
            </li>
            <li className="dib mr3">
              <Link to="/mentoring" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Mentoring
              </Link>
            </li>
            <li className="dib mr3">
              <Link to="/tools" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Tools
              </Link>
            </li>
            <li className="dib mr3">
              <a href="https://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Inspo ↗
              </a>
            </li>
            <li className="dib mr3">
              <a href="https://blog.cortes.us" target="_blank" rel="nofollow" className="items-center flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                Blog ↗
              </a>
            </li>
            <li className="dib">
              <Link to="/about" className="items-center dn-l flex f7 fw5 up mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 glow bg-white-20 hover-bg-white hover-black bg-animate">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-rainbow w-100" style={{height: 2 + "px"}}></div>
      </div>
    );
  }
}

export default Header;
