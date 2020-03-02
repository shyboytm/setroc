import React, { Component } from 'react';

import Button from '../../components/Button';
import H from '../../components/H';
import ImageCard from '../../components/ImageCard';

class Tools extends Component {
  render() {
    
    const teslaModel3 = require("../../img/tools/everyday/tesla-model-3-satin-gray-wrap.png");
    const iphone      = require("../../img/tools/everyday/iphone-xs-max-on-table.png");
    const appleWatch      = require("../../img/tools/everyday/apple-watch-series-4-on-wrist.png");
    const gucciWallet      = require("../../img/tools/everyday/gucci-bee-card-wallet.png");
    
    return (
      <div id="tools" className="blur center mw9 pa4-ns pa3">
        <div className="mv5 tc">
            <h1>Tools</h1>
            <p className="center black-70 f4 lh-copy measure mt4">
                These are the things I use and love in my personal and work life. Many folks are 
                always asking about what I recommend so thought it would be better to 
                collect these in one spot for easy access.
            </p>
        </div>
        <div id ="everydayUse">
          <div className="mt5 mv4">
            <div className="pl3">
              <H size={3}>Everyday Use</H>
              <p className="black-70 lh-copy mt2 mb0">Stuff I use almost every day in my personal life</p>
            </div>
            <hr className="b--black-10 mt3" />
          </div>
          <ul className="content-end flex flex-wrap list pl0">
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
              description="My daily driver car and personal project that I work on in my spare time. I have the base model with black interior." />
            <ImageCard
              href="https://www.ssense.com/en-us/men/product/gucci/black-bee-card-holder/3970081?gclid=Cj0KCQiA1-3yBRCmARIsAN7B4H0Qw-nPWlLwQ58qME_FyTQX4Ls3HfMoBfTQ2X9vuNCOu5E3ZJlnh7QaAi3EEALw_wcB"
              image={gucciWallet}
              name="Gucci Bee Card Wallet"
              description="Small but stylish wallet that makes it really easy to carry. I don't really carry cash so this works for me." />
          </ul>
        </div>
      </div>
    );
  }
}

export default Tools;
