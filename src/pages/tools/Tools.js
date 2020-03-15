import React, { Component } from 'react';

import Button from '../../components/Button';
import H from '../../components/H';
import ImageCard from '../../components/ImageCard';

class Tools extends Component {
  render() {
    
    // Everyday
    const teslaModel3     = require("../../img/tools/everyday/tesla-model-3-dechromed-in-parking-lot.png");
    const iphone          = require("../../img/tools/everyday/iphone-xs-max-on-table.png");
    const appleWatch      = require("../../img/tools/everyday/apple-watch-series-4-on-wrist.png");
    const gucciWallet     = require("../../img/tools/everyday/gucci-bee-card-wallet.png");
    const fieldNotes      = require("../../img/tools/everyday/field-notes-table-with-coffee.png");
    const planner         = require("../../img/tools/everyday/planner-held-by-woman.png");
    const backpack        = require("../../img/tools/everyday/incase-city-backpack-worn-outside.png");

    // Setup
    const macbookAir      = require("../../img/tools/setup/macbook-air-on-wooden-table.png");
    const macbookPro      = require("../../img/tools/setup/macbook-pro-on-desk-with-books.png");
    const mxMasterII      = require("../../img/tools/setup/logitech-mouse-mx-on-table.png");
    const mxVertical      = require("../../img/tools/setup/logitech-vertical-on-table.png");
    const airpods         = require("../../img/tools/setup/airpods-held-on-hand-blurred-background.png");
    const dellMonitor     = require("../../img/tools/setup/dell-monitor-attached-to-white-desk.png");
    const lgMonitor       = require("../../img/tools/setup/lg-monitor-on-white-desk-with-lights.png");
    const hyperdrive      = require("../../img/tools/setup/hyperdrive-usb-c-hub-drive.png");
    const altKeyboard     = require("../../img/tools/setup/gray-alt-keyboard-next-to-mouse-and-laptop.png");
    const appleKeyboard   = require("../../img/tools/setup/apple-keyboard-on-yellow-desk-with-accessories.png");
    const ipadPro         = require("../../img/tools/setup/ipad-pro-held-above-busy-desk.png");
    const applePencil     = require("../../img/tools/setup/apple-pencil-on-black-background.png");
    const jarvisDesk      = require("../../img/tools/setup/jarvis-standing-desk-next-to-plants.png");
    const supremeCase     = require("../../img/tools/setup/supreme-pelican-1060-case-on-wooden-planks.png");
    
    // Music
    const ableton         = require("../../img/tools/music/ableton-on-laptop-on-bed-with-headphones.png");
    const op1             = require("../../img/tools/music/op-1-on-table-with-plant.png");
    const opz             = require("../../img/tools/music/op-z-on-table-with-leather-case-under.png");
    const po33            = require("../../img/tools/music/po-33-ko-held-with-turntable-and-cables.png");
    
    return (
      <div id="tools" className="blur center mw9 pa4-ns pa3">

        <div className="mb6-ns mt5-ns mt4 mb5 tc-ns tl">
            <h1 className="black-70 f1 fw9 ttu">Tools</h1>
            <p className="center black-70 f4-ns f5 lh-copy measure mt4">
                These are the things I use and love in my personal and work life. Many folks are 
                always asking about what I recommend so thought it would be better to 
                collect these in one spot for easy access.
            </p>
            <div className="db mb6-l mb4-m mb3 mt5">
              <a href="#everydayUse" target="_self" rel="nofollow" className="ba b--black-05 bg-black-05 black-70 br3 dib f6 fw6 hover-light-purple link mr2 mb2 ph3 pv1 pointer shadow up">
                <span>Everyday Use</span>
              </a>
              <a href="#setup" target="_self" rel="nofollow" className="ba b--black-05 bg-black-05 black-70 br3 dib f6 fw6 hover-light-purple link mr2 mb2 ph3 pv1 pointer shadow up">
                <span>Setup</span>
              </a>
              <a href="#music" target="_self" rel="nofollow" className="ba b--black-05 bg-black-05 black-70 br3 dib f6 fw6 hover-light-purple link mr2 mb2 ph3 pv1 pointer shadow up">
                <span>Music</span>
              </a>
            </div>
        </div>

        <div id ="everydayUse">
          <div className="mt5 mv4">
            <div className="pl3-ns">
              <H size={2}>Everyday Use</H>
              <p className="black-70 lh-copy nt2 mb0">Stuff I use almost every day in my personal life</p>
            </div>
            <hr className="b--black-10 mt3" />
          </div>
          <ul id="list" className="content-end flex flex-wrap list pl0">
            <ImageCard
              href="https://ts.la/dennis60542"
              image={teslaModel3}
              name="Tesla Model 3"
              description="My daily driver car and personal project that I work on in my spare time. I have the base model with black interior." />
            <ImageCard
              href="https://amzn.to/2IdAbc8"
              image={iphone}
              name="iPhone XS Max"
              description="My phone and OS of choice, I prefer the larger form factor of the Max model and upgrade every other year typically." />
            <ImageCard
              href="https://amzn.to/2PD6g1m"
              image={appleWatch}
              name="Apple Watch Series 4"
              description="My smart watch and fitness tracker that I use. Love the new form factor that came with this iteration." />
            <ImageCard
              href="https://www.ssense.com/en-us/men/product/gucci/black-bee-card-holder/3970081?gclid=Cj0KCQiA1-3yBRCmARIsAN7B4H0Qw-nPWlLwQ58qME_FyTQX4Ls3HfMoBfTQ2X9vuNCOu5E3ZJlnh7QaAi3EEALw_wcB"
              image={gucciWallet}
              name="Gucci Bee Card Wallet"
              description="Small but stylish wallet that makes it really easy to carry. I don't really carry cash so this works for me." />
            <ImageCard
              href="https://amzn.to/3akuEg6"
              image={fieldNotes}
              name="Field Notes"
              description="Great way to take notes and sketch on the go. Great for those times you have random ideas you need to jot down." />
            <ImageCard
              href="https://shop.mochithings.com/products/92289"
              image={planner}
              name="Weekly Planner"
              description="While I do use a digital calendar and todo list, having a tangible planner is rewarding for me to plan my weeks out." />
            <ImageCard
              href="https://amzn.to/2x6JxV5"
              image={backpack}
              name="Incase City Backpack"
              description="Super comfortable backpack that I use for travel and work, fits more than you'd expect." />
          </ul>
        </div>

        <div id ="setup">
          <div className="mt5 mv4">
            <div className="pl3-ns">
              <H size={2}>Setup</H>
              <p className="black-70 lh-copy nt2 mb0">Gear and workspace stuff I use for design and code</p>
            </div>
            <hr className="b--black-10 mt3" />
          </div>
          <ul id="list" className="content-end flex flex-wrap list pl0">
            <ImageCard
              href="https://amzn.to/3anMz5s"
              image={macbookAir}
              name='Macbook Air 13"'
              description="My personal laptop I use for design, code, gaming, freelance, music, and personal projects." />
            <ImageCard
              href="https://amzn.to/3csUmkg"
              image={mxMasterII}
              name="Logitech MX Master II"
              description="My personal mouse that I use on my setup at home when I'm at my desk. Lots of nice extra features." />
            <ImageCard
              href="https://amzn.to/38gXcWk"
              image={macbookPro}
              name='Macbook Pro 16"'
              description="My work laptop that I use at Mothership for design, code, and administration work." />
            <ImageCard
              href="https://amzn.to/2TAf1u3"
              image={mxVertical}
              name="Logitech Vertical Mouse"
              description="My work mouse that I use at Mothership at my desk setup. I have bad wrists so this really helps out." />
            <ImageCard
              href="https://amzn.to/2ToRddT"
              image={airpods}
              name="Airpods Pro"
              description="My choice of headphones when I'm not making music. As a musician I highly recommend the sound quality." />
            <ImageCard
              href="https://amzn.to/3aBsuc4"
              image={dellMonitor}
              name="Dell P2715Q Monitor"
              description="Monitor I use at my home setup for design, code, and gaming. Great for the price point." />
            <ImageCard
              href="https://amzn.to/2TNS6Mf"
              image={lgMonitor}
              name='LG Ultrafine 27"'
              description="Monitor I use at work. Probably my favorite display I've ever used." />
            <ImageCard
              href="https://amzn.to/2PVWacc"
              image={hyperdrive}
              name="HyperDrive USB-C Hub"
              description="A necessary evil for the days of the Apple dongle life. This has the most extensive connections from what I saw." />
            <ImageCard
              href="https://amzn.to/3dba5Fg"
              image={altKeyboard}
              name="Drop Alt Keyboard"
              description="Mechanical keyboard that I use at my home setup. I love the small form factor, aesthetic, and customization." />
            <ImageCard
              href="https://amzn.to/2U1vxn6"
              image={appleKeyboard}
              name="Apple Keyboard"
              description="Keyboard I use at work to not make so much noise with my mechanical keyboard. Small form factor and Apple functions are great." />
            <ImageCard
              href="https://amzn.to/2TR9WPt"
              image={ipadPro}
              name='11" iPad Pro'
              description="Tablet of choice to use for sketching, note taking, research, and non-design/code work." />
            <ImageCard
              href="https://amzn.to/2TPf9Ya"
              image={applePencil}
              name="Apple Pencil 2"
              description="A must-have accessory for any iPad Pro users. Great for sketching and taking notes." />
            <ImageCard
              href="https://amzn.to/39UdbLN"
              image={jarvisDesk}
              name="Jarvis Standing Desk"
              description="My standing desk at my home setup. Very clean plus easy to install and control." />
            <ImageCard
              href="https://stockx.com/supreme-pelican-1060-case-black"
              image={supremeCase}
              name="Supreme Pelican Case"
              description="For my desk at work, I put all my desk supplies and necessities in here to keep my space organized." />
          </ul>
        </div>
        
        <div id ="music">
          <div className="mt5 mv4">
            <div className="pl3-ns">
              <H size={2}>Music</H>
              <p className="black-70 lh-copy nt2 mb0">Software and hardware I use to produce music and beats.</p>
            </div>
            <hr className="b--black-10 mt3" />
          </div>
          <ul id="list" className="content-end flex flex-wrap list pl0">
            <ImageCard
              href="https://amzn.to/2TSR1nG"
              image={ableton}
              name="Ableton 10 Standard"
              description="My DAW software of choice. Has a small learning barrier but worth all the functionality once you start." />
            <ImageCard
              href="https://amzn.to/2TVwteh"
              image={op1}
              name="OP-1"
              description="My favorite hardware synth I own. Almost unlimited in what it can do and how much fun it is to use." />
            <ImageCard
              href="https://amzn.to/2IQin7y"
              image={opz}
              name="OP-Z"
              description="A smaller, more sequencer focused version of the OP-1. Almost palm-sized plus very fun and easy to get started with." />
            <ImageCard
              href="https://amzn.to/2U36nok"
              image={po33}
              name="PO-33"
              description="A palm-sized synth and sampler that is incredibly fun to use and a great price point for starting off." />
          </ul>
        </div>

      </div>
    );
  }
}

export default Tools;
