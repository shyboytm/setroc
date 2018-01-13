import React, { Component } from 'react';

class Title extends Component {
  render() {

    const { title, toolTipText } = this.props;

    return (
      <div>
        <h2 className="f6 i fw4 lh-subtitle black leitura tooltip mv2 dib tracked ttu">
          {title}
          <span className="black fs-normal tooltiptext">
            {toolTipText}
          </span>
        </h2>
      </div>
    );
  }
}

export default Title;
