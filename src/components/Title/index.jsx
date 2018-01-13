import React, { Component } from 'react';

class Title extends Component {
  render() {

    const { title, toolTipText } = this.props;

    return (
      <div>
        <h2 className="f6 fw5 i lh-subtitle blue tooltip mv2 ttu tracked dib">
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
