import React, { Component } from 'react';

class Thanks extends Component {
  render() {
    return (
      <div id="Thanks" className="animated fadeIn overflow-x-hidden-l">
        <div className="pv6-l pv5 tc w-80-ns center w-90">
          <h1 className="leitura fw4">Thanks for subscribing!</h1>
          <p className="lh-copy f5 black-60 measure-ns center">
            Of all the newsletters in the world, I'm glad mine is one that you trust to be in your inbox. We'll be in touch!
          </p>
          <a className="link bn fw6 f6 ttu dib button-reset dim ph3 pv2 tc white bg-gradient pointer br2 mt3" href="/">Back Home</a>
        </div>
      </div>
    );
  }
}

export default Thanks;
