import React, { Component } from 'react';
import { Link } from 'react-router';

class InfoSectionItem extends Component {
  render() {

    const { } = this.props;

    return (
        <li className="dotted-link forward pb0 pt2">
          <a className="link black-30 hover-blue lh-subtitle f4"
             href="#">
             Portfolio
          </a>
        </li>
    );
  }
}

export default InfoSectionItem;
