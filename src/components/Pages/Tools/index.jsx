import React, { Component } from 'react';

import Footer from '../../Footer';
import Item from '../../Item';
import Section from '../../Section';
import Title from '../../Title';

class Books extends Component {
  render() {

    // Setup
    const macBookPro        = require('../../../img/tools/setup/macbook-pro-13-inch.jpg');
    const roostStand        = require('../../../img/tools/setup/roost-laptop-stand.jpg');
    const magicKeyboard     = require('../../../img/tools/setup/apple-magic-keyboard.jpg');
    const keyboardCover     = require('../../../img/tools/setup/mosiso-keyboard-cover.jpg');
    const mouseCover        = require('../../../img/tools/setup/cosmos-mouse-cover.jpg');
    const magicMouse        = require('../../../img/tools/setup/apple-magic-mouse.png');
    const iPadPro           = require('../../../img/tools/setup/ipad-pro.jpg');
    const applePencil       = require('../../../img/tools/setup/apple-pencil.jpg');
    const beatsXEarphones   = require('../../../img/tools/setup/beatsx-earphones.jpg');
    const alexaEcho         = require('../../../img/tools/setup/amazon-alexa-echo.jpg');
    const alexaDot          = require('../../../img/tools/setup/amazon-alexa-dot.jpg');
    const renberget         = require('../../../img/tools/setup/renberget-ikea-chair.jpg');
    const rissla            = require('../../../img/tools/setup/rissla-ikea-mat.jpg');
    const bekant            = require('../../../img/tools/setup/bekant-ikea-desk.jpg');

    // Every Day Carry
    const iPhone7           = require('../../../img/tools/everyday/apple-iphone-7-plus.jpg');
    const totalleeCase      = require('../../../img/tools/everyday/totallee-thin-iphone-case.jpg');
    const sonyA5100         = require('../../../img/tools/everyday/sony-a5100-camera.jpg');
    const appleWatch        = require('../../../img/tools/everyday/apple-watch-series-1.jpg');
    const satechiReader     = require('../../../img/tools/everyday/satechi-usb-sd-card.jpg');
    const incaseBackpack    = require('../../../img/tools/everyday/incase-backpack.jpg');
    const gucciWallet       = require('../../../img/tools/everyday/gucci-signature-wallet.jpg');
    const simpleCard        = require('../../../img/tools/everyday/simple-bank-card.jpg');
    const finalCard         = require('../../../img/tools/everyday/final-bank-card.jpg');
    const vanguard          = require('../../../img/tools/everyday/baron-fig-vanguard.jpg');
    const fieldNotes        = require('../../../img/tools/everyday/field-notes-notebooks.jpg');

    // Apps
    const notion            = require('../../../img/tools/apps/notion-app.jpg');
    const googleChrome      = require('../../../img/tools/apps/google-chrome-app.jpg');
    const hyper             = require('../../../img/tools/apps/hyper-app.jpg');
    const atom              = require('../../../img/tools/apps/atom-app.jpg');
    const sparkMail         = require('../../../img/tools/apps/spark-mail-app.jpg');
    const slack             = require('../../../img/tools/apps/slack-app.jpg');
    const appleMusic        = require('../../../img/tools/apps/apple-music-app.jpg');
    const figma             = require('../../../img/tools/apps/figma-app.jpg');
    const sketchApp         = require('../../../img/tools/apps/sketch-app.jpg');
    const adobeIllustrator  = require('../../../img/tools/apps/adobe-illustrator-app.jpg');
    const gyroscopeApp      = require('../../../img/tools/apps/gyroscope-app.jpg');

    return (
      <div id="Tools" className="animated fadeIn black">

        <div className="w-75-ns w-100 center mv5-ns mv4 ph0-ns ph3 z-0 tc">
          <h1 className="f2-ns f3 fw4 lh-title leitura">Tools</h1>
          <p className="fw4 lh-copy center measure black-60 mb4">
            These are the tools I use on a daily basis for work and life.
            Everything from apps I use, stuff I always carry, to games I play.
            Affliliate links are used when possible to help support my free to use
            projects. Enjoy!
          </p>
          <Title title="Last Updated Sep. 28th" />
          {/* Shortcuts */}
          <ul className="list ph0 pv4-ns pv3">
            <li className="dib mr3">
              <a href="#Setup" className="items-center flex f6 fw4 mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,1.0)" width="20" height="20" viewBox="0 0 28 18">
                  <title>Laptop Custom Icon</title>
                  <path d="M27,22V8a2,2,0,0,0-2-2H7A2,2,0,0,0,5,8V22H2v1a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V22ZM8,9H24V20H8Z" transform="translate(-2 -6)"/>
                </svg>
                Setup
              </a>
            </li>
            <li className="dib mr3">
              <a href="#EveryDay" className="items-center flex f6 fw4 mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,1.0)" width="18" height="18" viewBox="0 0 16 26">
                  <title>Backpack Custom Icon</title>
                  <path d="M19,6.59V6a3,3,0,0,0-6,0v.59A8,8,0,0,0,8,14V27a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V14A8,8,0,0,0,19,6.59ZM14,6a2,2,0,0,1,4,0v.26a7.76,7.76,0,0,0-4,0Zm-1,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1Zm9,11H20v2a1,1,0,0,1-2,0V23H10V21H22Z" transform="translate(-8 -3)"/>
                </svg>
                Every Day
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Apps" className="items-center flex f6 fw4 mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,1.0)" width="18" height="18" viewBox="0 0 28 28">
                  <title>App Web Custom Icon</title>
                  <path d="M22,16a6,6,0,1,1-6-6A6,6,0,0,1,22,16Zm7.12-2.12a3,3,0,1,0,0,4.24A3,3,0,0,0,29.12,13.88ZM2.88,18.12a3,3,0,1,0,0-4.24A3,3,0,0,0,2.88,18.12ZM21.59,7.59a2,2,0,1,0,2.83,0A2,2,0,0,0,21.59,7.59Zm-14,14a2,2,0,1,0,2.83,0A2,2,0,0,0,7.59,21.59Zm16.83,0a2,2,0,1,0,0,2.83A2,2,0,0,0,24.41,21.59Zm-14-14a2,2,0,1,0,0,2.83A2,2,0,0,0,10.41,7.59Zm3.46-4.71a3,3,0,1,0,4.24,0A3,3,0,0,0,13.88,2.88Zm4.24,26.24a3,3,0,1,0-4.24,0A3,3,0,0,0,18.12,29.12Z" transform="translate(-2 -2)"/>
                </svg>
                Apps
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Gaming" className="items-center flex f6 fw4 mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,1.0)" width="18" height="18" viewBox="0 0 26.7 25">
                  <title>Gaming Custom Icon</title>
                  <path d="M29.3,23l-1.89-11.5a3.39,3.39,0,0,0-2.73-2.74h0a48.53,48.53,0,0,0-17.36,0h0a3.39,3.39,0,0,0-2.73,2.74L2.7,23A3.39,3.39,0,0,0,9,25.29l1.38-2.93a3,3,0,0,1,2.13-1.66h0a17.71,17.71,0,0,1,7,0,3,3,0,0,1,2.11,1.63l1.43,3A3.39,3.39,0,0,0,29.3,23ZM13,14.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,1,.5.5Zm7.5-.5A1.5,1.5,0,1,1,22,12.5,1.5,1.5,0,0,1,20.5,14Zm4,4A1.5,1.5,0,1,1,26,16.5,1.5,1.5,0,0,1,24.5,18Zm-8-11h-1a.5.5,0,0,1-.5-.5V3a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1V6.5A.5.5,0,0,1,16.5,7Z" transform="translate(-2.65 -2)"/>
                </svg>
                Gaming
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Coffee" className="items-center flex f6 fw4 mb3 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,1.0)" width="18" height="18" viewBox="0 0 28 26">
                  <title>Coffee Custom Icon</title>
                  <path d="M30,26a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V25H30ZM28,8a1,1,0,0,1,1,1v3a6,6,0,0,1-5,5.91V18a5,5,0,0,1-5,5H11a5,5,0,0,1-5-5V9A1,1,0,0,1,7,8Zm-1,2H24v5.86A4,4,0,0,0,27,12ZM13,6.5V3a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V6.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,13,6.5Zm6,0V4a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V6.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,19,6.5Z" transform="translate(-2 -2)"/>
                </svg>
                Coffee
              </a>
            </li>
          </ul>
        </div>

        <div className="w-80-l w-90 center mv5">
            {/* Setup */}
            <Section
              id="Setup"
              title="Setup"
              description="Gear and furniture I use on the go and at my home office"
              number="14=" />
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
              <Item
                href="https://www.apple.com/apple-pencil"
                image={applePencil}
                title="Apple Pencil"
                description="Must have tool for accompanying an iPad Pro" />
              <Item
                href="http://amzn.to/2hbbj7i"
                image={beatsXEarphones}
                title="BeatsX Earphones"
                description="My favorite bluetooth headphones. Better than AirPods" />
              <Item
                href="http://amzn.to/2xdW46z"
                image={alexaEcho}
                title="Amazon Alexa Echo"
                description="For all the home assistant needs" />
              <Item
                href="http://amzn.to/2xdzPhb"
                image={alexaDot}
                title="Amazon Alexa Dot"
                description="For controlling my Echo from my office" />
              <Item
                href="http://www.ikea.com/us/en/catalog/products/50332238"
                image={renberget}
                title="Renberget Office Chair"
                description="Cheap, but surprisingly comfortable" />
              <Item
                href="http://www.ikea.com/us/en/catalog/products/40246156/"
                image={rissla}
                title="Rissla Desk Mat"
                description="All black everything ツ" />
              <Item
                href="http://www.ikea.com/us/en/catalog/products/S19022808/"
                image={bekant}
                title="Bekant Desk"
                description="I really need a standing desk" />
            </div>

            {/* Every Day Carry */}
            <Section
              id="EveryDay"
              title="Every Day Carry"
              description="Things I carry with me every day from tech to random items"
              number="11" />
            <div className="content-end flex flex-wrap">
              <Item
                href="https://www.apple.com/macbook-pro"
                image={iPhone7}
                title="iPhone 7 Plus"
                description="Matte Black 32GB" />
              <Item
                href="http://amzn.to/2wyw6Hy"
                image={totalleeCase}
                title="Totallee Thin Case"
                description="Naked iPhone without the scratching" />
              <Item
                href="http://amzn.to/2xI1pof"
                image={sonyA5100}
                title="Sony α5100 Camera"
                description="Great quality pictures, pocket-sized" />
              <Item
                href="http://amzn.to/2wm8DxN"
                image={appleWatch}
                title="Apple Watch Series 1"
                description="Have worn it every day since its release" />
              <Item
                href="http://amzn.to/2jBqDOZ"
                image={satechiReader}
                title="Satechi USB-C SD Card Reader"
                description="For editing pictures on-the-go with that dongle life" />
              <Item
                href="http://amzn.to/2xI63CH"
                image={incaseBackpack}
                title="Incase Laptop Backpack"
                description="Durable, all-purpose backpack I've had for 3 years" />
              <Item
                href="https://www.gucci.com/us/en/pr/gifts/monogramming/gucci-signature-wallet-p-365466CWC1R1000?position=10&listName=SearchResultGridComponent"
                image={gucciWallet}
                title="Gucci Signature Wallet"
                description="Gift from Italy that I've used the past 5 years" />
              <Item
                href="https://simple.com/friends/FPCJH2Y"
                image={simpleCard}
                title="Simple Card"
                description="Best banking experience I've ever had" />
              <Item
                href="https://signup.getfinal.com/?invite=IKB0P97ZYL"
                image={finalCard}
                title="Final Credit Card"
                description="Reliable, safe, and useful for building credit" />
              <Item
                href="https://www.baronfig.com/products/shopvanguard"
                image={vanguard}
                title="Baron Fig Notebooks"
                description="I use dot-grid charcoal plus size Vanguards" />
              <Item
                href="http://amzn.to/2haGY8V"
                image={fieldNotes}
                title="Field Notes Pocket Notebooks"
                description="For on-the-go notes and sketches, I use kraft or pitch black ones" />
            </div>

            {/* Every Day Carry */}
            <Section
              id="Apps"
              title="Apps"
              description="Apps I use for both work and personal that make my life easier"
              number="10" />
            <div className="content-end flex flex-wrap">
              <Item
                href="https://www.notion.so/invite/link/db9647d9be6743cc9aa05aeaeaae46f0"
                image={notion}
                title="Notion"
                description="For managing my work, side projects, and life" />
              <Item
                href="https://www.google.com/chrome/index.html"
                image={googleChrome}
                title="Google Chrome"
                description="My browser of choice" />
              <Item
                href="https://hyper.is"
                image={hyper}
                title="Hyper"
                description="My terminal of choice" />
              <Item
                href="https://atom.io"
                image={atom}
                title="Atom"
                description="My text editor of choice" />
              <Item
                href="https://sparkmailapp.com/"
                image={sparkMail}
                title="Spark Mail"
                description="My mail app of choice for iOS and Mac" />
              <Item
                href="https://slack.com"
                image={slack}
                title="Slack"
                description="For communication at my job and managing side project teams" />
              <Item
                href="https://www.apple.com/music"
                image={appleMusic}
                title="Apple Music"
                description="My music player of choice for iOS and Mac" />
              <Item
                href="https://www.figma.com"
                image={figma}
                title="Figma"
                description="My main workspace for UI & UX design work" />
              <Item
                href="https://www.sketchapp.com"
                image={sketchApp}
                title="Sketch App"
                description="Secondary workspace for UI & UX design work when needed" />
              <Item
                href="http://www.gyrosco.pe"
                image={gyroscopeApp}
                title="Gyroscope"
                description="An app to help track my fitness and health habits" />
            </div>

            {/* Every Day Carry */}
            <Section
              id="Gaming"
              title="Gaming"
              description="Consoles and accessories I use as well as my current favorite games"
              number="11" />
            <div className="content-end flex flex-wrap">
              <Item
                href="https://www.notion.so/invite/link/db9647d9be6743cc9aa05aeaeaae46f0"
                image={notion}
                title="Notion"
                description="For managing my work, side projects, and life" />
            </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Books;
