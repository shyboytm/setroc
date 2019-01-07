import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Feature from '../../Feature';
import Footer from '../../Footer';
import Item from '../../Item';
import Section from '../../Section';
import Title from '../../Title';

class Mentoring extends Component {
  render() {

    const pageName = "Music";
    const pageDescription = "I'm also a beat-maker and producer working under the alias Cordio mixing elements of ambient, electronic, jazz, lo-fi, and hip-hop music genres";

    const hm04 = require("../../../img/music/hm-04-vinyl.png");
    const vertintro = require("../../../img/music/vertintro-vinyl.png");
    const hm03 = require("../../../img/music/hm-03-vinyl.png");
    const hm02 = require("../../../img/music/hm-02-vinyl.png");
    const hm01 = require("../../../img/music/hm-01-vinyl.png");

    return (
      <div id={pageName} className="black pt4-l">

        <Helmet>
          <title>Dennis Cortés - {pageName} 🥁</title>
          <meta name="description" content={pageDescription} />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@cordiofm"/>
          <meta name="twitter:creator" content="@cordiofm"/>
          <meta name="twitter:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content="https://www.cortes.us/images/hm-01-by-cordio.png"/>
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.cortes.us/${pageName}`} />
          <meta property="og:image" content="https://www.cortes.us/images/hm-01-by-cordio.png"/>
        </Helmet>

        <div className="relative">
          <div className="bg-black-10 bg-cordio cover overflow-hidden pt5 ph4 tc-ns tl z-0">
            <div className="center w-80-l w-90">
              <h1 className="blur-late f1 ttu fw8 flex items-center justify-center-ns">
                <svg id="CordioLogo" className="mr3 spin-full shadow-large" data-name="Cordio" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 401.04 401.04" height="35" width="35"><title>Cordio Logo</title><path d="M258.21,258.21c-78.31,78.31-78.31,205.27,0,283.58s205.27,78.31,283.58,0,78.31-205.27,0-283.58S336.52,179.9,258.21,258.21ZM506.34,506.34,293.66,293.66A150.39,150.39,0,0,1,506.34,506.34Z" transform="translate(-199.48 -199.48)"/></svg>
                Cordio
              </h1>
              <p className="center fw5 f4 lh-subtitle measure black-60 mt0 mb4" style={{letterSpacing: 0.8 + "px"}}>
                {pageDescription}
              </p>
            </div>
            <div className="db pb6-l pb4-m pb3">
              <Feature
                href="https://cordio.bandcamp.com"
                name="Bandcamp" />
              <Feature
                href="https://twitter.com/cordiofm"
                name="Twitter" />
              <Feature
                href="https://instagram.com/cordiofm"
                name="Instagram" />
              <Feature
                href="https://open.spotify.com/artist/75jwCgOQHHq1qQAJ2dqoul?si=bq2qfTDDTNWORYgxuVYhDg"
                name="Spotify" />
              <Feature
                href="https://soundcloud.com/cordio/tracks"
                name="Soundcloud" />
              <Feature
                href="https://youtube.com/cortesarts"
                name="Youtube" />
              <Feature
                href="https://www.last.fm/user/fromcortes"
                name="Last.fm" />
            </div>

            <div className="pv5 overflow-hidden tl w-100">
              <img src={hm04} className="animated fadeInUp fl-l w-60-l w-100" />
              <div className="fl-l center w-40-l w-75-m w-100">
                <span className="bg-blue br2 ph2 pv1 ttu f6 fw5 tracked white">
                  New
                </span>
                <h3 className="animated blur-late f1-l f2 mr3 mb3 mt4 black">
                  HM-04
                </h3>
                <span className="db fw6 f6 mb3 ttu tracked-tiny black-60">Nov 8 2018 · 6 track EP · 16 min</span>
                <p className="measure f5-ns f6 black-60 pr5-l">
                  HM-04 is a reflection on anxiety, depression, and relationships in my life wrapped
                  in a mix of different styles and moods on 6 tracks. My fifth full EP album release as Cordio.
                </p>
                <h4 className="bg-text-clip fw6 shine black">Places to Listen to HM-04</h4>
                <div className="center flex flex-wrap w-100">
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
            </div>
          </div>

            <div className="bg-black-10 pv5 overflow-hidden tl w-100">
              <div className="center w-75-ns w-90">
                <img src={vertintro} className="animated fadeInUp fl-l w-60-l w-100" />
                <div className="fl-l center w-40-l w-100">
                  <h3 className="animated blur-late f1-l f2 mr3 mb3 black">
                    Vertintro
                  </h3>
                  <span className="db fw6 f6 mb3 ttu tracked-tiny black-60">Jul 18 2018 · 5 track EP · 23 min</span>
                  <h4 className="bg-text-clip fw6 shine black">Places to Listen to Vertintro</h4>
                  <div className="center flex flex-wrap w-100">
                    <a href="https://goo.gl/Tz1msM" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                      <img src='https://icon.now.sh/spotify/626262/30' alt='Listen on Spotify'  />
                    </a>
                    <a href="https://goo.gl/q2i7LK" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                      <img src='https://icon.now.sh/apple/626262/30' alt='Listen on Apple Music'  />
                    </a>
                    <a href="https://goo.gl/RLfsMG" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                      <img src='https://icon.now.sh/bandcamp/626262/30' alt='View on Bandcamp'  />
                    </a>
                    <a href="https://goo.gl/BXmkBC" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                      <img src='https://icon.now.sh/soundcloud/626262/30' alt='Listen on Soundcloud'  />
                    </a>
                    <a href="https://www.youtube.com/cortesarts" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                      <img src='https://icon.now.sh/play_circle_filled/626262/30' alt='Listen on YouTube'  />
                    </a>
                    <a href="https://goo.gl/3G1LvS" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                      <img src='https://icon.now.sh/googleplay/626262/30' alt='Listen on Google Play'  />
                    </a>
                    <a href="https://amzn.to/2LxWzwX" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                      <img src='https://icon.now.sh/amazon/626262/30' alt='Listen on Amazon'  />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          <div className="bg-black-10 pv5 overflow-hidden tl w-100">
            <div className="center w-75-ns w-90">
              <img src={hm03} className="animated fadeInUp fl-l w-60-l w-100" />
              <div className="fl-l center w-40-l w-100">
                <h3 className="animated blur-late f1-l f2 mr3 mb3 black">
                  HM-03
                </h3>
                <span className="db fw6 f6 mb3 ttu tracked-tiny black-60">Jul 05 2018 · 6 track EP · 16 min</span>
                <h4 className="bg-text-clip fw6 shine black">Places to Listen to HM-03</h4>
                <div className="center flex flex-wrap w-100">
                  <a href="https://goo.gl/urBm1U" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/spotify/626262/30' alt='Listen on Spotify'  />
                  </a>
                  <a href="https://goo.gl/8x1LwQ" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/apple/626262/30' alt='Listen on Apple Music'  />
                  </a>
                  <a href="https://goo.gl/Ct5YDz" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/bandcamp/626262/30' alt='View on Bandcamp'  />
                  </a>
                  <a href="https://soundcloud.com/cordio/tracks" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/soundcloud/626262/30' alt='Listen on Soundcloud'  />
                  </a>
                  <a href="https://youtu.be/Iz5YgHwdbgc" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/play_circle_filled/626262/30' alt='Listen on YouTube'  />
                  </a>
                  <a href="https://goo.gl/7Gd2cq" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/googleplay/626262/30' alt='Listen on Google Play'  />
                  </a>
                  <a href="https://amzn.to/2zcaUO1" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/amazon/626262/30' alt='Listen on Amazon'  />
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-black-10 pv5 overflow-hidden w-100">
            <div className="center w-75-ns w-90">
              <img src={hm02} className="animated fadeInUp fl-l w-60-l w-100" />
              <div className="fl-l center w-40-l w-100">
                <h3 className="animated blur-late f1-l f2 mr3 mb3 black">
                  HM-02
                </h3>
                <span className="db fw6 f6 mb3 ttu tracked-tiny black-60">Apr 20 2018 · 8 track EP · 21 min</span>
                <h4 className="bg-text-clip fw6 shine black">Places to Listen to HM-02</h4>
                <div className="center flex flex-wrap w-100">
                  <a href="https://goo.gl/1MoEx6" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/spotify/626262/30' alt='Listen on Spotify'  />
                  </a>
                  <a href="https://goo.gl/G4jUsc" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/apple/626262/30' alt='Listen on Apple Music'  />
                  </a>
                  <a href="https://goo.gl/TeKNaw" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/bandcamp/626262/30' alt='View on Bandcamp'  />
                  </a>
                  <a href="https://soundcloud.com/cordio/tracks" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/soundcloud/626262/30' alt='Listen on Soundcloud'  />
                  </a>
                  <a href="" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/play_circle_filled/626262/30' alt='Listen on YouTube'  />
                  </a>
                  <a href="https://goo.gl/xqy1J4" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/googleplay/626262/30' alt='Listen on Google Play'  />
                  </a>
                  <a href="https://amzn.to/2qOKtYh" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/amazon/626262/30' alt='Listen on Amazon'  />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black-10 pv5 overflow-hidden w-100">
            <div className="center w-75-ns w-90">
              <img src={hm01} className="animated fadeInUp fl-l w-60-l w-100" />
              <div className="fl-l center w-40-l w-100">
                <h3 className="animated blur f1-l f2 mr3 mb3 black">
                  HM-01
                </h3>
                <span className="db fw6 f6 mb3 ttu tracked-tiny black-60">Mar 1 2018 · 5 track EP · 15 min</span>
                <h4 className="bg-text-clip fw6 shine black">Places to Listen to HM-01</h4>
                <div className="center flex flex-wrap w-100">
                  <a href="https://goo.gl/DGeFCX" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/spotify/626262/30' alt='Listen on Spotify'  />
                  </a>
                  <a href="https://goo.gl/C4dGxJ" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/apple/626262/30' alt='Listen on Apple Music'  />
                  </a>
                  <a href="https://cordio.bandcamp.com/album/hm-01" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/bandcamp/626262/30' alt='View on Bandcamp'  />
                  </a>
                  <a href="https://soundcloud.com/cordio/hm-01" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/soundcloud/626262/30' alt='Listen on Soundcloud'  />
                  </a>
                  <a href="https://youtu.be/Djd0VbScnPo" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/play_circle_filled/626262/30' alt='Listen on YouTube'  />
                  </a>
                  <a href="https://goo.gl/khpJDg" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/googleplay/626262/30' alt='Listen on Google Play'  />
                  </a>
                  <a href="http://amzn.to/2GNRqyd" target="_blank" rel="nofollow" className="ba bg-animate b--black-10 br2 flex hover-bg-black-10 items-center justify-center link mb2 mr2 pa3 black">
                    <img src='https://icon.now.sh/amazon/626262/30' alt='Listen on Amazon'  />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Mentoring;
