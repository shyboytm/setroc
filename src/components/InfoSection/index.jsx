import React, { Component } from 'react';
import { Link } from 'react-router';

import InfoSectionItem from '../InfoSectionItem';

class InfoSection extends Component {
  render() {

    const {
      infoSectionTitle,
      infoSectionDescription
    } = this.props;

    return (
      <div className="w-33-l w-50-m w-100 ph4 items-start">
        <h2 className="ttu f5 tracked">{infoSectionTitle}</h2>
        <p className="lh-copy black-60">{infoSectionDescription}</p>
        <ul className="list pl0 pt2 pb3">{this.props.children}</ul>
      </div>
    );
  }
}

export default InfoSection;
