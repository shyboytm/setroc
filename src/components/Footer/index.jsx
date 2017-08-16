import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="Footer" className="pb4 bg-black mt6">
        <div className="w-90 center cf pv5">
          <div className="w-100 ph3 mb3 mt0 tc">
            <h2 className="fw6 f2-ns f3 white">I love meeting new people ✨</h2>
            <p className="white-80 lh-copy w-50-l w-70-m w-100 center">
              Want to chat about design, code, coffee, Pokémon, or life in general?
              Please introduce yourself and send an email to <a className="link white-80 rainbow-hover" href="mailto:hi@cortes.us">hi@cortes.us</a>
            </p>
          </div>
          <div className="w-100 tc pt3 mt4">
            <a href="https://twitter.com/fromcortes" className="dim mr4-l mr0-l">
              <img src='https://icon.now.sh/twitter/25/ffffff' alt='twitter' />
            </a>
            <a href="https://twitch.tv/cortesarts" className="dim mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/twitch/25/ffffff' alt='twitch' />
            </a>
            <a href="https://youtube.com/cortesarts" className="dim mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/play_arrow/25/ffffff' alt='youtube' />
            </a>
            <a href="https://instagram.com/fromcortes" className="dim mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/instagram/25/ffffff' alt='instagram' />
            </a>
            <a href="https://github.com/fromcortes" className="dim mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/github/25/ffffff' alt='github' />
            </a>
            <a href="mailto:hi@cortes.us" className="dim mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/email/25/ffffff' alt='email' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
