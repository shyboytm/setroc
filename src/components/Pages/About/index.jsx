import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../../Header';
import AboutInfoSections from '../../AboutInfoSections';

class About extends Component {
  render() {
    return (
      <div id="About" className="animated fadeIn">
        <Header />
        <div className="w-80 center pv5">
          <div className="db">
            <h1 className="f1-ns f2 fw4 lh-title z-0 mt0 mb3">Hey There <span className="absolute spin">👋</span><br />I'm Dennis Cortés.</h1>
          </div>
          <div className="cf w-100 center">
            <div className="w-50-l w-100 fl pr5-ns">
              <p className="lh-copy black-60">
                I’m a 22 year old digital designer and illustrator based in Saint Louis. I picked up design
                a little later than I would have liked to. Because of this, I’ve had to push myself to learn
                about this industry and understand the power of hard work all while developing a love for
                knowledge and the possibilities of design. I learned through hours of teaching myself most of
                what I know about design and business through my own passion and interests in people I admire
                and facets of the digital design world.
              </p>
            </div>
            <div className="w-50-l w-100 fl pr5-ns">
              <p className="lh-copy black-60">
                I’m a 22 year old digital designer and illustrator based in Saint Louis. I picked up design
                a little later than I would have liked to. Because of this, I’ve had to push myself to learn
                about this industry and understand the power of hard work all while developing a love for
                knowledge and the possibilities of design. I learned through hours of teaching myself most of
                what I know about design and business through my own passion and interests in people I admire
                and facets of the digital design world.
              </p>
            </div>
          </div>
        </div>
        <AboutInfoSections />
      </div>
    );
  }
}

export default About;
