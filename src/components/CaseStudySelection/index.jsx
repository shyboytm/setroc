import React, { Component } from 'react';
import { Link } from 'react-router';

class CaseStudySelection extends Component {
  render() {

    const {
      caseStudyTitle,
      caseStudyDescription,
      caseStudyBackground
    } = this.props;

    return (
      <div className="w-33-l w-50-m w-100 dib ph3 pv2 mb3">
        <a href="#" className="pointer link">
          <div className="h5 relative overflow-hidden br3 shadow-custom">
            <img className="absolute cover" src={caseStudyBackground} />
            <div className="absolute w-100 h-100 bg-black-60">
              <h3 className="bottom-0 mt4 mb0 pt6 pl3 relative fw4 f2 lh-title white">{caseStudyTitle}</h3>
              <p className="bottom-0 pl3 relative white-70 mt1 f4 lh-copy">{caseStudyDescription}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default CaseStudySelection;
