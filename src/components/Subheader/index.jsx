import React, { Component } from 'react';
import { Link } from 'react-router';

import Spacer from '../Spacer';
import Title from '../Title';

class SubHeader extends Component {
  render() {
    return (
      <div id="Subheader" className="pv3">

        <div className="tc">
          <h1 className="f2 fw6 mb3">Dennis Cortés</h1>
          <h2 className="f4 system fw4 lh-subtitle black-60">
            Designer and Illustrator that codes
          </h2>
          <h4 href="mailto:hi@cortes.us" className="green f5 fw4 mt1 tooltip mb4">
            hi@cortes.us
            <span className="tooltiptext">Available</span>
          </h4>
        </div>

        <div className="mb6 tc">
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
          <a href="https://twitch.tv/fromcortes" target="_blank" rel="nofollow" className="dim mr3 ml1">
            <img src='https://icon.now.sh/twitch/22/000000' alt='twitch' />
          </a>
          <a href="https://instagram.com/fromcortes" target="_blank" rel="nofollow" className="dim mr3 ml1">
            <img src='https://icon.now.sh/instagram/22/000000' alt='instagram' />
          </a>
        </div>

        <Spacer />

      </div>
    );
  }
}

export default SubHeader;
