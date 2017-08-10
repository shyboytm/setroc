import React, { Component } from 'react';

import Footer from '../../Footer';
import Subheader from '../../Subheader';

class Home extends Component {
  render() {

    const aboutImage = require("../../../img/about-picture.jpg");

    return (
      <div id="Books" className="animated fadeIn black">
        {/* <div id="IntroCircle" className="br-100 bg-black-05 fixed h5-ns w5-ns h4 w4 o-30 mt6 z-1" /> */}
        <div className="w-40-l w-75-m w-90 center mv5-ns ph0-ns ph3 z-0">

          <Subheader />

          <h1>Books</h1>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
