import React, { Component } from 'react';

class Section extends Component {
  render() {

    const {
      id,
      title,
      description,
      number
    } = this.props;

    return (
      <div id={id} className="tl-ns tc flex flex-row-ns flex-column items-center justify-between mt5 mb3">
        <div>
          <h2 className="f2-ns f3 fw6 lh-title mt0 mb2 tracked-tiny">
            {title}
          </h2>
          <p className="fw5 f4 lh-subtitle measure-narrow black-60">
            {description}
          </p>
        </div>
        <span className="black-80 lh-copy f2-ns f3 fw6 mb0-ns mb3">
          {number}
        </span>
      </div>
    );
  }
}

export default Section;
