import React, { Component } from 'react';
import { Link } from 'react-router';

class CaseStudySelection extends Component {
  render() {
    return (
      <div className="w-33-l w-50-m w-100 dib ph3 pv2">
        <a href="#" className="pointer link">
          <div className="h5 pv3 ph4 br3 bg-animate bg-blue">
            <h3 className="bottom-2 relative mv0 fw4 f2-ns f3 lh-title white">Lumi</h3>
            <p className="bottom-2 relative white-50 mt0 lh-copy">Illustration</p>
          </div>
        </a>
      </div>
    );
  }
}

export default CaseStudySelection;
