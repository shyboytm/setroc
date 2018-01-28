import React, { Component } from 'react';

class Title extends Component {
  render() {

    const { title, toolTipText } = this.props;

    return (
      <div>
        <h2 className="f6 i fw7 lh-subtitle black tooltip mb2 mt0 dib tracked ttu">
          {title}
          <span className="black fs-normal tooltiptext f3">
            {toolTipText}
          </span>
        </h2>
      </div>
    );
  }
}

export default Title;
