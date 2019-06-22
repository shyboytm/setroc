import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <a href={this.props.href} className="b black hover-light-purple link underline">
        {this.props.children}
      </a>
    );
  }
}

export default Link;
