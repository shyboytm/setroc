import React, { Component } from 'react';

class SecretImage extends Component {
  render() {

    const { imageSource } = this.props;

    return (
      <div className="item">
        <img alt="Secret" src={imageSource} />
      </div>
    );
  }
}

export default SecretImage;
