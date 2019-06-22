import React, { Component } from 'react';

class Link extends Component {
  render() {

    const {
      children,
      href
    } = this.props;

    return (
      <a href={href} className="bg-animate black-70 fw6 hover-light-purple link link-inline underline up">
        {children}
      </a>
    );
  }
}

export default Link;
