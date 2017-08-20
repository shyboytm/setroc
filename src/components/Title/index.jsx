import React, { Component } from 'react';

class Title extends Component {
  render() {

    const { title, toolTipText } = this.props;

    return (
      <div>
        <h2 className="f4 fw6 lh-subtitle black tooltip mv2 system">
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
