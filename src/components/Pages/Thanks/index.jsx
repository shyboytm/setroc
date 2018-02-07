import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Thanks extends Component {
  render() {

    const pageName = "Thanks";
    const pageDescription = "Of all the newsletters in the world, I'm glad mine is one that you trust to be in your inbox. We'll be in touch!";

    return (
      <div id={pageName} className="animated fadeIn overflow-x-hidden-l smooth-text">

        <Helmet>
          <title>Dennis Cortés - {pageName} 💻</title>
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
          <meta property="og:url" content={`https://www.cortes.us/newsletter/${pageName}`} />
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
        </Helmet>

        <div className="pv6-l pv5 tc w-80-ns center w-90">
          <h1 className="leitura fw4">Thanks for subscribing!</h1>
          <p className="lh-copy f5 black-60 measure-ns center">
            {pageDescription}
          </p>
          <a className="link bn fw6 f6 ttu dib button-reset dim ph3 pv2 tc white bg-gradient pointer br2 mt3" href="/">Back Home</a>
        </div>
      </div>
    );
  }
}

export default Thanks;
