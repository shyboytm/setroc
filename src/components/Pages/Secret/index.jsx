import React, { Component } from 'react';

import Header from '../../Header';

class Facts extends Component {
  render() {
    return (
      <div id="Facts" className="h-100 bg-black white">
        <Header />
        <div className="mt5-l pv7-ns pv4 bg-gif">
          <h1 className="f-headline tc fw4">秘密の<span className="absolute spin">!</span></h1>
        </div>
        <div className="w-80 center pt6-l pt3">
          <h2 className="f1-ns f2 fw6">Yahaha! You found me!</h2>
          <p className="white-70 mb4 measure f4 lh-subtitle">
            This was supposed to be a secret, so I'm not sure how you got here.
            But, since you're here, I might as well be polite, right? Anyways, this
            page is a place for me to have fun. I post things here that I don't share
            very publicly because then the fun goes away.
          </p>
          <p className="white-70 mb4 measure f4 lh-subtitle">
            What you see here probably doesn't meet the trends you see in this
            industry and I don't want to be hired to make things like this, so I
            post them here for myself. Well, now for you too I guess. Just don't
            show anyone else, okay?
          </p>
          <article data-name="slab-stat">
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
