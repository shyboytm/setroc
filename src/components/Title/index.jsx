import React, { Component } from 'react';

class Title extends Component {
  render() {

    const { title, toolTipText } = this.props;

    return (
      <div>
        <h2 className="f3 fw4 lh-title black-60 tooltip mt0">
          {title}
          <span className="black tooltiptext">
            {toolTipText}
          </span>
        </h2>
      </div>
    );
  }
}

export default Title;
