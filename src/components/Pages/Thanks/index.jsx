import React, { Component } from 'react';

class Thanks extends Component {
  render() {
    return (
      <div id="Thanks" className="animated fadeIn overflow-x-hidden-l">
        <div className="pv6-l pv5 tc w-80-ns center w-90">
          <h1 className="">Thanks for subscribing!</h1>
          <p className="lh-copy f5 black-60 measure-ns center">
            Of all the newsletters in the world, I'm glad mine is one that you trust to be in your inbox. We'll be in touch!
          </p>
          <a className="mt3 f6 link dim br2 ph3 pv2 dib white bg-blue ttu b tracked tc" href="http://cortes.us">Back to Website</a>
        </div>
      </div>
    );
  }
}

export default Thanks;
