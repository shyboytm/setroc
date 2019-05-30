import React, { Component } from 'react';

import Card from '../components/Card';
import Title from '../components/Title';

class Home extends Component {
  render() {
    return (
      <div className="pt5 ph5">
        <Title />
        <div id="list" className="content-end flex flex-wrap">
          <Card>
            Yo yo yo
          </Card>
          <Card>
            Yo yo yo
          </Card>
          <Card>
            Yo yo yo
          </Card>
          <Card>
            Yo yo yo
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
