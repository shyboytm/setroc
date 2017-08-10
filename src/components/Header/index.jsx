import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';
import Spacer from '../Spacer';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="pt4 ph4">
        <div className="flex-ns w-100 bottom-0 top-auto z-1">
          <div className="flex-auto-ns">
            <Link to="/" className="dib pb0-ns pb3 dim">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center pr4-ns">
            <div className="ma0 pa0 flex hover-dropdown relative pointer">
              <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="f6 link no-underline rainbow-hover black fw6">
                Extras ↓
              </a>
              <div className="dropdown-content dn absolute pt4 z-max">
                <div className="shadow-small bg-white br2 ba b--black-10">
                  <Link to="/extras/books" className="db pa3 f6 link rainbow-hover black fw6">
                    Books
                  </Link>
                  <a href="http://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="db pa3 f6 link rainbow-hover black fw6 bt b--black-10">
                    Inspiration
                  </a>
                  <Link to="/extras/people" className="db pa3 f6 link rainbow-hover black fw6 bt b--black-10">
                    People
                  </Link>
                </div>
              </div>
            </div>
            <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="f6 link flex no-underline rainbow-hover black ml4-ns ml3 fw6">
              Recent Work ↗
            </a>
            {/* <a href="https://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="f6 link flex no-underline rainbow-hover black ml4-ns ml3 ml3-ns ml0 fw6">
              Inspiration ↗
            </a> */}
            <a href="https://blog.cortes.us" target="_blank" rel="nofollow" className="f6 link flex no-underline rainbow-hover black ml4-ns ml3 fw6">
              Blog ↗
            </a>
            <Link to="/about" className="f6 link flex rainbow-hover black ml4-ns ml3 fw6">
              About
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
