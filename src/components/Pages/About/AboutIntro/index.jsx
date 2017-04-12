import React, { Component } from 'react';

import TitleParagraph from '../../../TitleParagraph';
import InlineList from '../../../InlineList';
import InlineListItem from '../../../InlineListItem';

class AboutIntro extends Component {
  render() {

    const aboutImage       = require('../../../../img/about-personal-image.jpg');
    const aboutImageMobile = require('../../../../img/about-personal-image-mobile.jpg');

    return (
      <div id="AboutIntro" className="w-100 mt5-l">
        <div className="w-100 bg-black-05 bg-map">
          <div className="w-80-l w-90 center pv5-l pv3 mt5-l">
            <div className="cf w-100 center br2 bg-white shadow-small pa3 nb6-ns">
              <div className="w-50-l w-100 fl pr5-ns">
                <img className="db-l dn" src={aboutImage} alt="Dennis Cortés" />
                <img className="dn-l db" src={aboutImageMobile} alt="Dennis Cortés" />
              </div>
              <div className="w-50-l w-100 fl ph4-l ph2 pt4-l pt2">
                <h2 className="f2 fw6 lh-title z-0 mt0-l mv4">Hey <span className="absolute spin">👋</span><br />I'm Dennis Cortés.</h2>
                <p className="lh-copy black-60 measure">
                  I’m a 22 year old digital designer and illustrator based in Saint Louis. I have 5+ years of experience
                  in the world of design and illustration and have built products both on my own and on a team. Currently,
                  I am the design lead and a developer at <a className="link black-60 rainbow-hover" href="http://satchelhealth.com">Satchel Health</a>,
                  and am the co-founder of <a className="link black-60 rainbow-hover" href="http://usequarry.com">Quarry</a>, where I build products that help people.
                </p>
                <p className="lh-copy black-60 measure">
                  Outside of design, I write quite a bit and release an article each week (30+ weeks!). I also spend time
                  learning code on my own and build projects with that knowledge for fun. As a firm believer in giving
                  to others, a lot of my efforts go to building things that will help others as well as helping those in
                  the design and tech industry. I stream the majority of my work on <a className="link black-60 rainbow-hover" href="https://twitch.tv/cortesarts">Twitch</a>,
                  where others can hang out and maybe learn a few things.
                </p>
                <p className="lh-copy black-60 measure">
                  I'm always open to chat! Whether you have a project I can help you with, a new hiring opportunity, or
                  just want to say hi and ask me a question, please feel free to email me at <a className="link black-60 rainbow-hover" href="mailto:hi@cortes.us">hi@cortes.us</a> 📩
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
