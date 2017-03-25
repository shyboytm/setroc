import React, { Component } from 'react';

import Footer from '../../Footer';
import Header from '../../Header';
import HomeInfoSections from '../../HomeInfoSections';
import TitleWithDescription from '../../TitleWithDescription';

class Home extends Component {
  render() {

    const caseStudyLumi = require('../../../img/lumi-background.jpg');

    return (
      <div id="Home" className="animated fadeIn">
        <Header />
        <div id="IntroCircle" className="br-100 bg-black-05 relative o-30 mt6-l mt3" />
        <div className="w-70-l w-80-m w-90 center cf relative pl3 pv5-l pv3">
          <div className="nt8 z-0 ml5-l ml2 pl3-l">
            <h1 className="f1-ns f2 fw6 lh-title mt0 mb3">Dennis Cortés is a Designer, Illustrator, Developer, and Writer</h1>
            <div className="w-70-l fr mv4">
              <p className="black-60 lh-copy measure">
                I'm currently leading design at <a className="rainbow-hover link black-60" href="http://satchelhealth.com">Satchel Health</a> and building
                resources and experiences at <a className="rainbow-hover link black-60" href="http://usequarry.com">Quarry</a>. I also write a bit for
                my weekly personal blog, <a className="rainbow-hover link black-60" href="https://medium.com/the-rate-of-change">The Rate of Change</a>.
                Email me at <a className="rainbow-hover link black-60" href="mailto:hi@cortes.us">hi@cortes.us</a> if you'd like to get in touch.
              </p>
              <span className="green mt4 db">Available for Work</span>
            </div>
          </div>
        </div>

        <HomeInfoSections />
        <Footer />

      </div>
    );
  }
}

export default Home;
