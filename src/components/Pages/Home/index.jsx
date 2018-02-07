import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Desktop from './Desktop';
import Footer from '../../Footer';
import Mobile from './Mobile';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="black f6">

        <Helmet>
          <title>Dennis Cortés - Home</title>
          <meta name="description"
            content="Dennis Cortes is a Designer, Illustrator, Developer, Writer, and Beat-Maker."
          />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:title" content="Dennis Cortés - Home"/>
          <meta name="twitter:description" content="Dennis Cortes is a Designer, Illustrator, Developer, Writer, and Beat-Maker."/>
          <meta name="twitter:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Dennis Cortés - Designer"/>
          <meta property="og:description" content="Dennis Cortes is a Designer, Illustrator, Developer, Writer, and Beat-Maker."/>
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
          <meta property="og:url" content="https://www.cortes.us/"/>
        </Helmet>

          <Desktop />
          <Mobile />
          <Footer />
      </div>
    );
  }
}

export default Home;
