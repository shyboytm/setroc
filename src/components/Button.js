import React, { Component } from 'react';
import classNames from 'classnames';

class Button extends Component {
  render() {

    const {
      color,
      href,
      name
    } = this.props;

    var classes = ({
      // Defaults
      'bg-black-05 black-70 br3 dib f6 fw6 hover-light-purple link mr2 mb2 ph3 pv1 pointer shadow up': true,

      // Type Color
      // 'blue':    color === 'blue',
      // 'black':   color === 'black',
    });

    if (color === "white" ) {
      var classes = ({'bg-white blue br3 dib f6 fw6 hover-light-purple link nr3 ph3 pv1 pointer shadow up': true});
    }

    if (color === "white" ) {
      var textColor = ({'bg-text-clip shine': true});
    }

    return (
      <a href={href} target="_blank" rel="nofollow"
         className={classNames(classes)}>
        <span className={classNames(textColor)}>{name}</span>
      </a>
    );
  }
}

export default Button;
