import React, { Component } from 'react';

import Footer from '../../Footer';
import Header from '../../Header';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="animated fadeIn">
        <Header />
        <div id="IntroCircle" className="br-100 bg-black-05 relative o-30 mt6-l mt3" />
        <Footer />
      </div>
    );
  }
}

export default Home;
