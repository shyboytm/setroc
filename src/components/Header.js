import React, { Component } from 'react';

import Logo from './Logo';
import Today from './Today';

class Header extends Component {
  render() {

    const dennisCortes = require("../img/dennis-cortes-product-designer.jpeg")

    return (
      <div className="flex pa4 justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <h1 style={{"fontSize" : "0"}}>Dennis Cortés</h1>
          <a href="/" className="black-70 f7 fw6 hover-light-purple ttu tracked link mh4 up">
            Home
          </a>
          <a href="https://trademarked.store" target="blank" className="black-70 f7 fw6 hover-light-purple ttu tracked link mr4 up">
            Shop
          </a>
          <a href="mailto:hi@cortes.us" className="black-70 f7 fw6 hover-light-purple ttu tracked link mr4 up">
            Contact
          </a>
          {/*<div className="bg-white br-100 dib h2 w2 shadow-colored bg-white ml2 overflow-hidden">
            <img src={dennisCortes} alt="Dennis Cortés front portrait view from torso up"/>
          </div>*/}
        </div>
        <div className="flex">
          {/*
          <div className="br-pill bg-white-20 flex items-center shadow">
            <a href="#" className="dim ph3 pt1">
              <img src='https://icon.now.sh/restore/696969' alt='vintage restore icon' />
            </a>
            <a href="#" className="dim bl b--black-10 ph3 pt1">
              <img src='https://icon.now.sh/today/696969' alt='modern today icon' />
            </a>
          </div>*/}
          <div className="pl4">
            <Today />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
