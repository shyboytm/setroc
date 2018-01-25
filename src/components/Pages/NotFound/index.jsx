import React, { Component } from 'react';

class NotFound extends Component {
  render() {

    return (
      <div id="Not Found" className="animated fadeIn black vh-75 tc flex flex-column items-center justify-center smooth-text">
        <h1 className="f3 mb1 shine bg-text-clip">(╯°□°）╯︵ ┻━┻</h1>
        <h2 className="f2-ns f3 fw4 mb5 lh-title">Hm, there's nothing here,<br />are you lost?</h2>
        <a className="link bn fw6 f6 ttu dib button-reset dim ph3 pv2 tc white bg-gradient pointer br2 mt3" href="/">Back Home</a>
      </div>
    );
  }
}

export default NotFound;
