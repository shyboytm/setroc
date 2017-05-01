import React, { Component } from 'react';

class TitleParagraph extends Component {
  render() {

    const {
      title,
      toolTipText,
      paragraph
    } = this.props;

    return (
        <div>
          <h2 className="f2 fw4 tooltip mb2">
            {title}
            <span className="tooltiptext">
              {toolTipText}
            </span>
          </h2>
          <p className="fw4 f5 pb3 black-60 lh-copy measure">
            {paragraph}
          </p>
        </div>
    );
  }
}

export default TitleParagraph;
