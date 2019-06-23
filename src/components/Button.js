import React, { Component } from 'react';

class Button extends Component {
  render() {

    const {
      href,
      name,
      subname
    } = this.props;

    return (
      <a href={href} target="_blank" rel="nofollow"
         className="bg-black-05 black-70 br3 dib f6 fw6 hover-light-purple link mr2 mb2 ph3 pv1 pointer shadow up">
        {name}
      </a>
    );
  }
}

export default Button;
