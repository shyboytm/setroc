import React, { Component } from 'react';

class L extends Component {
  render() {

    const { children, href } = this.props;

    return (
      <a
        href={href}
        title={children}
        target="_blank" rel="nofollow"
        className="bg-text-clip shine no-outline link sans-serif dib dim fw6">
        {children}
      </a>
    );
  }
}

export default L;
