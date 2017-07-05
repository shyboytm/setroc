import React, { Component } from 'react';
import { Link } from 'react-router';

class Logo extends Component {
  render() {
    return (
      <div id="Logo">
        <Link to="/" className="dim">
          <svg width="50" height="50">
          <path fill="#000" d="M40.1,5C37.6,2.4,34.2,1,30.6,1c-3.1,0-6,1-8.4,2.9C19.8,2,16.9,1,13.8,1c-3.6,0-7,1.4-9.5,3.9
          	C-1,10.2-1,18.8,4.3,24l17.9,17.9L40.1,24c2.5-2.5,3.9-5.9,3.9-9.5S42.7,7.5,40.1,5z M37.9,7.2L37.9,7.2c1.9,1.9,3,4.5,3,7.3
          	c0,2.2-0.7,4.3-2,6L24.6,6.2c1.7-1.3,3.8-2,6-2C33.3,4.2,35.9,5.3,37.9,7.2z M6.6,21.7c-4-4-4-10.5,0-14.5c1.9-1.9,4.5-3,7.3-3
          	s5.3,1.1,7.3,3l0,0l0,0l15.7,15.7L22.2,37.4L6.6,21.7z" />
          </svg>
        </Link>
      </div>
    );
  }
}

export default Logo;
