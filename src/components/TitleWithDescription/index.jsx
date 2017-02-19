import React, { Component } from 'react';
import { Link } from 'react-router';

class TitleWithDescription extends Component {
  render() {
    return (
      <div className="w-50-ns w-90 dib pa2 br3 bg-animate hover-bg-black-05">
        <h3 className="mb0 fw4 f2 lh-title">Design Portfolio</h3>
        <p className="black-50">Most recent design work and experiments.</p>
      </div>
    );
  }
}

export default TitleWithDescription;
