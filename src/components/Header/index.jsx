import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';
import Spacer from '../Spacer';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="pa4">
        <div className="flex-ns w-100 bottom-0 top-auto z-1">
          <Link to="/" className="flex-auto-ns db pb0-ns pb3 dim">
            <Logo />
          </Link>
          <div className="flex-ns db items-center">
            <div className="ma0 pa0 flex">
              <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="f6 link no-underline link-underlined rainbow-hover black fw6">
                Extras ↓
              </a>
            </div>
            <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="f6 link flex no-underline link-underlined rainbow-hover black ml4 fw6">
              Recent Work ↗
            </a>
            {/* <a href="https://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="f6 link flex no-underline link-underlined rainbow-hover black ml4-ns ml3-ns ml0 fw6">
              Inspiration ↗
            </a> */}
            <a href="https://blog.cortes.us" target="_blank" rel="nofollow" className="f6 link flex no-underline link-underlined rainbow-hover black ml4 fw6">
              Blog ↗
            </a>
            <Link to="/about" className="f6 link flex link-underlined rainbow-hover black ml4 fw6">
              About
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
