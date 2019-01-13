import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <header className="blur-late fixed-l z-max w-100 shadow-large">
        <div className="bg-rainbow w-100" style={{height: 4 + "px"}}></div>
        <div id="Header" className="flex-l justify-between items-center tl-l tc w-100 ph0 pv0-l pv2 system bg-black-blue">
          <div className="flex items-center justify-center mv0-l mv3">
            <Link to="/" className="dim flex items-center link ml3-l">
              <div className="dib flex mr1-l mr2">
                <Logo />
              </div>
              <h1 className="ml2-l dib f6 fw5 tracked-tiny white">
                Dennis Cortés
              </h1>
            </Link>
            <a href="mailto:hi@cortes.us" className="bg-white-20 hover-bg-white-40 br2 dib-l dn f7 link ml3 mv0 pv0 ph3 up white">
              I'm looking for a new full-time role or freelance work!
            </a>
          </div>

          <ul className="list ph0-l ph3 mv1">
            <li className="dib mr3">
              <a href="https://cortes.us/images/dennis-cortes-resume-2019.pdf" download className="items-center flex f6 fw4 hover-bg-white-20 br2 up mb0-l mb3 db link white-90 bg-animate tracked-tiny ph1">
                Resume &darr;
              </a>
            </li>
            <li className="dib mr3">
              <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="items-center flex f6 fw4 hover-bg-white-20 br2 up mb0-l mb3 db link white-90 bg-animate tracked-tiny ph1">
                Work ↗
              </a>
            </li>
            <li className="dib mr3">
              <a href="http://blog.cortes.us" target="_blank" rel="nofollow" className="items-center flex f6 fw4 hover-bg-white-20 br2 up mb0-l mb3 db link white-90 bg-animate tracked-tiny ph1">
                Blog ↗
              </a>
            </li>
            <li className="dib mr3">
              <Link to="/music" className="items-center flex f6 fw4 hover-bg-white-20 br2 up mb0-l mb3 db link white-90 bg-animate tracked-tiny ph1">
                Music
              </Link>
            </li>
            <li className="dib mr3">
              <Link to="/folder" className="items-center flex f6 fw4 hover-bg-white-20 br2 up mb0-l mb3 db link white-90 bg-animate tracked-tiny ph1">
                Folder
              </Link>
            </li>
            <li className="dib mr3">
              <Link to="/tools" className="items-center flex f6 fw4 hover-bg-white-20 br2 up mb0-l mb3 db link white-90 bg-animate tracked-tiny ph1">
                Tools
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
