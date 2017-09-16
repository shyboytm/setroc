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
      <div className="item ph2 pv3">
        <div className="db-ns flex bg-white ba b--black-10 shadow-large br2">
          <a href={href} className="link pointer black hover-black-30 no-outline">
            <img src={image} className="no-drag w-100 bb b--black-10 br2 br--top" />
            <div className="pa3">
              <h1 className="leitura fw4 f4 mt0 mb2 lh-subtitle">{title}</h1>
              <p className="lh-copy f6 black-60 mt0 mb3">
                {description}
              </p>
              <span>{stars}</span>
              <a className="link ba b--black-10 br2 fw6 f6 dib button-reset shine bg-text-clip dim ph2 pv1 tc pointer br2 mt3" href="/">
                Amazon
              </a>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Item;
