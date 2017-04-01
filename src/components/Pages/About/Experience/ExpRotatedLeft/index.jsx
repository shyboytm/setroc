import React, { Component } from 'react';

class ExpRotatedRight extends Component {
  render() {

    const { year } = this.props;

    return (
      <div id="ExpRotatedRight" className="items-end w-20-l w-33-m w-50 dib ph4-l ph3-l pv3-l pv2 bg-white-l rotate--10 shadow-large-l mb3">
         <h2 className="f5 b center mw6 black-40">{year}</h2>
         <ul className="list pl0 ml0 center lh-copy">
           {this.props.children}
         </ul>
      </div>
    );
  }
}

export default ExpRotatedRight;
