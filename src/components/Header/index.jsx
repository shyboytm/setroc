import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';
import Spacer from '../Spacer';

class Header extends Component {
  render() {
    return (
      <div id="Header">

        <div className="flex-ns w-100 bottom-0 top-auto z-1">
          <Link to="/" className="flex-auto-ns db pb5-ns pb3 dim">
            <Logo />
          </Link>
          <div className="flex-ns db items-center pb5">
            <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="f6 link no-underline link-underlined rainbow-hover black fw6">
              Recent Work ↗
            </a>
            {/* <a href="https://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="f6 link no-underline link-underlined rainbow-hover black ml4-ns ml3-ns ml0 fw6">
              Inspiration ↗
            </a> */}
            <a href="https://blog.cortes.us" target="_blank" rel="nofollow" className="f6 link no-underline link-underlined rainbow-hover black ml4 fw6">
              Blog ↗
            </a>
            <Link to="/about" className="f6 link link-underlined rainbow-hover black ml4 fw6">
              About
            </Link>
          </div>
        </div>

        <h1 className="f3 fw6 lh-title">Dennis Cortés</h1>
        <h2 className="f5 fw4 lh-title black-60">Designer and Illustrator that codes</h2>
        <h4 href="mailto:hi@cortes.us" className="green f5 fw4 mt2 tooltip mb4">
          hi@cortes.us
          <span className="tooltiptext">Available</span>
        </h4>

        <div className="db mb4">
          <a href="https://dribbble.com/fromcortes" target="_blank" rel="nofollow" className="dim mr3">
            <img src='https://icon.now.sh/dribbble/22/000000' alt='dribbble' />
          </a>
          <a href="https://github.com/fromcortes" target="_blank" rel="nofollow" className="dim mr3 ml1">
            <img src='https://icon.now.sh/github/22/000000' alt='github' />
          </a>
          <a href="https://fromcortes.tumblr.com" target="_blank" rel="nofollow" className="dim mr3">
            <img src='https://icon.now.sh/tumblr/22/000000' alt='tumblr' />
          </a>
          <a href="https://twitter.com/fromcortes" target="_blank" rel="nofollow" className="dim mr3">
            <img src='https://icon.now.sh/twitter/22/000000' alt='twitter' />
          </a>
          <a href="https://twitch.com/cortesarts" target="_blank" rel="nofollow" className="dim mr3 ml1">
            <img src='https://icon.now.sh/twitch/22/000000' alt='twitch' />
          </a>
          <a href="https://instagram.com/fromcortes" target="_blank" rel="nofollow" className="dim mr3 ml1">
            <img src='https://icon.now.sh/instagram/22/000000' alt='instagram' />
          </a>
        </div>

        <h3 className="f5 fw4 pa3 br2 light-red lh-copy ba b--light-red">
          I'm currently looking for a new full-time remote position!
          Reach out at hi@cortes.us if you or someone you know is looking for someone!
        </h3>
        <Spacer />
      </div>
    );
  }
}

export default Header;
