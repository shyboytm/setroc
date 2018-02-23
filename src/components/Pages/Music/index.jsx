import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../Footer';
import Section from '../../Section';
import Title from '../../Title';

class Mentoring extends Component {
  render() {

    const pageName = "Music";
    const pageDescription = "I'm also a beat-maker and producer working under the alias Cordio; mixing elements of ambient, electronic, jazz, and hip-hop music genres";

    return (
      <div id={pageName} className="black pt4-l">

        <Helmet>
          <title>Dennis Cortés - {pageName} 🥁</title>
          <meta name="description" content={pageDescription} />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@fromcortes"/>
          <meta name="twitter:creator" content="@fromcortes"/>
          <meta name="twitter:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.cortes.us/${pageName}`} />
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
        </Helmet>

        <div>
          <div className="bg-silver pv5 tc">
            <h1 className="f1 ttu fw8 flex items-center justify-center">
              <svg id="CordioLogo" className="mr3 spin-full shadow-large" data-name="Cordio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401.04 401.04" height="35" width="35"><title>Cordio Logo</title><path d="M258.21,258.21c-78.31,78.31-78.31,205.27,0,283.58s205.27,78.31,283.58,0,78.31-205.27,0-283.58S336.52,179.9,258.21,258.21ZM506.34,506.34,293.66,293.66A150.39,150.39,0,0,1,506.34,506.34Z" transform="translate(-199.48 -199.48)"/></svg>
              Cordio
            </h1>
            <p className="center fw5 f4 lh-subtitle measure black-60 mv0" style={{letterSpacing: 0.8 + "px"}}>
              {pageDescription}
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Mentoring;
