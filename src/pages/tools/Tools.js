import React, { Component } from 'react';

import Button from '../../components/Button';
import H from '../../components/H';
import ImageCard from '../../components/ImageCard';

class Tools extends Component {
  render() {
    
    const teslaModel3     = require("../../img/tools/everyday/tesla-model-3-satin-gray-wrap.png");
    const iphone          = require("../../img/tools/everyday/iphone-xs-max-on-table.png");
    const appleWatch      = require("../../img/tools/everyday/apple-watch-series-4-on-wrist.png");
    const gucciWallet     = require("../../img/tools/everyday/gucci-bee-card-wallet.png");
    const fieldNotes      = require("../../img/tools/everyday/field-notes-table-with-coffee.png");
    const planner         = require("../../img/tools/everyday/planner-held-by-woman.png");
    const backpack        = require("../../img/tools/everyday/incase-city-backpack-worn-outside.png");
    const macbookAir      = require("../../img/tools/everyday/macbook-air-on-wooden-table.png");
    const macbookPro      = require("../../img/tools/everyday/macbook-pro-on-desk-with-books.png");
    const mxMasterII      = require("../../img/tools/everyday/logitech-mouse-mx-on-table.png");
    const mxVertical      = require("../../img/tools/everyday/logitech-vertical-on-table.png");
    
    return (
      <div id="tools" className="blur center mw9 pa4-ns pa3">

        <div className="mb6 mt5 tc">
            <h1 className="black-90 f1 fw9 ttu">Tools</h1>
            <p className="center black-70 f4 lh-copy measure mt4">
                These are the things I use and love in my personal and work life. Many folks are 
                always asking about what I recommend so thought it would be better to 
                collect these in one spot for easy access.
            </p>
        </div>

        <div id ="everydayUse">
          <div className="mt5 mv4">
            <div className="pl3">
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
            <div className="pl3">
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
              description="My personal mouse that I use on my setup at home when I'm at my desk." />
            <ImageCard
              href="https://amzn.to/38gXcWk"
              image={macbookPro}
              name='Macbook Pro 16"'
              description="My work laptop that I use at Mothership for design, code, and administration work." />
            <ImageCard
              href="https://amzn.to/2TAf1u3"
              image={mxVertical}
              name="Logitech Vertical Mouse"
              description="My work mouse that I use at Mothership at my desk setup." />
          </ul>
        </div>

      </div>
    );
  }
}

export default Tools;
