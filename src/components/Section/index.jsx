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
      <div id={id} className="tl-ns tc bb b--black-10 pb3 mb4 flex flex-row-ns flex-column items-center justify-between mt5">
        <div>
          <h2 className="shine bg-text-clip f3-ns f4 fw4 lh-title leitura mt0 mb2">
            {title}
          </h2>
          <p className="fw4 lh-copy measure-narrow black-60">
            {description}
          </p>
        </div>
        <span className="lh-copy f2-ns f4 fw6 mb0-ns mb3">
          {number}
        </span>
      </div>
    );
  }
}

export default Section;
