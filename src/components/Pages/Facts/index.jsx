import React, { Component } from 'react';

import Header from '../../Header';

class Facts extends Component {
  render() {
    return (
      <div id="Facts" className="h-100 bg-black white">
        <Header />
        <div className="w-80 center pt6-l pt3">
          <h2 className="f1-ns f2 fw6">Yahaha! You found me!</h2>
          <article data-name="slab-stat">
            <h1>Today</h1>
            <dl className="dib mr5">
              <dd className="f6 f5-ns b ml0 fw4">Closed Issues</dd>
              <dd className="f3 f2-ns b ml0">1,024</dd>
            </dl>
            <dl className="dib mr5">
              <dd className="f6 f5-ns b ml0 fw4">Open Issues</dd>
              <dd className="f3 f2-ns b ml0">993</dd>
            </dl>
            <dl className="dib mr5">
              <dd className="f6 f5-ns b ml0 fw4">Next Release</dd>
              <dd className="f3 f2-ns b ml0">10-22</dd>
            </dl>
            <dl className="dib mr5">
              <dd className="f6 f5-ns b ml0 fw4">Days Left</dd>
              <dd className="f3 f2-ns b ml0">4</dd>
            </dl>
            <dl className="dib mr5">
              <dd className="f6 f5-ns b ml0 fw4">Favorite Cat</dd>
              <dd className="f3 f2-ns b ml0">All of Them</dd>
            </dl>
            <dl className="dib">
              <dd className="f6 f5-ns b ml0 fw4">App Downloads</dd>
              <dd className="f3 f2-ns b ml0">1,200</dd>
            </dl>
          </article>
        </div>
      </div>
    );
  }
}

export default Facts;
