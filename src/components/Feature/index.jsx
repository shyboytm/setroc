import React, { Component } from 'react';

class Feature extends Component {
  render() {

    const {
      href,
      name
    } = this.props;

    return (
      <a className="f6 fw6 dib link rainbow-hover black ba br2 b--black-10 ph2 pv1 mv1 mr2"
        target="_blank" rel="nofollow" href={href}>
        {name}
      </a>
    );
  }
}

export default Feature;
