import React, { Component } from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';
import H from '../../components/H';
import Item from '../../components/Item';

class App extends Component {
  render() {

    const hm07Artwork = require("../../img/hm-07-album-artwork.png");
    const hm06Artwork = require("../../img/hm-06-album-artwork.png");
    const hm05Artwork = require("../../img/hm-05-album-artwork.png");

    return (
      <div className="blur center mw9 pa4-ns pa3">

        <Card size={1} title="Latest Release">
          <ul className="list pl0">
            <Item type="no spacing">
              <div className="bb b--black-10 flex flex-row-l flex-column items-center justify-between pv4">
                <img src={hm07Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white h5 shadow w5" />
                <div className="black-50 mt2 mb3">
                  <H size={1}>HM-07</H>
                  <span className="mr2 mt2">7 Track EP</span>
                  <span className="ml2">Aug 9 2019</span>
                </div>
                <div className="flex flex-wrap items-center mt3">
                  <a href="https://open.spotify.com/album/4dQmPWVGrqzVnI5SWGiuv8?si=7iUWADp2TZib1uZU89mjOg" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/spotify/626262/30' alt='Listen on Spotify'  />
                  </a>
                  <a href="https://music.apple.com/us/album/hm-07/1474473094" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/apple/626262/30' alt='Listen on Apple Music'  />
                  </a>
                  <a href="https://cordio.bandcamp.com/album/hm-07" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/bandcamp/626262/30' alt='View on Bandcamp'  />
                  </a>
                  <a href="https://soundcloud.com/cordio/sets/hm-07" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/soundcloud/626262/30' alt='Listen on Soundcloud'  />
                  </a>
                  <a href="https://play.google.com/store/music/album/Cordio_HM_07?id=Bicpqhvumln4imb5agpqisezcmy&hl=en_US" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/googleplay/626262/30' alt='Listen on Google Play'  />
                  </a>
                  <a href="https://amzn.to/31oJFZG" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/amazon/626262/30' alt='Listen on Amazon'  />
                  </a>
                </div>
              </div>
            </Item>

            <Item>
              <div className="bb b--black-10 flex flex-row-l flex-column items-center justify-between pv4">
                <img src={hm06Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white h5 shadow w5" />
                <div className="black-50 mt2 mb3">
                  <H size={1}>HM-06</H>
                  <span className="mr2 mt2">6 Track EP</span>
                  <span className="ml2">Jun 7 2019</span>
                </div>
                <div className="flex flex-wrap items-center mt3">
                  <a href="https://open.spotify.com/album/4dQmPWVGrqzVnI5SWGiuv8?si=7iUWADp2TZib1uZU89mjOg" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/spotify/626262/30' alt='Listen on Spotify'  />
                  </a>
                  <a href="https://music.apple.com/us/album/hm-07/1474473094" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/apple/626262/30' alt='Listen on Apple Music'  />
                  </a>
                  <a href="https://cordio.bandcamp.com/album/hm-07" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/bandcamp/626262/30' alt='View on Bandcamp'  />
                  </a>
                  <a href="https://soundcloud.com/cordio/sets/hm-07" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/soundcloud/626262/30' alt='Listen on Soundcloud'  />
                  </a>
                  <a href="https://www.youtube.com/watch?v=1yPpIoZY3S0" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/play_circle_filled/626262/30' alt='Listen on YouTube'  />
                  </a>
                  <a href="https://play.google.com/store/music/album/Cordio_HM_07?id=Bicpqhvumln4imb5agpqisezcmy&hl=en_US" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/googleplay/626262/30' alt='Listen on Google Play'  />
                  </a>
                  <a href="https://amzn.to/31oJFZG" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/amazon/626262/30' alt='Listen on Amazon'  />
                  </a>
                </div>
              </div>
            </Item>

            <Item>
              <div className="bb b--black-10 flex flex-row-l flex-column items-center justify-between pv4">
                <img src={hm05Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white h5 shadow w5" />
                <div className="black-50 mt2 mb3">
                  <H size={1}>HM-05</H>
                  <span className="mr2 mt2">6 Track EP</span>
                  <span className="ml2">Feb 15 2019</span>
                </div>
                <div className="flex flex-wrap items-center mt3">
                  <a href="https://open.spotify.com/album/4dQmPWVGrqzVnI5SWGiuv8?si=7iUWADp2TZib1uZU89mjOg" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/spotify/626262/30' alt='Listen on Spotify'  />
                  </a>
                  <a href="https://music.apple.com/us/album/hm-07/1474473094" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/apple/626262/30' alt='Listen on Apple Music'  />
                  </a>
                  <a href="https://cordio.bandcamp.com/album/hm-07" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/bandcamp/626262/30' alt='View on Bandcamp'  />
                  </a>
                  <a href="https://soundcloud.com/cordio/sets/hm-07" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/soundcloud/626262/30' alt='Listen on Soundcloud'  />
                  </a>
                  <a href="https://www.youtube.com/watch?v=_TLf37YyBMw" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/play_circle_filled/626262/30' alt='Listen on YouTube'  />
                  </a>
                  <a href="https://play.google.com/store/music/album/Cordio_HM_07?id=Bicpqhvumln4imb5agpqisezcmy&hl=en_US" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/googleplay/626262/30' alt='Listen on Google Play'  />
                  </a>
                  <a href="https://amzn.to/31oJFZG" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/amazon/626262/30' alt='Listen on Amazon'  />
                  </a>
                </div>
              </div>
            </Item>

            <Item>
              <div className="bb b--black-10 flex flex-row-l flex-column items-center justify-between pv4">
                <img src={hm06Artwork} alt="HM-07 Album Artwork" className="ba bw2 br3 b--white h5 shadow w5" />
                <div className="black-50 mt2 mb3">
                  <H size={1}>HM-04</H>
                  <span className="mr2 mt2">6 Track EP</span>
                  <span className="ml2">Nov 8 2018</span>
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
            </Item>
          </ul>
        </Card>

      </div>
    );
  }
}

export default App;
