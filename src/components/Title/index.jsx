import React, { Component } from 'react';

class Title extends Component {
  render() {

    const { title, toolTipText } = this.props;

    return (
      <div>
        <h2 className="f3 fw6 lh-subtitle black tooltip mv2 gentium i">
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
