import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class NotFound extends Component {
  render() {

    const pageName = "Not Found";
    const pageDescription = "Pretty darn sure this isn't what you're looking for on Dennis Cortés' website. Sorry about that!";

    return (
      <div id={pageName} className="animated fadeIn black vh-75 tc flex flex-column items-center justify-center smooth-text">

        <Helmet>
          <title>(╯°□°）╯︵ ┻━┻</title>
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
          <meta property="og:url" content="https://www.cortes.us/news"/>
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
        </Helmet>

        <h1 className="f3 mb1 shine bg-text-clip">(╯°□°）╯︵ ┻━┻</h1>
        <h2 className="f2-ns f3 fw4 mb5 lh-title">Hm, there's nothing here,<br />are you lost?</h2>
        <a className="link bn fw6 f6 ttu dib button-reset dim ph3 pv2 tc white bg-gradient pointer br2 mt3" href="/">Back Home</a>
      </div>
    );
  }
}

export default NotFound;
