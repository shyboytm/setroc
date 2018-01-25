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
      <div className="center pv5-ns pv4 w-50-l w-75-m w-90">
        <p className="f6 ttu fw6 black-30 tracked-tiny">{date}</p>
        <h1 className="lh-title fw6 f1-ns f2 tracked-tiny">{title}</h1>
        <h2 className="black-60 f3-ns f4 lh-subtitle tracked-tiny measure-narrow fw5 mb4">{subtitle}</h2>
        <div className="bg-rainbow mv5 w3" style={{height: 3 + "px"}}></div>
        <div id={title} className="black-60 lh-copy">
          {children}
        </div>
        <div className="dib relative mt5">
          <span className="absolute spin f2 left-0 top-0">👋</span>
          <img className="h4 w4 shadow-large br-pill" src={signatureImage} />
        </div>
        <p className="f4 fw5 tracked-tiny lh-subtitle">
          Thanks for reading!<br />
          — Dennis Cortés
        </p>
      </div>
    );
  }
}

export default NewsLayout;
