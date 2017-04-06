import React, { Component } from 'react';

import Footer from '../../Footer';
import Header from '../../Header';
import HomeInfo from './HomeInfo';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="animated fadeIn">
        <Header />
        <div id="IntroCircle" className="br-100 bg-black-05 relative o-30 mt6-l mt3" />
        <div className="w-80-ns w-90 center cf relative pv5-l pb3">
          <div className="pl4-l nt8 z-0 w-60-l w-90 center">
            <h2 className="f2 fw6 black mb4 lh-title">Designer & Illustrator that <br className="dib-l dn" />Codes and Writes</h2>
            <p className="f4-ns f5 lh-subtitle black-60 measure mb4">
              I'm currently leading design at <a className="rainbow-hover link black-60" href="http://satchelhealth.com">Satchel Health</a> and building
              resources and experiences at <a className="rainbow-hover link black-60" href="http://usequarry.com">Quarry</a>. I also write for
              my weekly <a className="rainbow-hover link black-60" href="https://medium.com/the-rate-of-change">personal blog</a> and
              stream my work on <a className="rainbow-hover link black-60" href="https://twitch.tv/cortesarts">Twitch</a>.
              Email me at <a className="rainbow-hover link black-60" href="mailto:hi@cortes.us">hi@cortes.us</a> if you'd like to get in touch.
            </p>
            <p className="green mb4 db">Available for Work</p>
          </div>
        </div>
        <HomeInfo />
        <Footer />

      </div>
    );
  }
}

export default Home;
