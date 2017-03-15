import React, { Component } from 'react';
import { Link } from 'react-router';

class ListItem extends Component {
  render() {

    const { listItemTitle } = this.props;

    return (
        <li className="fw4 f5 pb3 black-60 lh-copy">
          {listItemTitle}
        </li>
    );
  }
}

export default ListItem;
