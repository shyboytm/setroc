import React, { Component } from 'react';

class Title extends Component {
  render() {

    const { title, toolTipText } = this.props;

    return (
      <div>
        <h2 className="f6 fw4 lh-subtitle black tooltip mv2 leitura ttu tracked">
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
