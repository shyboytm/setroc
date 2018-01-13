import React, { Component } from 'react';

import Desktop from './Desktop';
import Footer from '../../Footer';
import Mobile from './Mobile';

class Home extends Component {
  render() {

    const aboutImage = require("../../../img/about-picture.jpg");

    return (
      <div id="Home" className="black bg-white f6">
          <Desktop />
          <Mobile />
          <Footer />
      </div>
    );
  }
}

export default Home;
