import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Sunburst, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';

import Footer from '../../Footer';

class Life extends Component {
  render() {

    const pageName = "Life";
    const pageDescription = "I'm also a beat-maker and producer working under the alias Cordio; mixing elements of ambient, electronic, jazz, lo-fi, and hip-hop music genres";

    return (
      <div id={pageName} className="black pt4-l">

        <Helmet>
          <title>Dennis Cortés - {pageName} 🥁</title>
          <meta name="description" content={pageDescription} />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@cordiofm"/>
          <meta name="twitter:creator" content="@cordiofm"/>
          <meta name="twitter:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content="https://www.cortes.us/images/hm-01-by-cordio.png"/>
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.cortes.us/${pageName}`} />
          <meta property="og:image" content="https://www.cortes.us/images/hm-01-by-cordio.png"/>
        </Helmet>

        <div className="bg-black-20 overflow-hidden pt5 pb6 ph4 relative tc-ns tl z-0">
          <div className="center w-80-l w-90">
            <h1 className="blur-late f1 ttu fw8">
              {pageName}
            </h1>
            <p className="center fw5 f4 lh-subtitle measure black-60 mt0 mb4" style={{letterSpacing: 0.8 + "px"}}>
              {pageDescription}
            </p>
          </div>
        </div>

        <Sunburst
          className="center db mv5 w-100"
          width={1000}
          height={300} data={[
            {x: 1, y: 10},
            {x: 2, y: 5},
            {x: 3, y: 15}
          ]}>
        </Sunburst>

        <Footer />
      </div>
    );
  }
}

export default Life;
