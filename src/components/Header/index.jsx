import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div className="bg-black-90 pa4">
        <div className="flex flex-wrap w-100">
          <Link to="/" className="bl bt bb b--white bg-animate hover-bg-white-20 link flex flex-auto items-center pa4-l pa3 pointer ttu tracked f7 white">
            <Logo />
            <h1 className="dib f7 fw6 mv0">Dennis Cortés</h1>
          </Link>
          <a href="/" className="bl bt bb b--white bg-animate hover-bg-white-20 link pointer pa4-l pa3 ttu tracked f7 white">
            Work ↗
          </a>
          <Link to="/mentoring" className="bl bt bb b--white bg-animate hover-bg-white-20 link pa4-l pa3 pointer ttu tracked f7 white">
            Mentoring
          </Link>
          <Link to="/tools" className="bl bt bb b--white bg-animate hover-bg-white-20 link pa4-l pa3 pointer ttu tracked f7 white">
            Tools
          </Link>
          <a href="/" className="bl bt bb b--white bg-animate hover-bg-white-20 link pointer pa4-l pa3 ttu tracked f7 white">
            Inspo ↗
          </a>
          <a href="/" className="ba b--white bg-animate hover-bg-white-20 link pointer pa4-l pa3 ttu tracked f7 white">
            Blog ↗
          </a>
        </div>
        <div className="bl bb br b--white flex items-center ph4 pv3 w-100" style={{marginTop: -1 + "px"}}>
          <div className="flex-auto">
            <span className="ttu tracked f7 o-50 white">
              Designer and Illustrator that codes
            </span>
          </div>
          <a href="/" className="b--white bg-animate dim hover-bg-white-20 fw6 link mr3 pointer ttu tracked shine bg-text-clip f7 white">
            hi@cortes.us
          </a>
          <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="dim mr3">
            <img src='https://icon.now.sh/dribbble/16/8C8C8C' alt='dribbble' />
          </a>
          <a href="https://github.com/fromcortes" target="_blank" rel="nofollow" className="dim mr3">
            <img src='https://icon.now.sh/github/16/8C8C8C' alt='github' />
          </a>
          <a href="https://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="dim mr3">
            <img src='https://icon.now.sh/tumblr/16/8C8C8C' alt='tumblr' />
          </a>
          <a href="https://twitter.com/fromcortes" target="_blank" rel="nofollow" className="dim mr3">
            <img src='https://icon.now.sh/twitter/16/8C8C8C' alt='twitter' />
          </a>
          <a href="https://twitch.tv/fromcortes" target="_blank" rel="nofollow" className="dim mr3">
            <img src='https://icon.now.sh/twitch/16/8C8C8C' alt='twitch' />
          </a>
          <a href="https://instagram.com/fromcortes" target="_blank" rel="nofollow" className="dim">
            <img src='https://icon.now.sh/instagram/16/8C8C8C' alt='instagram' />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
