import React, { Component } from 'react';
import classNames from 'classnames';

class Item extends Component {
  render() {

    const {
      type,
      children,
    } = this.props;

    var classes = ({
      // Defaults
      'black-70 dib f6 lh-copy mb3 w-50-l w-100 fl-l': true,
    });

    if (type === "bordered") {
      var classes = ({'bl b--black-10 black-70 bw2 f6 lh-copy mb3 pl3': true});
    }

    if (type === "no spacing") {
      var classes = ({'black-70 f6 lh-copy': true});
    }

    return (
      <li className={classNames(classes)}>
        {children}
      </li>
    );
  }
}

export default Item;
