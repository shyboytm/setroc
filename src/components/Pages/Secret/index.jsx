import React, { Component } from 'react';

import Header from '../../Header';
import Footer from '../../Footer';
import SecretImage from './SecretImage';

class Facts extends Component {
  render() {



    return (
      <div id="Facts" className="h-100 bg-black white">
        <Header />
        <div className="pv7-ns pv4 bg-gif">
          <h1 className="f0 tc fw4">秘密の!</h1>
        </div>
        <div className="w-80 center pt6-l pt3">
          <h2 className="f1-ns f2 fw6">Yahaha! You found me!</h2>
          <p className="white-70 mb4 measure f4 lh-subtitle">
            This was supposed to be a secret, so I'm not sure how you got here.
            But, since you're here, I might as well be polite, right? Anyways, this
            page is a place for me to have fun. I post things here that I don't share
            very publicly because then the fun goes away. It consists of things I like
            and things that I make.
          </p>
          <p className="white-70 mb5 measure f4 lh-subtitle">
            What you see here probably doesn't meet the trends you see in this
            industry, so I post them here for myself. Well, now for you too I guess.
            Just don't show anyone else, okay?
          </p>
          <h2 className="f2 fw4">Things I Made</h2>
          <div className="cf pv3 masonry mb4">
            <SecretImage imageSource="http://wip.cortes.us/static/media/flower-shop.gif" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/6.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/5.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/4.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/3.png" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/2.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/1.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/4.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/3.png" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/2.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/1.jpg" />
          </div>
          <h2 className="f2 fw4">Things I Like</h2>
          <div className="cf pv3 masonry mb4">
            <SecretImage imageSource="http://wip.cortes.us/static/media/flower-shop.gif" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/6.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/5.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/4.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/3.png" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/2.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/1.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/4.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/3.png" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/2.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/1.jpg" />
          </div>
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
        <Footer />
      </div>
    );
  }
}

export default Facts;
