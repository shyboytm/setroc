import React, { Component } from 'react';
import classNames from 'classnames';

const  SIZE_TO_ELEMENT_MAP = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
};

function chooseHeaderTag(size) {
  return SIZE_TO_ELEMENT_MAP[size] || 'h3';
}

class Header extends Component {
  render() {

    const {
      color,
      size,
      children
    } = this.props;

    var classes = ({
      // Defaults
      'black-70 lh-copy': true,
    });

    if (size === 1 ) {
      var classes = ({'black-70 f2 fw6 mb2': true});
    }

    if (size === 2 ) {
      var classes = ({'black-70 f3 fw6 db': true});
    }

    if (size === 3 ) {
      var classes = ({'black-70 f4 fw6': true});
    }

    if (size === 5 ) {
      var classes = ({'black-40 fw6 mb0 tracked ttu': true});
    }

    if (size === 6 ) {
      var classes = ({'black-70 f5 fw6 mt0 mb2': true});
    }

    this.headerTag = chooseHeaderTag(size);
    return (
      <this.headerTag
          className={classNames(classes)}>
        <span className={color}>
          {children}
        </span>
      </this.headerTag>
    );
  }
}

export default Header;
