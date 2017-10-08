import React, { Component } from 'react';

import Feature from '../../Feature';
import Footer from '../../Footer';
import Subheader from '../../Subheader';
import Spacer from '../../Spacer';
import Title from '../../Title';

import Currently from './Data/Currently';
import Work from './Data/Work';

class Mobile extends Component {
  render() {
    return (

      <div className="dn-l db w-90 center mv5 ph0-ns ph3">

          <Subheader />
          <Currently />
          <Spacer />
          <Work />
          <Spacer />

            <Title
              title="Recognition"
              toolTipText="🏆">
            </Title>
            <div className="pl4-ns fw4 lh-copy">
              <p className="measure mb4">
                From awards to interviews, here are some folks who think my work and I are pretty cool. I'm always open to interviews if that's your thing.
              </p>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://www.typewolf.com/site-of-the-day/taste-notes">
                Typewolf SOTD
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://sitesee.co/sites/taste-notes">
                Site See SOTD
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://365awesomedesigners.com/dennis-cortes/">
                365 Designers
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=8vTTJ-W-Axc&feature=youtu.be">
                ta–lk
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=XWLhtUGbQwk&t=1s">
                Logomarked
              </a>
            </div>

            <Spacer />

            <Title
              title="Recent Writing"
              toolTipText="📝">
            </Title>
            <div className="pl4-ns fw4 lh-copy">
              <p className="measure mb4">
                I write an article every week for my blog, <a className="link link-underlined rainbow-hover black mh1 fw6" target="_blank" rel="nofollow" href="https://blog.cortes.us">The Rate of Change</a>. Here are some of the most recent articles, you can sign up for my
                <a className="link link-underlined rainbow-hover black mh1 fw6"
                  target="_blank" rel="nofollow" href="https://eepurl.com/cgT2bD">
                  newsletter
                </a>
                if you'd like.
              </p>
              <Feature
                href="https://blog.cortes.us/ebb-and-flow-of-design-process"
                name="The Ebb and Flow of the Design Process" />
              <Feature
                href="https://blog.cortes.us/marketing-yourself-as-designer-or-developer"
                name="How I Market Myself — Designer or Developer?" />
              <Feature
                href="https://blog.cortes.us/additional-before-necessary-patterns"
                name="Additional Before Necessary Patterns in Tech Products" />
              <Feature
                href="https://blog.cortes.us/real-reason-i-love-apple-events"
                name="The Real Reason I Love Apple Events" />
            </div>
        </div>
    );
  }
}

export default Mobile;
