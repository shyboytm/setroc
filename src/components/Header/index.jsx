import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <div className="bg-black-90 pa4">
        <div className="flex flex-wrap w-100">
          <Link to="/" className="bl bt bb b--white bg-animate hover-bg-white-20 link flex-auto pa4-ns pa3 pointer ttu tracked f7 white">
            Dennis Cortés
          </Link>
          <a href="/" className="bl bt bb b--white bg-animate hover-bg-white-20 link pointer pa4-ns pa3 ttu tracked f7 white">
            Work ↗
          </a>
          <Link className="bl bt bb b--white bg-animate hover-bg-white-20 pa4-ns pa3 pointer ttu tracked f7 white">
            Mentoring
          </Link>
          <Link className="bl bt bb b--white bg-animate hover-bg-white-20 pa4-ns pa3 pointer ttu tracked f7 white">
            Tools
          </Link>
          <a href="/" className="bl bt bb b--white bg-animate hover-bg-white-20 link pointer pa4-ns pa3 ttu tracked f7 white">
            Inspo ↗
          </a>
          <a href="/" className="ba b--white bg-animate hover-bg-white-20 link pointer pa4-ns pa3 ttu tracked f7 white">
            Blog ↗
          </a>
        </div>
        <div className="bl bb br b--white flex items-center ph4 pv3 w-100">
          <div className="flex-auto">
            <span className="ttu tracked f7 o-50 white">
              Designer and Illustrator that codes
            </span>
          </div>
          <a href="/" className="b--white bg-animate hover-bg-white-20 fw6 link pointer ttu tracked shine bg-text-clip f7 white">
            hi@cortes.us
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
