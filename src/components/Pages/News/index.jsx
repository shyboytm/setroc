import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from '../../Footer';

class News extends Component {
  render() {
    return (
      <div id="News" className="relative black">

        <div className="w-100 bg-dot-grid bg-black-blue center pv4 ph0-ns z-0 tl">
          <div className="center w-90">
            <h1 className="f-subheadline-ns f1 fw3 lh-title blur-late white tracked-tiny">News</h1>
            <p className="fw5 f4 lh-subtitle measure white-90 mb5" style={{letterSpacing: 0.8 + "px"}}>
              I think it's hard to remember and give ourselves credit for our achievements. I wanted to be
              better at highlighting my own and updating you so here's a hub for what's going on in my work
              and personal life.
            </p>
          </div>
        </div>

        <div className="pt5 pb4">
          <div className="ba br2 b--blue bg-light-blue center pa4 w-90">
            <p>Testing This</p>
          </div>
        </div>

        <div className="pb5">
          <ul className="center list pl0 w-90">
            <li className="bb b--black-10 pv3">
              <Link to="/" className="dim flex items-center-ns flex-row-ns flex-column justify-between link">
                <h2 className="black fw5 f3 tracked-tiny">I'm Joining MetaLab!</h2>
                <span className="bg-text-clip black shine">Feb 5 2018</span>
              </Link>
            </li>
            <li className="bb b--black-10 pv3">
              <Link to="/" className="dim flex items-center-ns flex-row-ns flex-column justify-between link">
                <h2 className="black fw5 f3 tracked-tiny">Item Example Header</h2>
                <span className="bg-text-clip black shine">Item date</span>
              </Link>
            </li>
            <li className="bb b--black-10 pv3">
              <Link to="/" className="dim flex items-center-ns flex-row-ns flex-column justify-between link">
                <h2 className="black fw5 f3 tracked-tiny">Item Example Header</h2>
                <span className="bg-text-clip black shine">Item date</span>
              </Link>
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}

export default News;
