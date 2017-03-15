import React, { Component } from 'react';
import { Link } from 'react-router';

class InfoSectionItem extends Component {
  render() {

    const {
      infoSectionItemLink,
      infoSectionItemTitle
    } = this.props;

    return (
        <li className="dib mr2 mb2">
          <a href={infoSectionItemLink} className="rainbow-hover br2 fw4 f5 lh-copy db pa2 link black-30 ba b--black-10">
            {infoSectionItemTitle}
          </a>
        </li>
    );
  }
}

export default InfoSectionItem;
