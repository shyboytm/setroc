import React, { Component } from 'react';

class Today extends Component {

  constructor() {
      super();

      var   today = new Date(),
            date = (today.getMonth()+1) + "/"
                +  today.getDate() + "/"
                + today.getFullYear();
      const time = today.getHours() + ':' + today.getMinutes();

      this.state = {
          date: date,
          time: time
      };
  }

  render() {

    return (
      <div>
        {this.state.time}<br />
        {this.state.date}
      </div>
    );
  }
}

export default Today;
