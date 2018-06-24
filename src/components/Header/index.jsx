import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <header className="fixed-l z-max w-100 shadow-large">
        <div className="bg-rainbow w-100" style={{height: 4 + "px"}}></div>
        <div id="Header" className="flex-l justify-between items-center tl-l tc w-100 ph0 pv0-l pv2 system bg-black-blue">
          <div className="blur flex items-center justify-center mv0-l mv3">
            <Link to="/" className="dim flex items-center link ml3-l">
              <div className="dib flex mr1-l mr2">
                <Logo />
              </div>
              <h1 className="ml2-l dib f6 fw5 tracked-tiny white">
                <span className="fw3 white-80">Dennis</span> Cortés
              </h1>
            </Link>
          </div>

          <ul className="list ph0-l ph3 mv1">
            <li className="dib mr3">
              <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="items-center flex f6 fw4 hover-bg-white-20 br2 up mb0-l mb3 db link white-90 bg-animate tracked-tiny ph2">
                Work ↗
              </a>
            </li>
            <li className="dib mr3">
              <a href="http://blog.cortes.us" target="_blank" rel="nofollow" className="items-center flex f6 fw4 hover-bg-white-20 br2 up mb0-l mb3 db link white-90 bg-animate tracked-tiny ph2">
                Blog ↗
              </a>
            </li>
            <li className="dib mr3">
              <Link to="/music" className="items-center flex f6 fw4 hover-bg-white-20 br2 up mb0-l mb3 db link white-90 bg-animate tracked-tiny ph2">
                Music
              </Link>
            </li>
            <li className="dn-l dib mr3">
              <Link to="/folder" className="items-center flex f6 fw4 hover-bg-white-20 br2 mb0-l mb3 link white bg-animate ph2 tracked-tiny w-100">
                Folder
              </Link>
            </li>
            <li className="dn-l dib mr3">
              <Link to="/journal" className="items-center flex f6 fw4 hover-bg-white-20 br2 mb0-l mb3 link white bg-animate ph2 tracked-tiny w-100">
                Journal
              </Link>
            </li>
            <li className="dn-l dib mr3">
              <Link to="/mentoring" className="items-center flex f6 fw4 hover-bg-white-20 br2 mb0-l mb3 link white bg-animate ph2 tracked-tiny w-100">
                Mentoring
              </Link>
            </li>
            <li className="dn-l dib mr3">
              <Link to="/tools" className="items-center flex f6 fw4 hover-bg-white-20 br2 mb0-l mb3 link white bg-animate ph2 tracked-tiny w-100">
                Tools
              </Link>
            </li>
            <li className="dn-l dib mr3">
              <Link to="/collection" className="items-center flex f6 fw4 hover-bg-white-20 br2 mb0-l mb3 link white bg-animate ph2 tracked-tiny w-100">
                Collection
              </Link>
            </li>
            <li className="dib">
              <Link to="/about" className="dn-l items-center flex f6 fw4 hover-bg-white-20 br2 up mb0-l mb3 db link white-90 bg-animate tracked-tiny ph2">
                About
              </Link>
            </li>
            <li className="hover-dropdown dib-l dn f6 relative mr3 pointer white">
              <span className="ba br2 b--white-20 hover-bg-white-20 fw5 ph2 pv1 tracked-tiny">More ↓</span>
              <div className="absolute dropdown-content dn right-0 pt3">
                <ul className="ba b--black-10 bg-white black br2 list pa2 shadow-large">
                  <li className="db mr3">
                    <Link to="/folder" className="items-center flex f6 fw5 hover-bg-black-10 br2 mb0-l link black-90 bg-animate ph2 pv1 w-100">
                      Folder
                    </Link>
                  </li>
                  <li className="db mr3">
                    <Link to="/journal" className="items-center flex f6 fw5 hover-bg-black-10 br2 mb0-l link black-90 bg-animate ph2 pv1 w-100">
                      Journal
                    </Link>
                  </li>
                  <li className="db mr3">
                    <Link to="/mentoring" className="items-center flex f6 fw5 hover-bg-black-10 br2 mb0-l link black-90 bg-animate ph2 pv1 w-100">
                      Mentoring
                    </Link>
                  </li>
                  <li className="db mr3">
                    <Link to="/tools" className="items-center flex f6 fw5 hover-bg-black-10 br2 mb0-l link black-90 bg-animate ph2 pv1 w-100">
                      Tools
                    </Link>
                  </li>
                  <li className="db mr3">
                    <Link to="/collection" className="items-center flex f6 fw5 hover-bg-black-10 br2 mb0-l link black-90 bg-animate ph2 pv1 w-100">
                      Collection
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
