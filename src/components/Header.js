import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from './Logo';
import Today from './Today';

class Header extends Component {
  render() {


    return (
      <div className="flex-ns pa4 justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="dim">
            <Logo />
          </Link>
          <h1 style={{"fontSize" : "0"}}>Dennis Cortés</h1>
          <a href="/work" className="black-70 hover-light-purple f7 fw6 relative ttu tracked link mh4 mb2 up">
            Work
          </a>
          <a href="/tools" className="black-70 hover-light-purple f7 fw6 relative ttu tracked link mr4 mb2 up">
            Tools
          </a>
          <a href="/music" className="black-70 hover-light-purple f7 fw6 relative ttu tracked link mr4 mb2 up">
            Music
          </a>
          <a href="mailto:hi@cortes.us" className="black-70 f7 fw6 hover-light-purple ttu tracked link mb2 up">
            Contact
          </a>
        </div>
        <div className="dib-ns dn pl4">
          <Today />
        </div>
      </div>
    );
  }
}

export default Header;
