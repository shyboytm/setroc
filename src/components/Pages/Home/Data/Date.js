import React, { Component } from 'react';

class Today extends Component {

  constructor() {
      super();

      var today = new Date(),
          date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      this.state = {
          date: date
      };
  }

  render() {

    return (
      <div>
        {this.state.date}
      </div>
    );
  }
}

export default Today;
