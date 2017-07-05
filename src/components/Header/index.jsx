import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';
import Spacer from '../Spacer';

class Header extends Component {
  render() {
    return (
      <div id="Header">

        <div className="flex w-100 bottom-0 top-auto z-1">
          <Link to="/" className="flex-auto pb5">
            <Logo />
          </Link>
          <div className="flex items-center pb5">
            <a href="http://fromcortes.tumblr.com" target="_blank" className="f6 link link-underlined rainbow-hover black ml1 fw6">
              Inspiration
            </a>
            <Link to="/about" className="f6 link link-underlined rainbow-hover black ml4 fw6">
              About
            </Link>
          </div>
        </div>

        <h1 className="f3 fw6 lh-title">Dennis Cortés</h1>
        <h2 className="f5 fw4 lh-title black-60">Designer and Illustrator that codes</h2>
        <h3 href="mailto:hi@cortes.us" className="green f5 fw4 mt2 tooltip">
          hi@cortes.us
          <span className="tooltiptext">Available</span>
        </h3>

        <div className="db mt4">
          <a href="https://twitter.com/fromcortes" className="dim mr3">
            <img src='https://icon.now.sh/twitter/25/000000' alt='twitter' />
          </a>
          <a href="https://twitch.com/cortesarts" className="dim mr3 ml1">
            <img src='https://icon.now.sh/twitch/25/000000' alt='twitch' />
          </a>
          <a href="https://youtube.com/cortesarts" className="dim mr3 ml1">
            <img src='https://icon.now.sh/play_arrow/25/000000' alt='youtube' />
          </a>
          <a href="https://instagram.com/fromcortes" className="dim mr3 ml1">
            <img src='https://icon.now.sh/instagram/25/000000' alt='instagram' />
          </a>
          <a href="https://github.com/fromcortes" className="dim mr3 ml1">
            <img src='https://icon.now.sh/github/25/000000' alt='github' />
          </a>
        </div>
        <Spacer />
      </div>
    );
  }
}

export default Header;
