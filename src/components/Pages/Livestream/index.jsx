import React, { Component } from 'react';

import Header from '../../Header';
import Footer from '../../Footer';

class Livestream extends Component {
  render() {
    return (
      <div id="Livestream" className="h-100 bg-black white">
        <Header />
        <div className="w-100 center pt5-l pv3 cf">
          <div className="w-70-l w-100 h0 fl relative pb-45">
            <iframe
              className="absolute w-100 h-100 top-0 left-0"
              src="https://player.twitch.tv/?channel=cortesarts"
              frameborder="0"
              allowfullscreen="true"
              scrolling="no">
            </iframe>
          </div>
          <div className="w-30-l w-100 fr-l fl h0 relative pb-45">
            <iframe
              className="absolute w-100 h-100 top-0 left-0 fr-l fl"
              frameorder="0"
              scrolling="no"
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
