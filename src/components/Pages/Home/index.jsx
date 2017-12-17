import React, { Component } from 'react';

import Desktop from './Desktop';
import Footer from '../../Footer';
import Mobile from './Mobile';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="animated fadeIn black f6">
        {/* <div id="IntroCircle" className="br-100 bg-black-05 fixed h5-ns w5-ns h4 w4 o-30 mt6" /> */}
        <Desktop />
        <Mobile />
        <Footer />
      </div>
    );
  }
}

export default Home;
