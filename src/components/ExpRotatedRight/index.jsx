import React, { Component } from 'react';

class ExpRotatedRight extends Component {
  render() {

    const { year } = this.props;

    return (
      <div id="ExpRotatedRight" className="items-end nr4-l nr2 dib ph4 pv3 bg-white w5 rotate-10 shadow-large">
         <h2 className="f5 b center mw6">{year}</h2>
         <ul className="list pl0 ml0 center mw6">
           {this.props.children}
         </ul>
      </div>
    );
  }
}

export default ExpRotatedRight;
