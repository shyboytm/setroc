import React, { Component } from 'react';

import Desktop from './Desktop';
import Footer from '../../Footer';
import Mobile from './Mobile';

class Home extends Component {
  render() {

    const aboutImage = require("../../../img/about-picture.jpg");

    return (
      <div id="Home" className="animated fadeIn black bg-black-90 f6 pv5 ph3">
        {/*
          <Desktop />
          <Mobile />
          <Footer />
        */}
        <div className="center w-40-l w-60-l w-90">
          <div className="cf mb2">
            <p className="bg-white-30 br-chat-left dib fl lh-copy ph3 pv2 mv1 white">
              I'm new here, who's this? What do you do?
            </p>
          </div>
          <div className="cf">
            <p className="bg-white black-80 br-chat-right dib fr lh-copy ph3 pv2 mv1 mw5">
              Hello! I'm Dennis Cortés 👋
            </p>
          </div>
          <div className="cf">
            <div className="bg-about-image bg-top bg-white black-80 br-chat-right-image cover dib fr h5 lh-copy mt1 mw5 w-100">
            </div>
          </div>
          <div className="cf">
            <p className="bg-white-80 black-80 br-chat-right-media dib fr fw5 lh-copy ph4 pv3 mw5 mb1 mt0 w-100">
              Dennis Cortes <br />
              <span className="black-40 fw4 f7">Email: hi@cortes.us</span>
            </p>
          </div>
          <div className="cf">
            <p className="bg-white black-80 br-chat-right-middle dib fr lh-copy pa3 mv1 mw5">
              I’m a digital designer and illustrator that codes based in Memphis, TN from
              Bayamón, Puerto Rico. I love working on projects that require multidisciplinary
              skill sets solving complex issues that make the lives of people better.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
