import React, { Component } from 'react';

import Button from '../components/Button';
import Card from '../components/Card';
import H from '../components/H';
import ImageCard from '../components/ImageCard';
import Item from '../components/Item';

class App extends Component {
  render() {

    const hm07Artwork = require("../img/hm-07-album-artwork.png");

    return (
      <div className="blur center mw9 pa4-ns pa3 bg-black-10">
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
            for others mixing styles of electronic, ambient, lofi, trap, and jazz together. Listen to some of my latest music
            on any and all streaming services.
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

        <Card size={1} title="Latest Release">
          <div className="flex flex-row-l flex-column items-center justify-between pv3">
            <img src={hm07Artwork} alt="HM-07 Album Artwork" className="h4-l h5 shadow w4-l w5" />
            <div className="black-50 mt2 mb3">
              <H size={1}>HM-07</H>
              <span className="mr2 mt2">7 Track EP</span>
              <span className="ml2">Aug 9 2019</span>
            </div>
            <div className="flex flex-wrap items-center mt3">
              <a href="https://goo.gl/5zsZJW" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                <img src='https://icon.now.sh/spotify/626262/30' alt='Listen on Spotify'  />
              </a>
              <a href="https://goo.gl/f9XpG7" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                <img src='https://icon.now.sh/apple/626262/30' alt='Listen on Apple Music'  />
              </a>
              <a href="https://goo.gl/GzqB3J" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                <img src='https://icon.now.sh/bandcamp/626262/30' alt='View on Bandcamp'  />
              </a>
              <a href="https://goo.gl/Mrm7Ax" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                <img src='https://icon.now.sh/soundcloud/626262/30' alt='Listen on Soundcloud'  />
              </a>
              <a href="https://youtu.be/x1v_CC4Cly0" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                <img src='https://icon.now.sh/play_circle_filled/626262/30' alt='Listen on YouTube'  />
              </a>
              <a href="https://goo.gl/mDptjn" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                <img src='https://icon.now.sh/googleplay/626262/30' alt='Listen on Google Play'  />
              </a>
              <a href="https://amzn.to/2D9rdM0" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                <img src='https://icon.now.sh/amazon/626262/30' alt='Listen on Amazon'  />
              </a>
            </div>
          </div>
        </Card>

      </div>
    );
  }
}

export default App;
