import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <li className="black-60 f6 lh-copy mb3">
        {this.props.children}
      </li>
    );
  }
}

export default Item;
