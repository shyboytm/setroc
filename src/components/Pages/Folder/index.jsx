import React, { Component } from 'react';

import Footer from '../../Footer';
import Section from '../../Section';
import Title from '../../Title';

class Mentoring extends Component {
  render() {
    return (
      <div id="Mentoring" className="relative black">

        <div className="w-100 bg-dot-grid center pv4 ph0-ns z-0 tc smooth-text">
          <div className="center w-90">
            <span className="f-subheadline-ns f1 db mt5">📂</span>
            <h1 className="bg-text-clip f-headline-ns f-subheadline fw8 lh-title mb3 mt4 shine tracked-tiny">Folder</h1>
            <p className="animated fadeInUp black-60 center fw6 f4 lh-subtitle measure mb5 tracked-tiny">
              A monthly newsletter by Dennis Cortés
            </p>
            <ul className="animated fadeIn cf list pl0 tl">
              <li className="bl b--black-10 br1 fl mv2 ph3 w-25-l w-50-m w-100">
                <Title className="fw6 mt0" toolTipText="📦" title="Resources"></Title>
                <p className="black-60 mt2 mb0">
                  Every month I'll send a few articles, products, or other links that
                  I thought were cool.
                </p>
              </li>
              <li className="bl b--black-10 br1 fl mv2 ph3 w-25-l w-50-m w-100">
                <Title className="fw6 mt0" toolTipText="👏" title="Project Updates"></Title>
                <p className="black-60 mt2 mb0">
                  I'm always working on new projects, Folder will be a great place to see
                  new things I ship.
                </p>
              </li>
              <li className="bl b--black-10 br1 fl mv2 ph3 w-25-l w-50-m w-100">
                <Title className="fw6 mt0" toolTipText="😻" title="Cool People"></Title>
                <p className="black-60 mt2 mb0">
                  There are plenty of people that inspire me and my work, I'll
                  be sharing them here.
                </p>
              </li>
              <li className="bl b--black-10 br1 fl mv2 ph3 w-25-l w-50-m w-100">
                <Title className="fw6 mt0" toolTipText="🗑" title="No s#!% (Spam)"></Title>
                <p className="black-60 mt2 mb0">
                  I don't like using the S word around here, so I'll never put s#!% in your
                  inbox either.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Mentoring;
