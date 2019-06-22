import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card items-start pr4 pb4 relative w-33-l w-50-m w-100">
        <div className="bg-white-40 br4 overflow-hidden shadow">
          <div className="black-30 b bb b--black-10 f6 ph4 pv3 tracked ttu">
            {this.props.title}
          </div>
          <div className="ph4 pv3" >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
