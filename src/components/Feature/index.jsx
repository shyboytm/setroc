import React, { Component } from 'react';

class Feature extends Component {
  render() {

    const {
      href,
      name
    } = this.props;

    return (
      <a className="f6 fw6 dib link black ba br2 b--black-10 hover-light-purple ph2 pv1 mv1 system mr2 up"
        style={{lineHeight: "1.25" + "rem"}}
        target="_blank" rel="nofollow" href={href}>
        {name}
      </a>
    );
  }
}

export default Feature;
