import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Footer extends Component {
  render() {
    return (
      <div id="Footer" className="pb4 bg-black mt6">
        <div className="w-90 center cf pv5">
          <div className="w-100 ph3 mb3 mt0 tc">
            <h2 className="fw6 f2-ns f3 white">Need some help on a project?</h2>
            <p className="white-70 lh-copy w-50-l w-70-m w-100 center">
              I'm available to help you or your company with branding, illustration, and web design work.
              Please email me at <a className="link white-50 rainbow-hover " href="mailto:hi@cortes.us">hi@cortes.us</a>!
            </p>
          </div>
          <div className="w-100 tc pt3 mt2-l mt4">
            <a href="https://twitter.com/fromcortes" className="dim mr4-l mr0-l">
              <img src='https://icon.now.sh/twitter/20/ffffff' alt='twitter' />
            </a>
            <a href="https://twitch.com/cortesarts" className="dim mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/twitch/20/ffffff' alt='twitch' />
            </a>
            <a href="https://youtube.com/cortesarts" className="dim mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/play_arrow/20/ffffff' alt='youtube' />
            </a>
            <a href="https://instagram.com/fromcortes" className="dim mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/instagram/20/ffffff' alt='instagram' />
            </a>
            <a href="https://github.com/fromcortes" className="dim mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/github/20/ffffff' alt='github' />
            </a>
            <a href="mailto:hi@cortes.us" className="dim mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/email/20/ffffff' alt='email' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
