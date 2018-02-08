import React, { Component } from 'react';
import { Link } from 'react-router';

import emojis from './emojis';

import Feature from '../Feature';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emoji: emojis[Math.floor(Math.random()*emojis.length)]
    }
   }

   handleClick(e) {
     e.preventDefault();
     this.setState({
       emoji: emojis[Math.floor(Math.random()*emojis.length)]
     });
   }

  render() {
    return (
      <footer id="Footer" className="bt b--black-05 bg-white bg-dot-grid pt0-l pt4">
        <div className="w-90-ns w-80 center flex justify-between items-center-l flex-row-l flex-column pv2-l">
          <div className="flex-auto-l flex-column order-1-l order-2 mb3 mt0">
            <p className="f1-l f2 lh-subtitle tracked-tiny">
              <span className="db">{this.state.emoji}</span>
              <a className="dib link underline bg-text-clip shine fw6 f3 mt4" href="mailto:hi@cortes.us">hi@cortes.us</a>
            </p>
            <span onClick={this.handleClick.bind(this)} className="f6 ttu tracked fw8 pointer dim">
              more pls
            </span>
            <p className="black-30 f7">© 2018 Dennis Cortés</p>
          </div>
          <div className="order-2-l order-1 w-50-l tr-l">
            <div>
              <Feature
                href="https://twitter.com/fromcortes"
                name="Twitter" />
              <Feature
                href="https://instagram.com/fromcortes"
                name="Instagram" />
              <Feature
                href="https://dribbble.com/fromcortes"
                name="Dribbble" />
              <Feature
                href="https://github.com/fromcortes"
                name="Github" />
              <Feature
                href="https://open.spotify.com/user/hswlc8mdk5gxobfmshmki9gau?si=15BRL5VGRGydOG5YZUDxyg"
                name="Spotify" />
              <Feature
                href="https://twitch.tv/fromcortes"
                name="Twitch" />
              <Feature
                href="https://fromcortes.tumblr.com"
                name="Tumblr" />
              <Feature
                href="https://unsplash.com/@cortes"
                name="Unsplash" />
              <Feature
                href="https://ello.co/crts"
                name="Ello" />
              <Feature
                href="https://www.last.fm/user/fromcortes"
                name="Last.fm" />
            </div>
            {/* <ul className="list pl0 mt4">
              <li className="dib mr3">
                <Link to="/wishlist" className="f6 fw6 hover-bg-black-20 br2 up link black bg-animate pa2">
                  Wishlist
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
