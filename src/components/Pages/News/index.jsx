import React, { Component } from 'react';

import Footer from '../../Footer';
import Section from '../../Section';
import Title from '../../Title';

class News extends Component {
  render() {
    return (
      <div id="News" className="relative black">

        <div className="w-100 bg-dot-grid bg-black-blue center pv4 ph0-ns z-0 tl">
          <div className="center w-90">
            <h1 className="f-subheadline-ns f1 fw3 lh-title blur-late white tracked-tiny">News</h1>
            <p className="fw5 f4 lh-subtitle measure white-90 mb5" style={{letterSpacing: 0.8 + "px"}}>
              I'm here to help. After many requests for a mentorship service from me and my own personal views on the value of mentoring,
              you can now book a 1-on-1 45-minute chat with me.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default News;
