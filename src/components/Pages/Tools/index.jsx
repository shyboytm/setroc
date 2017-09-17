import React, { Component } from 'react';

import Footer from '../../Footer';
import Item from '../../Item';
import Title from '../../Title';

class Books extends Component {
  render() {

    const macBookPro    = require('../../../img/tools/setup/macbook-pro-13-inch.jpg');
    const roostStand    = require('../../../img/tools/setup/roost-laptop-stand.jpg');
    const magicKeyboard = require('../../../img/tools/setup/apple-magic-keyboard.jpg');
    const keyboardCover = require('../../../img/tools/setup/mosiso-keyboard-cover.jpg');
    const mouseCover    = require('../../../img/tools/setup/cosmos-mouse-cover.jpg');
    const magicMouse    = require('../../../img/tools/setup/apple-magic-mouse.png');
    const iPadPro       = require('../../../img/tools/setup/ipad-pro.jpg');

    return (
      <div id="Tools" className="animated fadeIn black">

        <div className="w-75-ns w-100 center mv5-ns mv4 ph0-ns ph3 z-0 tc">
          <h1 className="f2-ns f3 fw4 lh-title leitura">Tools</h1>
          <p className="fw4 lh-copy center measure black-60">
            These are the tools I use on a daily basis for work and life.
            Everything from apps I use to games I play. Enjoy!
          </p>
          <Title title="Last Updated Sep. 28th" />
          {/* Shortcuts */}
          <ul className="list ph0 pv4-ns pv3">
            <li className="dib mr3">
              <a href="#Setup" target="_blank" rel="nofollow" className="items-center flex f6 fw4 mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,1.0)" width="20" height="20" viewBox="0 0 28 18">
                  <title>Laptop Custom Icon</title>
                  <path d="M27,22V8a2,2,0,0,0-2-2H7A2,2,0,0,0,5,8V22H2v1a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V22ZM8,9H24V20H8Z" transform="translate(-2 -6)"/>
                </svg>
                Setup
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Setup" target="_blank" rel="nofollow" className="items-center flex f6 fw4 mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,1.0)" width="18" height="18" viewBox="0 0 16 26">
                  <title>Backpack Custom Icon</title>
                  <path d="M19,6.59V6a3,3,0,0,0-6,0v.59A8,8,0,0,0,8,14V27a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V14A8,8,0,0,0,19,6.59ZM14,6a2,2,0,0,1,4,0v.26a7.76,7.76,0,0,0-4,0Zm-1,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1Zm9,11H20v2a1,1,0,0,1-2,0V23H10V21H22Z" transform="translate(-8 -3)"/>
                </svg>
                Every Day
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Setup" target="_blank" rel="nofollow" className="items-center flex f6 fw4 mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,1.0)" width="18" height="18" viewBox="0 0 28 28">
                  <title>App Web Custom Icon</title>
                  <path d="M22,16a6,6,0,1,1-6-6A6,6,0,0,1,22,16Zm7.12-2.12a3,3,0,1,0,0,4.24A3,3,0,0,0,29.12,13.88ZM2.88,18.12a3,3,0,1,0,0-4.24A3,3,0,0,0,2.88,18.12ZM21.59,7.59a2,2,0,1,0,2.83,0A2,2,0,0,0,21.59,7.59Zm-14,14a2,2,0,1,0,2.83,0A2,2,0,0,0,7.59,21.59Zm16.83,0a2,2,0,1,0,0,2.83A2,2,0,0,0,24.41,21.59Zm-14-14a2,2,0,1,0,0,2.83A2,2,0,0,0,10.41,7.59Zm3.46-4.71a3,3,0,1,0,4.24,0A3,3,0,0,0,13.88,2.88Zm4.24,26.24a3,3,0,1,0-4.24,0A3,3,0,0,0,18.12,29.12Z" transform="translate(-2 -2)"/>
                </svg>
                Apps
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Setup" target="_blank" rel="nofollow" className="items-center flex f6 fw4 mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,1.0)" width="18" height="18" viewBox="0 0 26.7 25">
                  <title>Gaming Custom Icon</title>
                  <path d="M29.3,23l-1.89-11.5a3.39,3.39,0,0,0-2.73-2.74h0a48.53,48.53,0,0,0-17.36,0h0a3.39,3.39,0,0,0-2.73,2.74L2.7,23A3.39,3.39,0,0,0,9,25.29l1.38-2.93a3,3,0,0,1,2.13-1.66h0a17.71,17.71,0,0,1,7,0,3,3,0,0,1,2.11,1.63l1.43,3A3.39,3.39,0,0,0,29.3,23ZM13,14.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,1,.5.5Zm7.5-.5A1.5,1.5,0,1,1,22,12.5,1.5,1.5,0,0,1,20.5,14Zm4,4A1.5,1.5,0,1,1,26,16.5,1.5,1.5,0,0,1,24.5,18Zm-8-11h-1a.5.5,0,0,1-.5-.5V3a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1V6.5A.5.5,0,0,1,16.5,7Z" transform="translate(-2.65 -2)"/>
                </svg>
                Gaming
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Setup" target="_blank" rel="nofollow" className="items-center flex f6 fw4 mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,1.0)" width="18" height="18" viewBox="0 0 28 26">
                  <title>Coffee Custom Icon</title>
                  <path d="M30,26a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V25H30ZM28,8a1,1,0,0,1,1,1v3a6,6,0,0,1-5,5.91V18a5,5,0,0,1-5,5H11a5,5,0,0,1-5-5V9A1,1,0,0,1,7,8Zm-1,2H24v5.86A4,4,0,0,0,27,12ZM13,6.5V3a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V6.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,13,6.5Zm6,0V4a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V6.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,19,6.5Z" transform="translate(-2 -2)"/>
                </svg>
                Coffee
              </a>
            </li>
          </ul>
        </div>

        <div className="w-60-l w-90 center mv5">
            {/* Setup */}
            <div id="Setup" className="tl-ns tc bb b--black-10 pb3 mb4 flex flex-row-ns flex-column items-center justify-between">
              <div>
                <h2 className="f3-ns f4 fw4 lh-title leitura mt0 mb2">
                  Setup
                </h2>
                <p className="f6 fw4 lh-copy measure-narrow black-60">
                  Gear and furniture I use on the go and at my home office
                </p>
              </div>
              <span className="lh-copy f2-ns f4 fw6 mb0-ns mb3">
                12
              </span>
            </div>
            <div className="content-end flex flex-wrap">
              <Item
                href="https://www.apple.com/macbook-pro"
                image={macBookPro}
                title='MacBook Pro 13"'
                description="8GB RAM, 128GB SSD, 2.3 GHz i5" />
              <Item
                href="http://amzn.to/2jxqf42"
                image={roostStand}
                title="Roost Laptop Stand"
                description="Stand for improving posture" />
              <Item
                href="http://amzn.to/2xb6Om8"
                image={magicKeyboard}
                title="Apple Magic Keyboard 2"
                description="When using the Roost stand" />
              <Item
                href="http://amzn.to/2wxN7kQ"
                image={keyboardCover}
                title="Mosiso Keyboard Cover"
                description="All black everything ツ" />
              <Item
                href="http://amzn.to/2wy4T7H"
                image={magicMouse}
                title="Apple Magic Mouse 2"
                description="When using the Roost stand" />
              <Item
                href="http://amzn.to/2xbQUIw"
                image={mouseCover}
                title="Cosmos Mouse Cover"
                description="All black everything ツ" />
              <Item
                href="https://www.apple.com/ipad-pro"
                image={iPadPro}
                title='iPad Pro 12.9"'
                description="For illustration, research, writing, and wireframing" />
            </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Books;
