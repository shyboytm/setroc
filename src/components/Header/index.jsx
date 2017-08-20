import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';
import Spacer from '../Spacer';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="pa3 system">
        <div className="flex-l justify-between w-100">
          <div className="flex items-center mb0-l mb3">
            <Link to="/" className="link dim">
              <Logo />
            </Link>
            <Link to="/" className="link dim">
            <h1 className="ml2 dib f5 black">Dennis Cortés</h1>
            </Link>
          </div>
          <div className="flex items-center content-end flex-row pr4-l ml0-l ml3 mb0-l mb3">
            <div className="ma0 pa0 flex-l dn hover-dropdown relative pointer">
              <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="f6 link no-underline rainbow-hover black fw6">
                Extras ↓
              </a>
              <div className="dropdown-content dn absolute pt4 z-max">
                <div className="shadow-small bg-white br2 ba b--black-10">
                  <a href="http://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="db pa3 f6 link rainbow-hover black fw6">
                    Inspiration
                  </a>
                  <span className="db pa3 f6 black-30 fw6 bt b--black-10">
                    Soon...
                  </span>
                  {/* <Link to="/extras/books" className="db pa3 f6 link rainbow-hover black fw6 bt b--black-10">
                    Books
                  </Link>
                  <Link to="/extras/people" className="db pa3 f6 link rainbow-hover black fw6 bt b--black-10">
                    People
                  </Link> */}
                </div>
              </div>
            </div>
            <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="f6 link flex no-underline rainbow-hover black ml4-l ml0 fw6">
              Recent Work ↗
            </a>
            <a href="https://blog.cortes.us" target="_blank" rel="nofollow" className="f6 link flex no-underline rainbow-hover black ml4-l ml3 fw6">
              Blog ↗
            </a>
            <Link to="/about" className="f6 link dn-l flex rainbow-hover black ml4-l ml3 fw6">
              About
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
