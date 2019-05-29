import React, { Component } from 'react';

import Card from '../components/Card';

class Home extends Component {
  render() {
    return (
      <div className="pt6 ph4">
        <div className="content-end flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
