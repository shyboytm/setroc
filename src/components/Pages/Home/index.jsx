import React, { Component } from 'react';

import Header from '../../Header';
import HomeInfoSections from '../../HomeInfoSections';
import TitleWithDescription from '../../TitleWithDescription';
import CaseStudySelection from '../../CaseStudySelection';

class Home extends Component {
  render() {

    const caseStudyLumi = require('../../../img/lumi-background.jpg');

    return (
      <div id="Home" className="animated fadeIn">
        <Header />
        <div id="IntroCircle" className="br-100 bg-black-05 relative o-30 mt5-l mt3" />
        <div className="w-70-l w-80-m w-90 center cf relative pl3 pv5">
          <div className="nt8 z-0 ml5-l ml2 pl3-l">
            <h1 className="f1-ns f2 fw4 lh-copy z-0 mt0 mb3">Dennis Cortés is a Designer, Illustrator, Developer, and Writer</h1>
            <p className="f3-ns f4 black-30 lh-subtitle mt0 measure">
              Currently leading design at <a className="rainbow-hover link black-30 hover-blue" href="http://satchelhealth.com">Satchel Health</a> and building
              resources and experiences at <a className="rainbow-hover link black-30 hover-blue" href="http://usequarry.com">Quarry</a>. I also write a bit for
              my weekly personal blog, <a className="rainbow-hover link black-30 hover-blue" href="https://medium.com/the-rate-of-change">The Rate of Change</a>.
              Email me at <a className="rainbow-hover link black-30 hover-blue" href="mailto:hi@cortes.us">hi@cortes.us</a> if you'd like to get in touch.
            </p>
          </div>
        </div>

        <HomeInfoSections />

        <div id="CaseStudies" className="bb b--black-10 w-100">
          <div className="pv5 w-80-ns w-90 center">
            <CaseStudySelection
              caseStudyTitle="Heft Wing Co."
              caseStudyDescription="Branding"
              caseStudyBackground={caseStudyLumi} />
            <CaseStudySelection
              caseStudyTitle="Twelve Ounce"
              caseStudyDescription="UI Design"
              caseStudyBackground={caseStudyLumi} />
            <CaseStudySelection
              caseStudyTitle="Lumi"
              caseStudyDescription="Illustration"
              caseStudyBackground={caseStudyLumi} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
