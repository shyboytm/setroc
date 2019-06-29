import React, { Component } from 'react';

import Logo from './Logo';
import Today from './Today';

class Header extends Component {
  render() {

    const dennisCortes = require("../img/dennis-cortes-product-designer.jpeg")

    return (
      <div className="flex-ns pa4 justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <h1 style={{"fontSize" : "0"}}>Dennis Cortés</h1>
          <a href="/" className="black-70 f7 fw6 hover-light-purple ttu tracked link mh4 up">
            Home
          </a>
          <a href="https://trademarked.store" target="blank" className="black-70 f7 fw6 hover-light-purple ttu tracked link mr4 up">
            Shop
          </a>
          <span href="mailto:hi@cortes.us" className="black-30 dib-ns dn f7 fw6 relative ttu tracked link mr4">
            Tools <br />
            <span className="absolute right-1 tc top-1 ttu" style={{"fontSize" : "8px", "letterSpacing" : "0px"}}>soon</span>
          </span>
          <span href="mailto:hi@cortes.us" className="black-30 dib-ns dn f7 fw6 relative ttu tracked link mr4">
            Music <br />
            <span className="absolute right-1 tc top-1 ttu" style={{"fontSize" : "8px", "letterSpacing" : "0px"}}>soon</span>
          </span>
          <a href="mailto:hi@cortes.us" className="black-70 f7 fw6 hover-light-purple ttu tracked link up">
            Contact
          </a>
          {/*<div className="bg-white br-100 dib h2 w2 shadow-colored bg-white ml2 overflow-hidden">
            <img src={dennisCortes} alt="Dennis Cortés front portrait view from torso up"/>
          </div>*/}
        </div>
        <div className="dib-ns dn pl4">
          <Today />
        </div>
      </div>
    );
  }
}

export default Header;
