import React, { Component } from 'react';

import Header from '../../Header';
import Footer from '../../Footer';

class About extends Component {
  render() {
    return (
      <div id="About" className="animated fadeIn overflow-x-hidden-l">
        <Header />
          <div className="w-100 bg-map bg-black-20 pv6-l pv3 bb bt b--black-05">
            <div className="w-80 center cf">
              <h2 className="f1-ns f2 fw6 white mb5">Books</h2>
              <div className="fr-ns fn tl">
                <p className="f4 lh-subtitle black-60 measure mb5">
                  Folks ask me quite often about which books I read and recommend.
                  So here you go, categorized and everything!
                </p>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default About;
