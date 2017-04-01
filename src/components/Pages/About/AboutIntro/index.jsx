import React, { Component } from 'react';

import TitleParagraph from '../../../TitleParagraph';
import InlineList from '../../../InlineList';
import InlineListItem from '../../../InlineListItem';

class AboutIntro extends Component {
  render() {

    const aboutImage       = require('../../../../img/about-personal-image.jpg');
    const aboutImageMobile = require('../../../../img/about-personal-image-mobile.jpg');

    return (
      <div id="AboutIntro" className="w-100 mt5">
        <div className="w-100 bg-black-05 bg-map">
          <div className="w-80-l w-90 center pv5-l pv3 mt5-l">
            <div className="cf w-100 center br2 bg-white shadow-small pa3 nb6">
              <div className="w-50-l w-100 fl pr5-ns">
                <img className="db-l dn" src={aboutImage} />
                <img className="dn-l db" src={aboutImageMobile} />
              </div>
              <div className="w-50-l w-100 fl ph4-l ph2 pt4-l pt2">
                <h2 className="f2 fw4 lh-title z-0 mt0 mb3">Hey There <span className="absolute spin">👋</span><br />I'm Dennis Cortés.</h2>
                <p className="lh-copy black-60 measure">
                  I’m a 22 year old digital designer and illustrator based in Saint Louis. I picked up design
                  a little later than I would have liked to. Because of this, I’ve had to push myself to learn
                  about this industry and understand the power of hard work all while developing a love for
                  knowledge and the possibilities of design. I learned through hours of teaching myself most of
                  what I know about design and business through my own passion and interests in people I admire
                  and facets of the digital design world.
                </p>
                <p className="lh-copy black-60 measure">
                  I’m a 22 year old digital designer and illustrator based in Saint Louis. I picked up design
                  a little later than I would have liked to. Because of this, I’ve had to push myself to learn
                  about this industry and understand the power of hard work all while developing a love for
                  knowledge and the possibilities of design.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-end flex flex-wrap pv5-l pv3 w-80 center cf">
          <div className="w-33-l w-50-m w-100 pr5-ns items-start">
            <TitleParagraph
              title="Inspiration"
              toolTipText="😍"
              paragraph="My family and my friends are constant reminders of humility. My girlfriend and my
                         dogs keep me level headed and inspired to balance my work and my life. Creating
                         a better, more enjoyable life for others motivates my work." />
          </div>
          <div className="w-33-l w-50-m w-100 pr5-ns items-start">
            <TitleParagraph
              title="Hobbies"
              toolTipText="🤓"
              paragraph="When I'm not designing or writing code you can find me writing, playing video games,
                         learning about coffee, trying out new tech, treating my dogs like kids, catching Pokémon, or making music." />
          </div>
          <div className="w-33-l w-50-m w-100 pr5-ns items-start">
          <TitleParagraph
            title="Social"
            toolTipText="🎉" />
            <InlineList>
              <InlineListItem
                inlineListItemLink="https://dribbble.com/fromcortes"
                inlineListItemTitle="Dribbble" />
              <InlineListItem
                inlineListItemLink="https://github.com/fromcortes"
                inlineListItemTitle="Github" />
              <InlineListItem
                inlineListItemLink="https://twitch.tv/cortesarts"
                inlineListItemTitle="Twitch" />
              <InlineListItem
                inlineListItemLink="https://twitter.com/fromcortes"
                inlineListItemTitle="Twitter" />
              <InlineListItem
                inlineListItemLink="https://instagram.com/fromcortes"
                inlineListItemTitle="Instagram" />
              <InlineListItem
                inlineListItemLink="https://youtube.com/cortesarts"
                inlineListItemTitle="YouTube" />
            </InlineList>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutIntro;
