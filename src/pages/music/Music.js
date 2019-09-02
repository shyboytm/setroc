import React, { Component } from 'react';

import Button from '../../components/Button';
import H from '../../components/H';

class App extends Component {
  render() {

    const hm07Artwork = require("../../img/hm-07-album-artwork.png");
    const hm06Artwork = require("../../img/hm-06-album-artwork.png");
    const hm05Artwork = require("../../img/hm-05-album-artwork.png");

    return (
      <div className="blur center mw9 pa4-ns pa3">
        <div className="mv5 tc">
          <svg fill="rgba(0,0,0,0.7)" version="1.1" x="0px" y="0px" height="40" viewBox="0 0 288 71.89">
            <circle cx="18" cy="17.89" r="9"/>
            <circle cx="54" cy="17.89" r="9"/>
            <circle cx="90" cy="17.89" r="9"/>
            <circle cx="126" cy="17.89" r="9"/>
            <circle cx="162" cy="17.89" r="9"/>
            <circle cx="198" cy="17.89" r="9"/>
            <circle cx="234" cy="17.89" r="9"/>
            <circle cx="270" cy="17.89" r="9"/>
            <circle cx="18" cy="53.89" r="9"/>
            <circle cx="54" cy="53.89" r="9"/>
            <circle cx="90" cy="53.89" r="9"/>
            <circle cx="126" cy="53.89" r="9"/>
            <circle cx="162" cy="53.89" r="9"/>
            <circle cx="198" cy="53.89" r="9"/>
            <circle cx="234" cy="53.89" r="9"/>
            <circle cx="270" cy="53.89" r="9"/>
          </svg>
          <p className="center black-70 f4 lh-copy measure mt4">
            I am also a music producer and beat-maker under the name Cordio. In my free time I make beat tapes and produce
            for others mixing styles of electronic, ambient, lofi, trap, and jazz together. I also art direct and create
            album covers for others. Listen to some of my latest music on any and all streaming services.
          </p>
          <div className="db mb6-l mb4-m mb3 mt5">
            <Button
              href="https://cordio.bandcamp.com"
              name="Bandcamp" />
            <Button
              href="https://open.spotify.com/artist/75jwCgOQHHq1qQAJ2dqoul?si=bq2qfTDDTNWORYgxuVYhDg"
              name="Spotify" />
            <Button
              href="https://soundcloud.com/cordio/tracks"
              name="Soundcloud" />
            <Button
              href="https://itunes.apple.com/us/artist/cordio/1353636525"
              name="Apple" />
            <Button
              href="https://youtube.com/cortesarts"
              name="Youtube" />
            <Button
              href="https://twitter.com/cordiofm"
              name="Twitter" />
            <Button
              href="https://instagram.com/cordiofm"
              name="Instagram" />
            </div>
        </div>

        <a href="/music/hm-07"className="dib fl link pl4-ns mb4 w-25-l w-33-m w-100">
          <img src={hm07Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white dim shadow" />
          <div className="tc">
            <H size={1}>HM-07</H>
            <span className="black-50 f6">Design, Direction, Composer</span>
          </div>
        </a>

        <a href="/music/hm-06"className="dib fl pl4-ns mb4 link w-25-l w-33-m w-100">
          <img src={hm06Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white dim shadow" />
          <div className="tc">
            <H size={1}>HM-06</H>
            <span className="black-50 f6">Design, Direction, Composer</span>
          </div>
        </a>

        <a href="/music/hm-06"className="dib fl pl4-ns mb4 link w-25-l w-33-m w-100">
          <img src={hm05Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white dim shadow" />
          <div className="tc">
            <H size={1}>HM-05</H>
            <span className="black-50 f6">Design, Direction, Composer</span>
          </div>
        </a>

        <a href="/music/hm-06"className="dib fl pl4-ns mb4 link w-25-l w-33-m w-100">
          <img src={hm06Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white dim shadow" />
          <div className="tc">
            <H size={1}>HM-04</H>
            <span className="black-50 f6">Design, Direction, Composer</span>
          </div>
        </a>

        <a href="/music/hm-06"className="dib fl pl4-ns mb4 link w-25-l w-33-m w-100">
          <img src={hm06Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white dim shadow" />
          <div className="tc">
            <H size={1}>Vertintro</H>
            <span className="black-50 f6">Design, Direction, Composer</span>
          </div>
        </a>

        <a href="/music/hm-06"className="dib fl pl4-ns mb4 link w-25-l w-33-m w-100">
          <img src={hm06Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white dim shadow" />
          <div className="tc">
            <H size={1}>HM-03</H>
            <span className="black-50 f6">Design, Direction, Composer</span>
          </div>
        </a>

        <a href="/music/hm-06"className="dib fl pl4-ns mb4 link w-25-l w-33-m w-100">
          <img src={hm06Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white dim shadow" />
          <div className="tc">
            <H size={1}>HM-02</H>
            <span className="black-50 f6">Design, Direction, Composer</span>
          </div>
        </a>

        <a href="/music/hm-06"className="dib fl pl4-ns mb4 link w-25-l w-33-m w-100">
          <img src={hm06Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white dim shadow" />
          <div className="tc">
            <H size={1}>HM-01</H>
            <span className="black-50 f6">Design, Direction, Composer</span>
          </div>
        </a>

      </div>
    );
  }
}

export default App;
