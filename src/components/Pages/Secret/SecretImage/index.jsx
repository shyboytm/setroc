import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

class SecretImage extends Component {
  render() {

    const { imageSource } = this.props;

    return (
      <div className="item">
        <LazyLoad offset={1000}>
        <img className="w-100" alt="Secret" src={imageSource} />
        </LazyLoad>
      </div>
    );
  }
}

export default SecretImage;
