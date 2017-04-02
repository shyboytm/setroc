import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Footer extends Component {
  render() {
    return (
      <div id="Footer" className="pb4 bg-black">
        <div className="w-90 center cf">
          <div className="w-100 pv5-ns pv3 ph3 bb b--white-20 mb3 mt0 tc">
            <h2 className="fw6 f2 white">Need some help on a project?</h2>
            <p className="white-70 lh-copy w-50-l w-70-m w-100 mb4 center">
              I'm available to help you or your company with branding, illustration, and web design work.
              Please email me at <a className="link white-50 rainbow-hover " href="mailto:hi@cortes.us">hi@cortes.us</a>!
            </p>
          </div>
          <div className="w-50-l w-100 fl pt3">
            <div className="w-10 fl pt1 mr3-l mr4">
              <Logo />
            </div>
            <small className="b ttu tracked f6 tl white-70">© 2017 Dennis Cortés</small>
            <div className="tl mt3">
              <span className="pb2">
                <Link to="/about" className="rainbow-hover f6 link white-50 lh-title" title="About">About</Link>
              </span>
              <span className="ml3 pb2">
                <Link to="/" className="rainbow-hover f6 link white-50 lh-title" title="Blog">Blog</Link>
              </span>
              <span className="ml3 pb2">
                <a href="http://eepurl.com/cgT2bD" className="rainbow-hover f6 link white-50 lh-title" title="Newsletter">Newsletter</a>
              </span>
              <span className="ml3 pb2">
                <Link to="/facts" className="f6 link black lh-title">Facts</Link>
              </span>
            </div>
          </div>
          <div className="w-50-l w-100 fr-l fl pt3 mt2-l mt4">
            <a href="https://twitter.com/fromcortes" className="dim fr-l fl mr0-l">
              <img src='https://icon.now.sh/twitter/25/ffffff' alt='twitter' />
            </a>
            <a href="https://twitch.com/cortesarts" className="dim fr-l fl mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/twitch/25/ffffff' alt='twitch' />
            </a>
            <a href="https://youtube.com/cortesarts" className="dim fr-l fl mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/play_arrow/25/ffffff' alt='youtube' />
            </a>
            <a href="https://instagram.com/fromcortes" className="dim fr-l fl mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/instagram/25/ffffff' alt='instagram' />
            </a>
            <a href="https://github.com/fromcortes" className="dim fr-l fl mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/github/25/ffffff' alt='github' />
            </a>
            <a href="mailto:hi@cortes.us" className="dim fr-l fl mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/email/25/ffffff' alt='email' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
