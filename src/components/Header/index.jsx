import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="bg-rainbow w-100" style={{height: 3 + "px"}}></div>
        <div id="Header" className="flex-l justify-between tl-l tc w-100 ph3 pv2 system bb bg-black-90 b--white-10">
          <div className="blur-late flex items-center justify-center mv0-l mv3">
            <Link to="/" className="link dim">
              <h1 className="ml2-l dib f3 fw4 tracked-tiny white">Dennis Cortés</h1>
            </Link>
          </div>
          <ul className="list pl0">
            <li className="dib mr3">
              <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="items-center flex f7 fw4 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 bg-white-20 hover-bg-white-20 bg-animate">
                Work ↗
              </a>
            </li>
            <li className="dib mr3">
              <Link to="/mentoring" className="items-center flex f7 fw4 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 bg-white-20 hover-bg-white-20 bg-animate">
                Mentoring
              </Link>
            </li>
            <li className="dib mr3">
              <Link to="/tools" className="items-center flex f7 fw4 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 bg-white-20 hover-bg-white-20 bg-animate">
                Tools
              </Link>
            </li>
            <li className="dib mr3">
              <a href="https://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="items-center flex f7 fw4 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 bg-white-20 hover-bg-white-20 bg-animate">
                Inspo ↗
              </a>
            </li>
            <li className="dib mr3">
              <a href="https://blog.cortes.us" target="_blank" rel="nofollow" className="items-center flex f7 fw4 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 bg-white-20 hover-bg-white-20 bg-animate">
                Blog ↗
              </a>
            </li>
            <li className="dib mr3">
              <Link to="/about" className="items-center dn-l flex f7 fw4 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white-90 bg-white-20 hover-bg-white-20 bg-animate">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
