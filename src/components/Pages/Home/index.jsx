import React, { Component } from 'react';

import Desktop from './Desktop';
import Footer from '../../Footer';
import Mobile from './Mobile';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="black f6">
          <Desktop />
          <Mobile />
          <Footer />
      </div>
    );
  }
}

export default Home;
