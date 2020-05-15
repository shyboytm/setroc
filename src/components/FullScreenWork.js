import React, { Component } from 'react';


class FullScreenWork extends Component {
  render() {

    const {
      image
    } = this.props;

    return (
      <div className="bg-black pa5 w-100">
        <h1 className="white">Eagleview</h1>
        <p className="white-70">
          A product that helps contractors get accurate home reports and track their projects.
        </p>
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
