import React, { Component } from 'react';

import Shoe from './Shoe';

import shoes from './shoes';

class ShoeList extends Component {

  constructor() {
    super();
    // get the initial state
    this.state = {
      shoes
    };
  }

  render() {
    return (
      <div>
        <ul className="content-end flex flex-wrap list overflow-hidden ph3">
          {
            Object.keys(this.state.shoes)
            .map(key => <Shoe
                          key={key}
                          index={key}
                          details={this.state.shoes[key]}
                        />)
          }
        </ul>
      </div>
    );
  }
}

export default ShoeList;
