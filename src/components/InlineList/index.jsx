import React, { Component } from 'react';
import { Link } from 'react-router';

class InlineList extends Component {
  render() {

    const { } = this.props;

    return (
      <div>
        <ul className="list pl0 pt2 pb3">{this.props.children}</ul>
      </div>
    );
  }
}

export default InlineList;
