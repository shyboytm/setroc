import React, { Component } from 'react';

import Header from '../../Header';
import Footer from '../../Footer';

class Livestream extends Component {
  render() {
    return (
      <div id="Livestream" className="h-100 bg-black white">
        <Header />
        <div className="w-100 center pt5-l pv3 cf">
          <div className="db-l dn w-100 center pv3 bg-black ph4-l ph3 cf">
            <div className="w-60-l w-100 fl dib pv2 mb0-l mb2">
              <p className="white-70 lh-copy mv1-l pt1-l mv0">I stream my work and sometimes gaming here T, W, and Th at 7:30PM CST.</p>
            </div>
            <div className="w-40-l w-100 fl dib pv2 mt1">
              <a className="f6 link dim br2 ph3 pv2 dib white bg-purple fr-l fn ttu b tracked tc" href="https://twitch.tv/cortesarts">Watch on Twitch</a>
            </div>
          </div>
          <div className="dn-l db w-90 center mb5">
            <p className="f4 lh-subtitle white mb4 tc">
              On mobile? I recommend watching from the Twitch app for a better experience
            </p>
            <div className="w-50-l w-100 tc dib">
              <a className="f6 link dim br2 ph3 pv2 dib white bg-purple fr-l fn ttu b tracked tc" href="https://twitch.tv/cortesarts">Watch on Twitch</a>
            </div>
          </div>
          <div className="db-l dn w-70-l w-100 h0 fl relative pb-45">
            <iframe
              className="absolute w-100 h-100 top-0 left-0"
              src="https://player.twitch.tv/?channel=cortesarts"
              frameborder="0"
              allowfullscreen="true"
              scrolling="no">
            </iframe>
          </div>
          <div className="db-l dn w-30-l w-100 fr-l fl h0 relative pb-45">
            <iframe
              className="absolute w-100 h-100 top-0 left-0 fr-l fl"
              frameorder="0"
              scrolling="yes"
              id="chat_embed"
              src="http://www.twitch.tv/cortesarts/chat">
            </iframe>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Livestream;
