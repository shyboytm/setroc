import React, { Component } from 'react';
import { Link } from 'react-router';

class List extends Component {
  render() {

    const { listTitle } = this.props;

    return (
      <div className="w-33-l w-50-m w-80 pr5-ns items-start">
        <h2 className="f2 fw4">{listTitle}</h2>
        <ul className="list pl0 pt2 pb3">{this.props.children}</ul>
      </div>
    );
  }
}

export default List;
