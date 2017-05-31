import React, { Component } from 'react';

class CollectionItem extends Component {
  render() {

    const anandSharma = require('../../img/anand-sharma.jpg');

    return (
      <div className="item ph4 pv3">
        <a href="#" className="link pointer">
          <img src={anandSharma} className="w-100 bg-black-05 shadow-large mb2 br2 grow" />
          <h1 className="fw6 f4 black">Person Name</h1>
          <p className="black-60 lh-copy f5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </a>
      </div>
    );
  }
}

export default CollectionItem;
