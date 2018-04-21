import React, { Component } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

import Footer from '../../../Footer';

class NewsLayout extends Component {
  render() {

    const {
      children,
      date,
      subtitle,
      title,
      url,
      twitterLink,
      facebookLink,
      googleLink
    } = this.props;

    const signatureImage = require('../../../../img/news-signature-image.png');

    return (
      <div>
        <Helmet>
          <title>{title} by Dennis Cortés</title>
          <meta name="description" content={subtitle} />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@fromcortes"/>
          <meta name="twitter:creator" content="@fromcortes"/>
          <meta name="twitter:title" content={`${title} by Dennis Cortés`}/>
          <meta name="twitter:description" content={subtitle} />
          <meta name="twitter:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={`${title} by Dennis Cortés`}/>
          <meta property="og:description" content={subtitle} />
          <meta property="og:url" content={`https://www.cortes.us/journal/${url}`}/>
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
        </Helmet>

        <div className="animated fadeIn center pv5-ns pv4 w-50-l w-75-m w-90 bg-black-blue smooth-text">
          <p className="f6 ttu fw7 mt4 white-40 tracked">{date}</p>
          <h1 className="lh-title white fw6 f1-ns f2 tracked-tiny">{title}</h1>
          <h2 className="white-70 f3-ns f4 lh-subtitle tracked-tiny measure-narrow fw5 mb4">{subtitle}</h2>
          <div className="flex items-center justify-between">
            <div className="bg-rainbow mv5 w3" style={{height: 3 + "px"}}></div>
            <div>
              <div className="w2 h2 mr3 dib dim">
                <a className="pointer dim" target='_blank' href={twitterLink} title="Twitter"><svg viewBox="0 0 512 512" fill="#ffffff"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg></a>
              </div>
              <div className="w2 h2 mr3 dib dim">
                <a className="pointer dim" target='_blank' href={facebookLink} title="Facebook"><svg viewBox="0 0 512 512" fill="#ffffff"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg></a>
              </div>
              <div className="w2 h2 dib dim">
                <a className="pointer dim" target='_blank' href={googleLink} title="GooglePlus"><svg viewBox="0 0 512 512" fill="#ffffff"><path d="M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3"/></svg></a>
              </div>
            </div>
          </div>
          <div id={title} className="white-90 lh-copy">
            {children}
          </div>
          <div className="dib relative mt5">
            <span className="absolute spin f2 left-0 top-0">👋</span>
            <img className="h4 w4 shadow-large br-pill" src={signatureImage} alt="Portrait of Dennis Cortés seated in well-lit industrial space" />
          </div>
          <p className="f5 fw6 lh-subtitle white mb5">
            <span className="fw4">Thanks for reading!</span><br />
            — Dennis Cortés
          </p>
          <Link to="/journal" className="link bn fw7 f6 ttu tracked-tiny button-reset dim ph3 pv2 tc dib-l db white bg-gradient pointer br2 w-auto-l w-100">
            <span className="mr2">&larr;</span> Back to all News
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NewsLayout;
