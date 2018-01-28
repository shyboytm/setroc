import React, { Component } from 'react';

import Footer from '../../Footer';
import Section from '../../Section';
import Title from '../../Title';

class Mentoring extends Component {
  render() {
    return (
      <div id="Mentoring" className="relative black">

        <div className="w-100 bg-dot-grid center pv4 ph0-ns z-0 tc smooth-text">
          <div className="animated fadeInUp center w-90">
            <h1 className="f-headline-ns f1 fw8 lh-title mb3 tracked-tiny">Folder</h1>
            <p className="black-60 center fw6 f4 lh-subtitle measure mb5 tracked-tiny">
              A monthly newsletter by Dennis Cortés
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Mentoring;
