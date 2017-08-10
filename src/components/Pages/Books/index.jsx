import React, { Component } from 'react';

import Footer from '../../Footer';
import Item from '../../Item';
import Title from '../../Title';

class Home extends Component {
  render() {

    const aboutImage = require("../../../img/about-picture.jpg");

    return (
      <div id="Books" className="animated fadeIn black">
        {/* <div id="IntroCircle" className="br-100 bg-black-05 fixed h5-ns w5-ns h4 w4 o-30 mt6 z-1" /> */}
        <div className="w-50-l w-75-m w-90 center mv5-ns ph0-ns ph3 z-0">
          <h1 className="f2-ns f3 fw4 lh-title">Books</h1>
          <Title
            title="Folks ask me quite often about which books I read and recommend.
            So here you go, categorized and everything!"
            toolTipText="📚" />
          <div className="masonry">
            <Item
              description="Hey"
              image=""
              stars="⭐️⭐️⭐️⭐️"
              title="Title of Item" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
