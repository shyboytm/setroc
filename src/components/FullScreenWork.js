import React, { Component } from 'react';


class FullScreenWork extends Component {
  render() {

    const {
      image
    } = this.props;

    return (
      <div className="bg-black pa5 w-100">
        <h1 className="white">hello</h1>
        <div className="flex justify-between">
            <div className="w-50 pr4">
                <img className="br3" src={image}></img>
            </div>
            <div className="w-50 pr4">
                <img className="br3" src={image}></img>
            </div>
        </div>
      </div>
    );
  }
}

export default FullScreenWork;
