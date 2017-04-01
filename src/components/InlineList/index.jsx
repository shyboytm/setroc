import React, { Component } from 'react';

class InlineList extends Component {
  render() {
    return (
      <div>
        <ul className="list pl0 pt2 pb3">{this.props.children}</ul>
      </div>
    );
  }
}

export default InlineList;
