import React, { Component } from 'react';

class NewsLayout extends Component {
  render() {

    const {
      children,
      date,
      subtitle,
      title
    } = this.props;

    const signatureImage = require('../../../../img/news-signature-image.png');

    return (
      <div className="animated fadeIn center pv5-ns pv4 w-50-l w-75-m w-90 bg-black-blue smooth-text">
        <p className="f6 ttu fw7 white-40 tracked">{date}</p>
        <h1 className="lh-title white fw6 f1-ns f2 tracked-tiny">{title}</h1>
        <h2 className="white-70 f3-ns f4 lh-subtitle tracked-tiny measure-narrow fw5 mb4">{subtitle}</h2>
        <div className="bg-rainbow mv5 w3" style={{height: 3 + "px"}}></div>
        <div id={title} className="white-70 lh-copy">
          {children}
        </div>
        <div className="dib relative mt5">
          <span className="absolute spin f2 left-0 top-0">👋</span>
          <img className="h4 w4 shadow-large br-pill" src={signatureImage} alt="Portrait of Dennis Cortés seated in well-lit industrial space" />
        </div>
        <p className="f4 fw6 tracked-tiny lh-subtitle white mb5">
          Thanks for reading!<br />
          — Dennis Cortés
        </p>
        <a href="/news" className="link bn fw6 f6 ttu button-reset dim ph3 pv2 tc dib-l db white bg-gradient pointer br2 w-auto-l w-100">
          &larr; Back to all News
        </a>
      </div>
    );
  }
}

export default NewsLayout;
