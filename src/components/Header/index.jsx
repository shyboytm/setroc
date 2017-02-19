import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {

    const imgLogo = require('../../img/cortes-logo.png');

    return (
      <div id="Header" className="w-100">
        <div className="db dt-l w-100 border-box pv4 ph6-l">
          <Link to="/" className="db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Pokém">
            <img className="w4" src={imgLogo} alt="Dennis Cortes Logo" />
          </Link>
          <div className="db dtc-l v-mid w-70 center w-75-l tc tr-l">
            <Link to="/" className="link pointer ttu tracked black-30 hover-blue fw7">About &amp; Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
