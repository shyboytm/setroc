import React, { Component } from 'react';

import Feature from '../Feature';

class Item extends Component {
  render() {

    const {
      description,
      href,
      image,
      stars,
      title
    } = this.props;

    return (
      <div className="items-start relative ph3 pv3 w-33-l w-50 w-100">
        <div className="db-ns flex bg-white ba b--black-10 shadow-small br2">
          <a href={href} className="db-ns flex items-start link pointer black hover-black-30 no-outline">
            <img src={image} className="no-drag w-100-ns w-70 bb-ns bn b--black-10 br2 br--top-ns" />
            <div className="db-ns flex flex-column justify-between pa3">
              <h1 className="leitura fw4 f4 mt0 mb1 lh-subtitle">{title}</h1>
              <p className="lh-copy f6 black-60 mt0 mb3">
                {description}
              </p>
              <span>{stars}</span>
              <a className="link ba b--black-10 black br2 fw6 f6 dib rainbow-hover pointer ph2 pv1 tc pointer br2 mt2" href={href}>
                See Details
              </a>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Item;
