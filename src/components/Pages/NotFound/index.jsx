import React, { Component } from 'react';

import Footer from '../../Footer';
import Item from '../../Item';
import Title from '../../Title';

class NotFound extends Component {
  render() {

    return (
      <div id="Not Found" className="animated fadeIn black vh-75 flex flex-column items-center justify-center">
        <h1 className="f3 fw4 mb1 shine bg-text-clip">(╯°□°）╯︵ ┻━┻</h1>
        <h2 className="f2-ns f3 fw5 mb5">Hm, there's nothing here.</h2>
        <a className="link bn fw6 f6 ttu dib button-reset dim ph3 pv2 tc white bg-gradient pointer br2 mt3" href="/">Back Home</a>
      </div>
    );
  }
}

export default NotFound;
