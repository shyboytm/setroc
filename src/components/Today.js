import React, { Component } from 'react';

class Today extends Component {

  constructor() {
      super();

      const today = new Date(),
            date = (today.getMonth()+1) + "."
                +  today.getDate() + "."
                + today.getFullYear().toString().substr(-2);

      const minutes = ("0" + today.getMinutes()).slice(-2);
      const hours = today.getHours();

      const time = hours + ':' + minutes;

      this.state = {
          date: date,
          time: time
      };
  }

  render() {

    return (
      <div className="black-70 flex f6 fw6 items-center">
        <span className="black f3 mr2">🌦</span>
        {this.state.date}<span className="black-20 ph2">|</span>{this.state.time}
      </div>
    );
  }
}

export default Today;
