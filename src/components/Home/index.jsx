import React, { Component } from 'react';

import Header from '../Header';
import InfoSection from '../InfoSection';
import TitleWithDescription from '../TitleWithDescription';
import CaseStudySelection from '../CaseStudySelection';

class Home extends Component {
  render() {

    const caseStudyLumi = require('../../img/lumi-background.jpg');

    return (
      <div id="Home">
        <Header />
        <div id="IntroCircle" className="br-100 bg-black-05 relative o-30 mt5-l mt3" />
        <div className="w-70-l w-80-m w-90 center cf relative pl3 pv5">
          <div className="nt8 z-0 ml5-l ml2 pl3-l">
            <h1 className="f1-ns f2 fw4 lh-copy z-0 mt0 mb3">Dennis Cortés is a Designer, Illustrator, Developer, and Writer</h1>
            <p className="f3-ns f4 black-50 lh-subtitle mt0 measure">
              Currently leading design at <a className="dotted-link link black-50 hover-blue" href="http://satchelhealth.com">Satchel Health</a> and building
              resources and experiences at <a className="dotted-link link black-50 hover-blue" href="http://usequarry.com">Quarry</a>. I also write a bit for
              my weekly personal blog, <a className="dotted-link link black-50 hover-blue" href="https://medium.com/the-rate-of-change">The Rate of Change</a>.
              Email me at <a className="dotted-link link black-50 hover-blue" href="mailto:hi@cortes.us">hi@cortes.us</a> if you'd like to get in touch.
            </p>
          </div>
        </div>
        <div id="Work" className="w-100 bb bt b--black-10 mt5-ns mt2">
          <span className="dib-l dn rotated-text-l ml5 mt6">Work</span>
          <span className="dn-l db f4 ml4 pl3 mb4 rotated-text">Work</span>
          <div className="content-end flex flex-wrap pv5 w-80-ns w-100 center cf">
             <InfoSection
                infoSectionTitle="Work"
                infoSectionDescription="We design, architect and build creative digital solutions with the highest attention to aesthetic, functional and content detail to ensure a flawless and truly engaging user experience." />
            <InfoSection
               infoSectionTitle="Recognition"
               infoSectionDescription="We design, architect and build creative digital solutions with the highest attention to aesthetic, functional and content detail to ensure a flawless and truly engaging user experience." />
            <InfoSection
               infoSectionTitle="Writing"
               infoSectionDescription="We design, architect and build creative digital solutions with the highest attention to aesthetic, functional and content detail to ensure a flawless and truly engaging user experience." />
          </div>
        </div>
        <div id="CaseStudies" className="bb b--black-10 w-100">
          <span className="dib-l dn rotated-text-l ml3 mt6">Case Studies</span>
          <div className="pv5 w-80-ns w-90 center">
            <span className="dn-l db f4 ml2 pl2 mb4 rotated-text">Case Studies</span>
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
        <div id="Work" className="w-100 bb b--black-10">
          <span className="dib-l dn rotated-text-l ml5 mt6">Work</span>
          <div className="pv5 w-80-ns w-100 center">
             <span className="dn-l db f4 ml4 pl3 mb4 rotated-text">Work</span>
             <TitleWithDescription
                selectionLink="https://dribbble.com/fromcortes"
                selectionTitle="ta–lk"
                selectionDescription="Interview" />
            <TitleWithDescription
                selectionLink="http://usequarry.com"
                selectionTitle="Typewolf SOTD"
                selectionDescription="for Taste Notes" />
            <TitleWithDescription
                selectionLink="http://coffee.cortes.us"
                selectionTitle="Taste Notes"
                selectionDescription="Coffee thoughts and reference." />
            <TitleWithDescription
                selectionLink="http://sogol.co"
                selectionTitle="Sogol"
                selectionDescription="Hand crafted and on-demand logos for your ideas." />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
