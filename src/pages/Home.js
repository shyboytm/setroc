import React, { Component } from 'react';

import Card from '../components/Card';
import Item from '../components/Item';
import Title from '../components/Title';

class Home extends Component {
  render() {
    return (
      <div className="pt5 ph5">
        <Title>
          Hey Friend
        </Title>
        <div id="list" className="content-end flex flex-wrap">
          <Card title="Currently">
            <ul className="list pl0">
              <Item>
                Building the future of finance at Dave
              </Item>
            </ul>
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
