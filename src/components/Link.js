import React, { Component } from 'react';

class Link extends Component {
  render() {

    const {
      children,
      href
    } = this.props;

    return (
      <a href={href} className="b bg-animate black-70 hover-light-purple link link-inline underline up">
        {children}
      </a>
    );
  }
}

export default Link;
