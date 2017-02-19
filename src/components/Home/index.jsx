import React, { Component } from 'react';

import Header from '../Header';
import TitleWithDescription from '../TitleWithDescription';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Header />
        <div className="w-60-l w-80-m w-90 center cf">
          <h1 className="f1-ns f2 fw4 lh-copy">Dennis Cortés is a Designer, Illustrator, Developer, and Writer</h1>
          <span className="f4 black-50 ttu tracked fw7">Available for Work <span className="green f3">•</span></span>
          <div className="w-70-l w-100 fr-l mt4-l mt5">
            <p className="f3-ns f4 black-50 lh-subtitle">
              Currently leading design at <a className="subtitle-link link black-50 hover-blue" href="http://satchelhealth.com">Satchel Health</a> and building
              resources and experiences at <a className="subtitle-link link black-50 hover-blue" href="http://usequarry.com">Quarry</a>. I also write a bit for
              my weekly personal blog, <a className="subtitle-link link black-50 hover-blue" href="https://medium.com/the-rate-of-change">The Rate of Change</a>.
              Feel free email me at <a className="subtitle-link link black-50 hover-blue" href="mailto:hi@cortes.us">hi@cortes.us</a> if you'd like to get in touch.
            </p>
          </div>
        </div>
        <div className="w-100 bg-black-05 mt4">
          <span className="db">Work</span>
          <div className="pv4 w-70-l w-80-m w-90 center">
           <TitleWithDescription />
           <TitleWithDescription />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
