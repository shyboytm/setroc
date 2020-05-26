import React, { Component } from 'react';

class L extends Component {
  render() {

    const {
      children,
      href
    } = this.props;

    return (
      <a href={href} target="_blank" className="bg-animate black fw4 hover-light-purple link-inline up">
        {children}
      </a>
    );
  }
}

export default L;
