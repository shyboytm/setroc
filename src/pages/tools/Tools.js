import React, { Component } from 'react';

import Button from '../../components/Button';
import H from '../../components/H';
import ImageCard from '../../components/ImageCard';

class Tools extends Component {
  render() {
    
    const mothershipImage = require("../../img/work/mothership-portfolio-thumbnail.png");

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
        <div>
          <div id ="everydayCarry" className="mt5 mv4">
            <div className="pl3">
              <H size={3}>Everyday Carry</H>
            </div>
            <hr className="b--black-10 mt3" />
          </div>
          <ImageCard
            color="dark-blue"
            href="https://mothership.com"
            image={mothershipImage}
            name="Tesla Model 3"
            description="My daily driver car and personal project that I work on in my spare time. I have the base model with black interior." />
        </div>
      </div>
    );
  }
}

export default Tools;
