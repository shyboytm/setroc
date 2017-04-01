import React, { Component } from 'react';

import Header from '../../Header';
import AboutIntro from './AboutIntro';
import Approach from './Approach';
import Experience from './Experience';
import Footer from '../../Footer';

class About extends Component {
  render() {
    return (
      <div id="About" className="animated fadeIn overflow-x-hidden-l">
        <Header />
        <AboutIntro />
        <Approach />
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default About;
