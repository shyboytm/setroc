import React, { Component } from 'react';

import Button from '../../components/Button';
import H from '../../components/H';

class App extends Component {
  render() {

    const hm08Artwork = require("../../img/hm-08-album-artwork.png");
    const hm07Artwork = require("../../img/hm-07-album-artwork.png");
    const hm06Artwork = require("../../img/hm-06-album-artwork.png");
    const hm05Artwork = require("../../img/hm-05-album-artwork.png");
    const hm04Artwork = require("../../img/hm-04-album-artwork.png");
    const vertintroArtwork = require("../../img/vertintro-cover.png");
    const hm03Artwork = require("../../img/hm-03-album-artwork.png");
    const hm02Artwork = require("../../img/hm-02-album-artwork.png");
    const hm01Artwork = require("../../img/hm-01-album-artwork.png");

    return (
      <div id="albums" className="blur center mw9 pa4-ns pa3">
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

        <a href="https://songwhip.com/album/cordio/hm-08" className="album dib fl link pl4-ns mb4 pointer w-25-l w-33-m w-100">
          <img src={hm08Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white shadow up" />
          <div className="tl">
            <H size={1}>HM-08</H>
            <a href="https://songwhip.com/album/cordio/hm-08" className="black-50 dib link hover-light-purple mb4 right" target="blank">Stream album ↗</a>
          </div>
        </a>

        <a href="https://songwhip.com/album/cordio/hm-07" className="album dib fl link pl4-ns mb4 pointer w-25-l w-33-m w-100">
          <img src={hm07Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white shadow up" />
          <div className="tl">
            <H size={1}>HM-07</H>
            <a href="https://songwhip.com/album/cordio/hm-07" className="black-50 dib link hover-light-purple mb4 right" target="blank">Stream album ↗</a>
          </div>
        </a>

        <a href="https://songwhip.com/album/cordio/hm-06" className="album dib fl pl4-ns mb4 link pointer w-25-l w-33-m w-100">
          <img src={hm06Artwork} alt="HM-06 Album Artwork" className="ba bw2 br3 b--white shadow up" />
          <div className="tl">
            <H size={1}>HM-06</H>
            <a href="https://songwhip.com/album/cordio/hm-06" className="black-50 dib link hover-light-purple mb4 right" target="blank">Stream album ↗</a>
          </div>
        </a>

        <a href="https://songwhip.com/album/cordio/hm-05" className="album dib fl pl4-ns mb4 link pointer w-25-l w-33-m w-100">
          <img src={hm05Artwork} alt="HM-05 Album Artwork" className="ba bw2 br3 b--white shadow up" />
          <div className="tl">
            <H size={1}>HM-05</H>
            <a href="https://songwhip.com/album/cordio/hm-05" className="black-50 dib link hover-light-purple mb4 right" target="blank">Stream album ↗</a>
          </div>
        </a>

        <a href="https://songwhip.com/album/cordio/hm-04" className="album dib fl pl4-ns mb4 link pointer w-25-l w-33-m w-100">
          <img src={hm04Artwork} alt="HM-06 Album Artwork" className="ba bw2 br3 b--white shadow up" />
          <div className="tl">
            <H size={1}>HM-04</H>
            <a href="https://songwhip.com/album/cordio/hm-04" className="black-50 dib link hover-light-purple mb4 right" target="blank">Stream album ↗</a>
          </div>
        </a>

        <a href="https://songwhip.com/album/cordio/vertintro" className="album dib fl pl4-ns mb4 link pointer w-25-l w-33-m w-100">
          <img src={vertintroArtwork} alt="Vertintro Album Artwork" className="ba bw2 br3 b--white shadow up" />
          <div className="tl">
            <H size={1}>Vertintro</H>
            <a href="https://songwhip.com/album/cordio/vertintro" className="black-50 dib link hover-light-purple mb4 right" target="blank">Stream album ↗</a>
          </div>
        </a>

        <a href="https://songwhip.com/album/cordio/hm-03" className="album dib fl pl4-ns mb4 link pointer w-25-l w-33-m w-100">
          <img src={hm03Artwork} alt="HM-03 Album Artwork" className="ba bw2 br3 b--white shadow up" />
          <div className="tl">
            <H size={1}>HM-03</H>
            <a href="https://songwhip.com/album/cordio/hm-03" className="black-50 dib link hover-light-purple mb4 right" target="blank">Stream album ↗</a>
          </div>
        </a>

        <a href="https://songwhip.com/album/cordio/hm-02" className="album dib fl pl4-ns mb4 link pointer w-25-l w-33-m w-100">
          <img src={hm02Artwork} alt="HM-02 Album Artwork" className="ba bw2 br3 b--white shadow up" />
          <div className="tl">
            <H size={1}>HM-02</H>
            <a href="https://songwhip.com/album/cordio/hm-02" className="black-50 dib link hover-light-purple mb4 right" target="blank">Stream album ↗</a>
          </div>
        </a>

        <a href="https://songwhip.com/album/cordio/hm-01" className="album dib fl pl4-ns mb4 link pointer w-25-l w-33-m w-100">
          <img src={hm01Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white shadow up" />
          <div className="tl">
            <H size={1}>HM-01</H>
            <a href="https://songwhip.com/album/cordio/hm-01" className="black-50 dib link hover-light-purple mb4 right" target="blank">Stream album ↗</a>
          </div>
        </a>

      </div>
    );
  }
}

export default App;
