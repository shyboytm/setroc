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
          <p className="white-70 mb4 measure f4-ns f5 lh-subtitle">
            This was supposed to be a secret, so I'm not sure how you got here.
            But, since you're here, I might as well be polite, right? Anyways, this
            page is a place for me to have fun. I post things here that I don't share
            very publicly because then the fun goes away. It consists of things I like
            and things that I make.
          </p>
          <p className="white-70 mb5 measure f4-ns f5 lh-subtitle">
            What you see here probably doesn't meet the trends you see in this
            industry, so I post them here for myself. Well, now for you too I guess.
            Just don't show anyone else, okay?
          </p>
          <div className="mb5">
            <dl className="dib mr5">
              <dd className="f5 b ml0 fw4">Artwork Made</dd>
              <dd className="f2 b ml0">0</dd>
            </dl>
            <dl className="dib mr5">
              <dd className="f5 b ml0 fw4">Shinies Caught</dd>
              <dd className="f2 b ml0">23</dd>
            </dl>
          </div>
          <h2 className="f2 fw4">Things I Made</h2>
          <div className="cf pv3 masonry mb4">
            <SecretImage imageSource="http://wip.cortes.us/static/media/flower-shop.gif" />
          </div>
          <h2 className="f2 fw4">Things I Like</h2>
          <div className="cf pv3 masonry mb4">
            <SecretImage imageSource="http://wip.cortes.us/static/media/28.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/27.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/26.png" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/25.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/24.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/23.png" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/22.png" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/21.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/20.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/19.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/18.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/17.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/16.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/15.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/14.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/13.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/12.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/11.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/10.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/9.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/8.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/7.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/6.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/5.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/4.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/3.png" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/2.jpg" />
            <SecretImage imageSource="http://wip.cortes.us/static/media/1.jpg" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Facts;
