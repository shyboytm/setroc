import React, { Component } from 'react';
import { Link } from 'react-router';

import AboutInfoSections from '../../AboutInfoSections';
import Header from '../../Header';
import Footer from '../../Footer';
import TitleParagraph from '../../TitleParagraph';

class About extends Component {
  render() {

    const aboutImage       = require('../../../img/about-personal-image.jpg');
    const aboutImageMobile = require('../../../img/about-personal-image-mobile.jpg');

    return (
      <div id="About" className="animated fadeIn">
        <Header />
        <div className="w-100 bg-black-10 bg-map">
          <div className="w-80-l w-90 center pv5-l pv3 mt5-l">
            <div className="cf w-100 center br2 bg-white shadow-about pa3 nb6">
              <div className="w-50-l w-100 fl pr5-ns">
                <img className="db-l dn" src={aboutImage} />
                <img className="dn-l db" src={aboutImageMobile} />
              </div>
              <div className="w-50-l w-100 fl mt4 ph4-l ph2 pt4-l pt2">
                <h1 className="f1-ns f2 fw6 lh-title z-0 mt0 mb3">Hey There <span className="absolute spin">👋</span><br />I'm Dennis Cortés.</h1>
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
        <AboutInfoSections />
        <div className="w-100 bg-black pv5-l pv3">
          <div className="w-80 center cf">
            <h2 className="f1-ns f2 fw6 white mb5">Approach</h2>
            <div className=" fr-ns fn tl">
              <p className="white-70 measure lh-copy mb5">
                I believe all work is more than just technique. Thought process is driven by a combination of
                knowledge, ethics, and philosophy. I think about these topics a lot and am always trying to refine and
                improve, here's how I currently approach my work and process.
              </p>
            </div>
          </div>
        </div>
        <div className="w-100 bg-white pv5-l pv3">
          <div className="w-80 center cf">
            <h2 className="f2 fw6 mb5">Experience</h2>
            <div className="w-100">
              <div className="dib w2 h2 br-pill pa1 bw2 ba b--black-10 hover-bg-green bg-animate tooltip"><span className="tooltiptext">Hello</span></div>
              <div className="dib w4 bt b--black-10 bw2 pb2 mb1" />
              <div className="dib w2 h2 br-pill pa1 bw2 ba b--black-10 hover-bg-green bg-animate" />
              <div className="dib w4 bt b--black-10 bw2 pb2 mb1" />
              <div className="dib w2 h2 br-pill pa1 bw2 ba b--black-10 hover-bg-green bg-animate" />
              <div className="dib w4 bt b--black-10 bw2 pb2 mb1" />
              <div className="dib w2 h2 br-pill pa1 bw2 ba b--black-10 hover-bg-green bg-animate" />
              <div className="dib w4 bt b--black-10 bw2 pb2 mb1" />
              <div className="dib w2 h2 br-pill pa1 bw2 ba b--black-10 hover-bg-green bg-animate" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
