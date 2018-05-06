import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../Footer';
import Item from '../../Item';
import Section from '../../Section';

class Tools extends Component {
  render() {

    // Setup
    const macBookPro        = require('../../../img/tools/setup/macbook-pro-13-inch.jpg');
    const roostStand        = require('../../../img/tools/setup/roost-laptop-stand.jpg');
    const dell4KMonitor     = require('../../../img/tools/setup/dell-4k-monitor-p2715q.jpg');
    const vivoMonitorStand  = require('../../../img/tools/setup/vivo-single-lcd-monitor-arm.jpg');
    const magicKeyboard     = require('../../../img/tools/setup/apple-magic-keyboard.jpg');
    const keyboardCover     = require('../../../img/tools/setup/mosiso-keyboard-cover.jpg');
    const mxMaster2S        = require('../../../img/tools/setup/logitech-mx-master-2s.jpg');
    const iPadPro           = require('../../../img/tools/setup/ipad-pro.jpg');
    const applePencil       = require('../../../img/tools/setup/apple-pencil.jpg');
    const boseQC35ii        = require('../../../img/tools/setup/bose-qc35-ii-headphones.jpg');
    const beatsXEarphones   = require('../../../img/tools/setup/beatsx-earphones.jpg');
    const blueYeti          = require('../../../img/tools/setup/blue-yeti-microphone.jpg');
    const alexaEcho         = require('../../../img/tools/setup/amazon-alexa-echo.jpg');
    const alexaDot          = require('../../../img/tools/setup/amazon-alexa-dot.jpg');
    const renberget         = require('../../../img/tools/setup/renberget-ikea-chair.jpg');
    const rissla            = require('../../../img/tools/setup/rissla-ikea-mat.jpg');
    const jarvis            = require('../../../img/tools/setup/jarvis-standing-desk.jpg');

    // Every Day Carry
    const iPhone7           = require('../../../img/tools/everyday/apple-iphone-7-plus.jpg');
    const totalleeCase      = require('../../../img/tools/everyday/totallee-thin-iphone-case.jpg');
    const sonyA5100         = require('../../../img/tools/everyday/sony-a5100-camera.jpg');
    const appleWatch        = require('../../../img/tools/everyday/apple-watch-series-1.jpg');
    const satechiReader     = require('../../../img/tools/everyday/satechi-usb-sd-card.jpg');
    const incaseBackpack    = require('../../../img/tools/everyday/incase-backpack.jpg');
    const gucciWallet       = require('../../../img/tools/everyday/gucci-signature-wallet.jpg');
    const simpleCard        = require('../../../img/tools/everyday/simple-bank-card.jpg');
    const chaseCard         = require('../../../img/tools/everyday/chase-bank-card.jpg');
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

    // Gaming
    const nintendoSwitch    = require('../../../img/tools/gaming/nintendo-switch-console.jpg');
    const xboxOne           = require('../../../img/tools/gaming/xbox-one-console.jpg');
    const ps4Slim           = require('../../../img/tools/gaming/ps4-slim-1tb-playstation.jpg');
    const switchController  = require('../../../img/tools/gaming/nintendo-switch-controller.jpg');
    const xboxController    = require('../../../img/tools/gaming/xbox-one-controller.jpg');
    const samsungTV         = require('../../../img/tools/gaming/samsung-4k-tv.jpg');
    const nintendo2DS       = require('../../../img/tools/gaming/nintendo-2ds-xl-console.jpg');

    // Music
    const abletonLive       = require('../../../img/tools/music/ableton-live.jpg');
    const op1               = require('../../../img/tools/music/op-1.jpg');
    const volcaFM           = require('../../../img/tools/music/volca-fm-synthesis-synth.jpg');
    const korgNanoKeyboard  = require('../../../img/tools/music/korg-nano-keyboard.jpg');
    const po33              = require('../../../img/tools/music/po-33.jpg');
    const po20              = require('../../../img/tools/music/po-20.jpg');

    // Coffee
    const chemex6Cup        = require('../../../img/tools/coffee/chemex-6-cup.jpg');
    const harioV60          = require('../../../img/tools/coffee/hario-v60-kit.jpg');
    const nourishScale      = require('../../../img/tools/coffee/nourish-kitchen-scale.jpg');
    const chemexFilters     = require('../../../img/tools/coffee/chemex-filters.jpg');
    const conicalGrinder    = require('../../../img/tools/coffee/conical-burr-coffee-grinder.jpg');
    const fellowStagg       = require('../../../img/tools/coffee/fellow-stagg-kettle.jpg');
    const gfdaMug           = require('../../../img/tools/coffee/gfda-travel-mug.jpg');

    const pageName = "Tools";
    const pageDescription = "These are things I use on a daily basis for work and life. From my desk setup, apps I use, stuff I always carry, what I use to make music, to my video game setup. Enjoy!";

    return (
      <div id={pageName} className="black pt4-l">

        <Helmet>
          <title>Dennis Cortés - {pageName} 💻</title>
          <meta name="description" content={pageDescription} />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@fromcortes"/>
          <meta name="twitter:creator" content="@fromcortes"/>
          <meta name="twitter:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.cortes.us/${pageName}`} />
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
        </Helmet>

        <div className="bg-dot-grid bg-black-blue smooth-text">
          <div className="animated fadeIn w-80-l w-90-m w-100 center pv4 ph0-ns ph3 z-0 tl">
            <h1 className="blur-skew f-subheadline-ns f1 fw8 lh-title white tracked-tiny ttu">Tools</h1>
            <p className="fw5 f4 lh-subtitle measure white-90 mb5" style={{letterSpacing: 0.8 + "px"}}>
              {pageDescription}
            </p>
            {/* Shortcuts */}
            <ul className="list ph0 pv4-ns pv3">
              <li className="dib mr3">
                <a href="#Setup" className="items-center flex up f7 fw6 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white glow bg-green bg-animate">
                  <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(256,256,256,1.0)" width="20" height="20" viewBox="0 0 28 18">
                    <title>Laptop Custom Icon</title>
                    <path d="M27,22V8a2,2,0,0,0-2-2H7A2,2,0,0,0,5,8V22H2v1a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V22ZM8,9H24V20H8Z" transform="translate(-2 -6)"/>
                  </svg>
                  Setup
                </a>
              </li>
              <li className="dib mr3">
                <a href="#EveryDay" className="items-center flex up f7 fw6 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white glow bg-blue bg-animate">
                  <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(256,256,256,1.0)" width="18" height="18" viewBox="0 0 16 26">
                    <title>Backpack Custom Icon</title>
                    <path d="M19,6.59V6a3,3,0,0,0-6,0v.59A8,8,0,0,0,8,14V27a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V14A8,8,0,0,0,19,6.59ZM14,6a2,2,0,0,1,4,0v.26a7.76,7.76,0,0,0-4,0Zm-1,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1Zm9,11H20v2a1,1,0,0,1-2,0V23H10V21H22Z" transform="translate(-8 -3)"/>
                  </svg>
                  Every Day
                </a>
              </li>
              <li className="dib mr3">
                <a href="#Apps" className="items-center flex up f7 fw6 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white glow bg-light-purple bg-animate">
                  <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(256,256,256,1.0)" width="18" height="18" viewBox="0 0 28 28">
                    <title>App Web Custom Icon</title>
                    <path d="M22,16a6,6,0,1,1-6-6A6,6,0,0,1,22,16Zm7.12-2.12a3,3,0,1,0,0,4.24A3,3,0,0,0,29.12,13.88ZM2.88,18.12a3,3,0,1,0,0-4.24A3,3,0,0,0,2.88,18.12ZM21.59,7.59a2,2,0,1,0,2.83,0A2,2,0,0,0,21.59,7.59Zm-14,14a2,2,0,1,0,2.83,0A2,2,0,0,0,7.59,21.59Zm16.83,0a2,2,0,1,0,0,2.83A2,2,0,0,0,24.41,21.59Zm-14-14a2,2,0,1,0,0,2.83A2,2,0,0,0,10.41,7.59Zm3.46-4.71a3,3,0,1,0,4.24,0A3,3,0,0,0,13.88,2.88Zm4.24,26.24a3,3,0,1,0-4.24,0A3,3,0,0,0,18.12,29.12Z" transform="translate(-2 -2)"/>
                  </svg>
                  Apps
                </a>
              </li>
              <li className="dib mr3">
                <a href="#Gaming" className="items-center flex up f7 fw6 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white glow bg-red bg-animate">
                  <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(256,256,256,1.0)" width="18" height="18" viewBox="0 0 26.7 25">
                    <title>Gaming Custom Icon</title>
                    <path d="M29.3,23l-1.89-11.5a3.39,3.39,0,0,0-2.73-2.74h0a48.53,48.53,0,0,0-17.36,0h0a3.39,3.39,0,0,0-2.73,2.74L2.7,23A3.39,3.39,0,0,0,9,25.29l1.38-2.93a3,3,0,0,1,2.13-1.66h0a17.71,17.71,0,0,1,7,0,3,3,0,0,1,2.11,1.63l1.43,3A3.39,3.39,0,0,0,29.3,23ZM13,14.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,1,.5.5Zm7.5-.5A1.5,1.5,0,1,1,22,12.5,1.5,1.5,0,0,1,20.5,14Zm4,4A1.5,1.5,0,1,1,26,16.5,1.5,1.5,0,0,1,24.5,18Zm-8-11h-1a.5.5,0,0,1-.5-.5V3a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1V6.5A.5.5,0,0,1,16.5,7Z" transform="translate(-2.65 -2)"/>
                  </svg>
                  Gaming
                </a>
              </li>
              <li className="dib mr3">
                <a href="#Music" className="items-center flex up f7 fw6 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white glow bg-pink bg-animate">
                  <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(256,256,256,1.0)" width="18" height="18" viewBox="0 0 27 27.89">
                    <title>Music Custom Icon</title>
                    <path d="M10,21a4.92,4.92,0,0,0-4.08-.9A5,5,0,0,0,7.73,30,5.12,5.12,0,0,0,12,24.82v-17L27,6.21V19a4.92,4.92,0,0,0-4.08-.9A5,5,0,0,0,24.73,28,5.12,5.12,0,0,0,29,22.82V3.11a1,1,0,0,0-1.1-1l-17,1.79a1,1,0,0,0-.9,1Z" transform="translate(-2 -2.11)"/>
                  </svg>
                  Music
                </a>
              </li>
              <li className="dib mr3">
                <a href="#Coffee" className="items-center flex up f7 fw6 mb0-l mb3 br-pill db pv1 ph3 ttu tracked link white glow bg-gold bg-animate">
                  <svg className="mr2" xmlns="http://www.w3.org/2000/svg" fill="rgba(256,256,256,1.0)" width="18" height="18" viewBox="0 0 28 26">
                    <title>Coffee Custom Icon</title>
                    <path d="M30,26a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V25H30ZM28,8a1,1,0,0,1,1,1v3a6,6,0,0,1-5,5.91V18a5,5,0,0,1-5,5H11a5,5,0,0,1-5-5V9A1,1,0,0,1,7,8Zm-1,2H24v5.86A4,4,0,0,0,27,12ZM13,6.5V3a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V6.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,13,6.5Zm6,0V4a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V6.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,19,6.5Z" transform="translate(-2 -2)"/>
                  </svg>
                  Coffee
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mw8 w-80-ns w-90 center mv5">
            {/* Setup */}
            <Section
              id="Setup"
              title="Setup"
              description="Gear and furniture I use on the go and at my home office"
              number="17" />
            <div className="content-end flex flex-wrap">
              <Item
                href="https://www.apple.com/shop/buy-mac/macbook-pro"
                image={macBookPro}
                title='MacBook Pro 13"'
                description="8GB RAM, 128GB SSD, 2.3 GHz i5"
              />
              <Item
                href="http://amzn.to/2jxqf42"
                image={roostStand}
                title="Roost Laptop Stand"
                description="Stand to put laptop next to monitor"
              />
              <Item
                href="http://amzn.to/2oKjoED"
                image={dell4KMonitor}
                title="Dell Ultra HD 4k Monitor P2715Q"
                description="Best price and quality for '17 MBP"
              />
              <Item
                href="http://amzn.to/2oFRiKn"
                image={vivoMonitorStand}
                title="VIVO Monitor Desk Mount Stand"
                description="Versatile stand that looks great and minimal"
              />
              <Item
                href="http://amzn.to/2xb6Om8"
                image={magicKeyboard}
                title="Apple Magic Keyboard 2"
                description="Great size, quiet, portable, minimal"
              />
              <Item
                href="http://amzn.to/2wxN7kQ"
                image={keyboardCover}
                title="Mosiso Keyboard Cover"
                description="All black everything ツ"
              />
              <Item
                href="http://amzn.to/2oFVIkF"
                image={mxMaster2S}
                title="Logitech MX Master 2S"
                description="Best mouse I've ever owned"
              />
              <Item
                href="https://www.apple.com/ipad-pro"
                image={iPadPro}
                title='iPad Pro 12.9"'
                description="For illustration, research, writing, and wireframing"
              />
              <Item
                href="https://www.apple.com/apple-pencil"
                image={applePencil}
                title="Apple Pencil"
                description="Must have tool for accompanying an iPad Pro"
              />
              <Item
                href="https://amzn.to/2IVPhBy"
                image={boseQC35ii}
                title="Bose QuietComfort 35 ii"
                description="Headphones I use for work and music, best I've ever used"
              />
              <Item
                href="http://amzn.to/2hbbj7i"
                image={beatsXEarphones}
                title="BeatsX Earphones"
                description="Headphones I use for the gym"
              />
              <Item
                href="http://amzn.to/2idzcvk"
                image={blueYeti}
                title="Blue Yeti Microphone"
                description="For recording audio and livestreaming"
              />
              <Item
                href="http://www.ikea.com/us/en/catalog/products/50332238"
                image={renberget}
                title="Renberget Office Chair"
                description="Cheap, but surprisingly comfortable"
              />
              <Item
                href="http://www.ikea.com/us/en/catalog/products/40246156/"
                image={rissla}
                title="Rissla Desk Mat"
                description="All black everything ツ"
              />
              <Item
                href="https://www.fully.com/standing-desks/jarvis/jarvis-standing-desk.html"
                image={jarvis}
                title="Jarvis Standing Desk"
                description="Standing desk with a beautiful finish, highly recommend"
              />
              <Item
                href="http://amzn.to/2xdW46z"
                image={alexaEcho}
                title="Amazon Alexa Echo"
                description="For all the home assistant needs"
              />
              <Item
                href="http://amzn.to/2xdzPhb"
                image={alexaDot}
                title="Amazon Alexa Dot"
                description="For controlling my Echo from my office"
              />
            </div>

            {/* Every Day Carry */}
            <Section
              id="EveryDay"
              title="Every Day Carry"
              description="Things I carry with me every day from tech to random items"
              number="11" />
            <div className="content-end flex flex-wrap">
              <Item
                href="https://www.apple.com/iphone"
                image={iPhone7}
                title="iPhone 7 Plus"
                description="Matte Black 32GB"
              />
              <Item
                href="http://amzn.to/2wyw6Hy"
                image={totalleeCase}
                title="Totallee Thin Case"
                description="Naked iPhone without the scratching"
              />
              <Item
                href="http://amzn.to/2xI1pof"
                image={sonyA5100}
                title="Sony α5100 Camera"
                description="Great quality pictures, pocket-sized"
              />
              <Item
                href="http://amzn.to/2wm8DxN"
                image={appleWatch}
                title="Apple Watch Series 1"
                description="Have worn it every day since its release"
              />
              <Item
                href="http://amzn.to/2jBqDOZ"
                image={satechiReader}
                title="Satechi USB-C SD Card Reader"
                description="For editing pictures on-the-go with that dongle life"
              />
              <Item
                href="http://amzn.to/2xI63CH"
                image={incaseBackpack}
                title="Incase Laptop Backpack"
                description="Durable, all-purpose backpack I've had for 3 years"
              />
              <Item
                href="https://www.gucci.com/us/en/pr/gifts/monogramming/gucci-signature-wallet-p-365466CWC1R1000?position=10&listName=SearchResultGridComponent"
                image={gucciWallet}
                title="Gucci Signature Wallet"
                description="Gift from Italy that I've used the past 5 years"
              />
              <Item
                href="https://simple.com/friends/FPCJH2Y"
                image={simpleCard}
                title="Simple Card"
                description="Best banking experience I've ever had"
              />
              <Item
                href="https://www.referyourchasecard.com/6/UMOZNMXU35"
                image={chaseCard}
                title="Chase Credit Card"
                description="Reliable, safe, great rewards, and useful for building credit"
              />
              <Item
                href="https://www.baronfig.com/products/shopvanguard"
                image={vanguard}
                title="Baron Fig Notebooks"
                description="I use dot-grid charcoal plus size Vanguards"
              />
              <Item
                href="http://amzn.to/2haGY8V"
                image={fieldNotes}
                title="Field Notes Pocket Notebooks"
                description="For on-the-go notes and sketches, I use kraft or pitch black ones"
              />
            </div>

            {/* Apps */}
            <Section
              id="Apps"
              title="Apps"
              description="Apps I use for both work and personal that make my life easier"
              number="11" />
            <div className="content-end flex flex-wrap">
              <Item
                href="https://www.notion.so/invite/link/db9647d9be6743cc9aa05aeaeaae46f0"
                image={notion}
                title="Notion"
                description="For managing my work, side projects, and life"
              />
              <Item
                href="https://www.google.com/chrome/index.html"
                image={googleChrome}
                title="Google Chrome"
                description="My browser of choice"
              />
              <Item
                href="https://hyper.is"
                image={hyper}
                title="Hyper"
                description="My terminal of choice"
              />
              <Item
                href="https://atom.io"
                image={atom}
                title="Atom"
                description="My text editor of choice"
              />
              <Item
                href="https://sparkmailapp.com/"
                image={sparkMail}
                title="Spark Mail"
                description="My mail app of choice for iOS and Mac"
              />
              <Item
                href="https://slack.com"
                image={slack}
                title="Slack"
                description="For communication at my job and managing side project teams"
              />
              <Item
                href="https://www.apple.com/music"
                image={appleMusic}
                title="Apple Music"
                description="My music player of choice for iOS and Mac"
              />
              <Item
                href="https://www.figma.com"
                image={figma}
                title="Figma"
                description="My main workspace for UI & UX design work"
              />
              <Item
                href="https://www.adobe.com/illustrator"
                image={adobeIllustrator}
                title="Adobe Illustrator"
                description="My go-to app for all Branding and Illustration work"
              />
              <Item
                href="https://www.sketchapp.com"
                image={sketchApp}
                title="Sketch App"
                description="Secondary workspace for UI & UX design work when needed"
              />
              <Item
                href="http://www.gyrosco.pe"
                image={gyroscopeApp}
                title="Gyroscope"
                description="An app to help track my fitness and health habits"
              />
            </div>

            {/* Gaming */}
            <Section
              id="Gaming"
              title="Gaming"
              description="Consoles and accessories I use for gaming"
              number="7" />
            <div className="content-end flex flex-wrap">
              <Item
                href="http://amzn.to/2xgbrvi"
                image={nintendoSwitch}
                title="Nintendo Switch"
                description="My favorite console to date"
              />
              <Item
                href="http://amzn.to/2ylotX9"
                image={xboxOne}
                title="Xbox One"
                description="My main home console for gaming and TV watching"
              />
              <Item
                href="https://amzn.to/2voM3F1"
                image={ps4Slim}
                title="PS4 Slim 1TB"
                description="Had to get it for all those exclusives"
              />
              <Item
                href="http://amzn.to/2wBMNBO"
                image={switchController}
                title="Nintendo Switch Controller"
                description="Cheaper, 3rd party Pro Controller for Switch"
              />
              <Item
                href="http://amzn.to/2fveztY"
                image={xboxController}
                title="Xbox One Controller"
                description="All black everything ツ"
              />
              <Item
                href="http://amzn.to/2xhWSaQ"
                image={samsungTV}
                title="Samsung MU7000 49-Inch 4K"
                description="Gotta have a good screen for good games"
              />
              <Item
                href="http://amzn.to/2xhCKp8"
                image={nintendo2DS}
                title="Nintendo 2DS XL"
                description="For all the Pokémon I constantly play"
              />
            </div>

            {/* Music */}
            <Section
              id="Music"
              title="Music"
              description="Hardware and software I use for music production"
              number="6" />
            <div className="content-end flex flex-wrap">
              <Item
                href="https://www.ableton.com/en/live/"
                image={abletonLive}
                title="Ableton Live 10"
                description="My DAW of choice"
              />
              <Item
                href="https://teenageengineering.com/products/op-1"
                image={op1}
                title="OP-1"
                description="All-in-one synthesizer, drum sequencer, sampler, recorder, and more"
              />
              <Item
                href="https://amzn.to/2JNdiMz"
                image={volcaFM}
                title="Volca FM"
                description="A digital FM synthesizer based on the DX7, really great depth of sounds"
              />
              <Item
                href="http://amzn.to/2FbpR1c"
                image={korgNanoKeyboard}
                title="Korg Nano MIDI Keyboard"
                description="Simple (and cheap) portable MIDI keyboard"
              />
              <Item
                href="http://amzn.to/2FP9g4B"
                image={po33}
                title="PO-33 K.O!"
                description="Pocket sized sequencer and sampler"
              />
              <Item
                href="http://amzn.to/2oEXjqU"
                image={po20}
                title="PO-20 Arcade"
                description="Pocket sized sequencer with 8bit presets"
              />
            </div>

            {/* Coffee */}
            <Section
              id="Coffee"
              title="Coffee"
              description="I'm admittedly a coffee snob, this is what I use to make my coffee"
              number="6" />
            <div className="content-end flex flex-wrap">
              <Item
                href="http://amzn.to/2wCCo9a"
                image={chemex6Cup}
                title="Chemex 6-Cup"
                description="Easy and reliable way to make a great pour-over"
              />
              <Item
                href="http://amzn.to/2fgGfpI"
                image={harioV60}
                title="Hario V60 Kit"
                description="My daily pour-over setup, amazing value for what you pay"
              />
              <Item
                href="http://amzn.to/2xv6I9C"
                image={chemexFilters}
                title="Chemex Filters"
                description="Container for your ground coffee inside the Chemex or V60"
              />
              <Item
                href="http://amzn.to/2xhTFrs"
                image={nourishScale}
                title="Nourish Food Scale"
                description="For measuring coffee and water during brewing"
              />
              <Item
                href="http://amzn.to/2xOWlys"
                image={conicalGrinder}
                title="Conical Burr Coffee Grinder"
                description="An easier, more efficient, and better way to grind coffee"
              />
              <Item
                href="http://amzn.to/2jJmj0d"
                image={fellowStagg}
                title="Fellow Stagg Pour Over Kettle"
                description="Matte Black, gorgeous hardware to pour your water"
              />
            </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Tools;
