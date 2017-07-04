import React, { Component } from 'react';

import Footer from '../../Footer';
import Header from '../../Header';
import Logo from '../../Logo';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="animated fadeIn white f5">
        {/* <Header />
        <div id="IntroCircle" className="br-100 bg-black-05 relative o-30 mt6-l mt3" />
        <Footer /> */}
        <div className="mv4 tc fixed top-0 w-100 mw9">
          <Logo />
        </div>
        <div className="mt7-l mt6 w-80-l w-90 center">
          <h1 className=" fw5 lh-title">Dennis Cortés</h1>
          <h2 className=" fw4 lh-title">Designer and Illustrator that codes</h2>
        </div>
      </div>
    );
  }
}

export default Home;
