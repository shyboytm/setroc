import React, { Component } from 'react';

import Footer from '../../Footer';
import Item from '../../Item';
import Title from '../../Title';

class Books extends Component {
  render() {

    const macBookPro = require('../../../img/tools/setup/macbook-pro-13-inch.jpg');
    const roostStand = require('../../../img/tools/setup/roost-laptop-stand.jpg');

    return (
      <div id="Books" className="animated fadeIn black">

        <div className="w-50-l w-75-m w-90 center mv5-ns mv4 ph0-ns ph3 z-0 tc">
          <h1 className="f2-ns f3 fw4 lh-title leitura">Tools</h1>
          <p className="f5 fw4 lh-copy center measure black-60">
            These are the tools I use on a daily basis for work and life.
            Everything from apps I use to games I play. Enjoy!
          </p>
          <Title title="Last Updated Sep. 28th" />
          {/* Shortcuts */}
          <ul className="list ph0 pv4">
            <li className="dib mr3">
              <a href="#Setup" className="f6 fw4 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                Setup
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Setup" className="f6 fw4 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                Every Day
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Setup" className="f6 fw4 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                Apps
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Setup" className="f6 fw4 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                Gaming
              </a>
            </li>
            <li className="dib mr3">
              <a href="#Setup" className="f6 fw4 br-pill db pv2 ph3 link black bg-black-10 hover-bg-black-20">
                Coffee
              </a>
            </li>
          </ul>
        </div>

        <div className="w-60-l w-90 center mv5">
            {/* Setup */}
            <div id="Setup" className="bb b--black-10 pb3 mb4 flex items-center justify-between">
              <h2 className="f3-ns f4 fw6 lh-title mv0">
                Setup
              </h2>
              <span className="black-60">12 Items</span>
            </div>
            <div className="content-end flex flex-wrap">
              <Item
                href="https://www.apple.com/macbook-pro"
                image={macBookPro}
                title='MacBook Pro 13"'
                description="8GB RAM, 128GB SSD, 2.3 GHz i5" />
              <Item
                href="http://amzn.to/2jxqf42"
                image={roostStand}
                title='Roost Laptop Stand'
                description="Stand for improving posture" />
            </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Books;
