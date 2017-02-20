import React, { Component } from 'react';
import { Link } from 'react-router';

class TitleWithDescription extends Component {
  render() {

    const {
      selectionLink,
      selectionTitle,
      selectionDescription
    } = this.props;

    return (
      <div className="w-50-l w-80-m w-100 dib ph3 pv2">
        <a href={selectionLink} className="pointer link">
          <div className="pv3 ph4 br3 bg-animate hover-bg-black-05">
            <h3 className="mv0 fw4 f2-ns f3 lh-title black">{selectionTitle}</h3>
            <p className="black-50 mb0 lh-copy">{selectionDescription}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default TitleWithDescription;
