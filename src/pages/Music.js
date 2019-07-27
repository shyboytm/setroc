import React, { Component } from 'react';

import Button from '../components/Button';
import Card from '../components/Card';
import H from '../components/H';
import ImageCard from '../components/ImageCard';
import Item from '../components/Item';

class App extends Component {
  render() {

    const hm07Artwork = require("../img/hm-07-album-artwork.png");
    const hm06Audio = require("../music/HM-06.mp3");
    const hm06Artwork = require("../img/hm-06-album-artwork.png");

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

        <div id="list" className="content-end flex flex-wrap">

        <Card size={3} title="HM-07" buttonText="Latest">
            <div style={{"height":"90%", "width":"90%"}} className="ba b--white bw2 bg-white br3 center mt3 mb4 pa0 shadow-colored">
              <img src={hm07Artwork} alt="Album artwork for HM-06 by Cordio" className="br2 db"/>
            </div>
          <audio className="w-100" controls controlsList="nodownload" preload="auto">
            <source src={hm06Audio} type="audio/mpeg" />
          </audio>
          <ol className="list pl0 pv0">
            <Item type="no spacing">
              <div className="flex items-center justify-between pb2">
                <div>
                  <span className="black-40 mr3">1</span>
                  Neither One
                </div>
                <div>
                  <span className="black-40 mr3">0:00</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">2</span>
                  Found & Lost
                </div>
                <div>
                  <span className="black-40 mr3">2:38</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">3</span>
                  Casita
                </div>
                <div>
                  <span className="black-40 mr3">5:18</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">4</span>
                  Waterfall
                </div>
                <div>
                  <span className="black-40 mr3">7:25</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">5</span>
                  Feels Good
                </div>
                <div>
                  <span className="black-40 mr3">10:07</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">6</span>
                  Untold Promise
                </div>
                <div>
                  <span className="black-40 mr3">13:15</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pt2">
                <div>
                  <span className="black-40 mr3">7</span>
                  Mamita (Bonus Track)
                </div>
                <div>
                  <span className="black-40 mr3">13:15</span>
                </div>
              </div>
            </Item>
          </ol>
        </Card>

        <Card size={3} title="HM-06">
          <div style={{"height":"90%", "width":"90%"}} className="ba b--white bw2 bg-white br3 center mt3 mb4 pa0 shadow-colored">
            <img src={hm06Artwork} alt="Album artwork for HM-06 by Cordio" className="br2 db"/>
          </div>
          <audio className="w-100" controls controlsList="nodownload" preload="auto">
            <source src={hm06Audio} type="audio/mpeg" />
          </audio>
          <ol className="list pl0 pv0">
            <Item type="no spacing">
              <div className="flex items-center justify-between pb2">
                <div>
                  <span className="black-40 mr3">1</span>
                  Precautionary
                </div>
                <div>
                  <span className="black-40 mr3">0:00</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">2</span>
                  Low Fidelity
                </div>
                <div>
                  <span className="black-40 mr3">2:38</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">3</span>
                  Héroe
                </div>
                <div>
                  <span className="black-40 mr3">5:18</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">4</span>
                  Strength
                </div>
                <div>
                  <span className="black-40 mr3">7:25</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">5</span>
                  Kalio
                </div>
                <div>
                  <span className="black-40 mr3">10:07</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pt2">
                <div>
                  <span className="black-40 mr3">6</span>
                  Not a Dream
                </div>
                <div>
                  <span className="black-40 mr3">13:15</span>
                </div>
              </div>
            </Item>
          </ol>
        </Card>

        <Card size={3} title="HM-06">
          <div style={{"height":"90%", "width":"90%"}} className="ba b--white bw2 bg-white br3 center mt3 mb4 pa0 shadow-colored">
            <img src={hm06Artwork} alt="Album artwork for HM-06 by Cordio" className="br2 db"/>
          </div>
          <audio className="w-100" controls controlsList="nodownload" preload="auto">
            <source src={hm06Audio} type="audio/mpeg" />
          </audio>
          <ol className="list pl0 pv0">
            <Item type="no spacing">
              <div className="flex items-center justify-between pb2">
                <div>
                  <span className="black-40 mr3">1</span>
                  Precautionary
                </div>
                <div>
                  <span className="black-40 mr3">0:00</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">2</span>
                  Low Fidelity
                </div>
                <div>
                  <span className="black-40 mr3">2:38</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">3</span>
                  Héroe
                </div>
                <div>
                  <span className="black-40 mr3">5:18</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">4</span>
                  Strength
                </div>
                <div>
                  <span className="black-40 mr3">7:25</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">5</span>
                  Kalio
                </div>
                <div>
                  <span className="black-40 mr3">10:07</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pt2">
                <div>
                  <span className="black-40 mr3">6</span>
                  Not a Dream
                </div>
                <div>
                  <span className="black-40 mr3">13:15</span>
                </div>
              </div>
            </Item>
          </ol>
        </Card>

        <Card size={3} title="HM-06">
          <div style={{"height":"90%", "width":"90%"}} className="ba b--white bw2 bg-white br3 center mt3 mb4 pa0 shadow-colored">
            <img src={hm06Artwork} alt="Album artwork for HM-06 by Cordio" className="br2 db"/>
          </div>
          <audio className="w-100" controls controlsList="nodownload" preload="auto">
            <source src={hm06Audio} type="audio/mpeg" />
          </audio>
          <ol className="list pl0 pv0">
            <Item type="no spacing">
              <div className="flex items-center justify-between pb2">
                <div>
                  <span className="black-40 mr3">1</span>
                  Precautionary
                </div>
                <div>
                  <span className="black-40 mr3">0:00</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">2</span>
                  Low Fidelity
                </div>
                <div>
                  <span className="black-40 mr3">2:38</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">3</span>
                  Héroe
                </div>
                <div>
                  <span className="black-40 mr3">5:18</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">4</span>
                  Strength
                </div>
                <div>
                  <span className="black-40 mr3">7:25</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">5</span>
                  Kalio
                </div>
                <div>
                  <span className="black-40 mr3">10:07</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pt2">
                <div>
                  <span className="black-40 mr3">6</span>
                  Not a Dream
                </div>
                <div>
                  <span className="black-40 mr3">13:15</span>
                </div>
              </div>
            </Item>
          </ol>
        </Card>

        <Card size={3} title="HM-06">
          <div style={{"height":"90%", "width":"90%"}} className="ba b--white bw2 bg-white br3 center mt3 mb4 pa0 shadow-colored">
            <img src={hm06Artwork} alt="Album artwork for HM-06 by Cordio" className="br2 db"/>
          </div>
          <audio className="w-100" controls controlsList="nodownload" preload="auto">
            <source src={hm06Audio} type="audio/mpeg" />
          </audio>
          <ol className="list pl0 pv0">
            <Item type="no spacing">
              <div className="flex items-center justify-between pb2">
                <div>
                  <span className="black-40 mr3">1</span>
                  Precautionary
                </div>
                <div>
                  <span className="black-40 mr3">0:00</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">2</span>
                  Low Fidelity
                </div>
                <div>
                  <span className="black-40 mr3">2:38</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">3</span>
                  Héroe
                </div>
                <div>
                  <span className="black-40 mr3">5:18</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">4</span>
                  Strength
                </div>
                <div>
                  <span className="black-40 mr3">7:25</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">5</span>
                  Kalio
                </div>
                <div>
                  <span className="black-40 mr3">10:07</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pt2">
                <div>
                  <span className="black-40 mr3">6</span>
                  Not a Dream
                </div>
                <div>
                  <span className="black-40 mr3">13:15</span>
                </div>
              </div>
            </Item>
          </ol>
        </Card>

        <Card size={3} title="HM-03">
          <div style={{"height":"90%", "width":"90%"}} className="ba b--white bw2 bg-white br3 center mt3 mb4 pa0 shadow-colored">
            <img src={hm06Artwork} alt="Album artwork for HM-06 by Cordio" className="br2 db"/>
          </div>
          <audio className="w-100" controls controlsList="nodownload" preload="auto">
            <source src={hm06Audio} type="audio/mpeg" />
          </audio>
          <ol className="list pl0 pv0">
            <Item type="no spacing">
              <div className="flex items-center justify-between pb2">
                <div>
                  <span className="black-40 mr3">1</span>
                  Precautionary
                </div>
                <div>
                  <span className="black-40 mr3">0:00</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">2</span>
                  Low Fidelity
                </div>
                <div>
                  <span className="black-40 mr3">2:38</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">3</span>
                  Héroe
                </div>
                <div>
                  <span className="black-40 mr3">5:18</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">4</span>
                  Strength
                </div>
                <div>
                  <span className="black-40 mr3">7:25</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">5</span>
                  Kalio
                </div>
                <div>
                  <span className="black-40 mr3">10:07</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pt2">
                <div>
                  <span className="black-40 mr3">6</span>
                  Not a Dream
                </div>
                <div>
                  <span className="black-40 mr3">13:15</span>
                </div>
              </div>
            </Item>
          </ol>
        </Card>

        <Card size={3} title="HM-02">
          <div style={{"height":"90%", "width":"90%"}} className="ba b--white bw2 bg-white br3 center mt3 mb4 pa0 shadow-colored">
            <img src={hm06Artwork} alt="Album artwork for HM-06 by Cordio" className="br2 db"/>
          </div>
          <audio className="w-100" controls controlsList="nodownload" preload="auto">
            <source src={hm06Audio} type="audio/mpeg" />
          </audio>
          <ol className="list pl0 pv0">
            <Item type="no spacing">
              <div className="flex items-center justify-between pb2">
                <div>
                  <span className="black-40 mr3">1</span>
                  Gem Mint
                </div>
                <div>
                  <span className="black-40 mr3">0:00</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">2</span>
                  Escapay
                </div>
                <div>
                  <span className="black-40 mr3">2:38</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">3</span>
                  Double Sided Reverse
                </div>
                <div>
                  <span className="black-40 mr3">5:18</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">4</span>
                  Fly
                </div>
                <div>
                  <span className="black-40 mr3">7:25</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">5</span>
                  Okay you're Right
                </div>
                <div>
                  <span className="black-40 mr3">10:07</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">6</span>
                  Lost Noise
                </div>
                <div>
                  <span className="black-40 mr3">13:15</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">7</span>
                  Only Around You
                </div>
                <div>
                  <span className="black-40 mr3">13:15</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pt2">
                <div>
                  <span className="black-40 mr3">8</span>
                  Carrier Decay
                </div>
                <div>
                  <span className="black-40 mr3">13:15</span>
                </div>
              </div>
            </Item>
          </ol>
        </Card>

        <Card size={3} title="HM-01">
          <div style={{"height":"90%", "width":"90%"}} className="ba b--white bw2 bg-white br3 center mt3 mb4 pa0 shadow-colored">
            <img src={hm06Artwork} alt="Album artwork for HM-06 by Cordio" className="br2 db"/>
          </div>
          <audio className="w-100" controls controlsList="nodownload" preload="auto">
            <source src={hm06Audio} type="audio/mpeg" />
          </audio>
          <ol className="list pl0 pv0">
            <Item type="no spacing">
              <div className="flex items-center justify-between pb2">
                <div>
                  <span className="black-40 mr3">1</span>
                  Ritual Five
                </div>
                <div>
                  <span className="black-40 mr3">0:00</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">2</span>
                  Leaving
                </div>
                <div>
                  <span className="black-40 mr3">2:38</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">3</span>
                  Still Indecisive
                </div>
                <div>
                  <span className="black-40 mr3">5:18</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">4</span>
                  Cut
                </div>
                <div>
                  <span className="black-40 mr3">7:25</span>
                </div>
              </div>
            </Item>
            <Item type="no spacing">
              <div className="bt b--black-05 flex items-center justify-between pv2">
                <div>
                  <span className="black-40 mr3">5</span>
                  Secret Rare
                </div>
                <div>
                  <span className="black-40 mr3">10:07</span>
                </div>
              </div>
            </Item>
          </ol>
        </Card>

        </div>
      </div>
    );
  }
}

export default App;
