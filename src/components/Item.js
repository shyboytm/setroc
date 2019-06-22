import React, { Component } from 'react';
import classNames from 'classnames';

class Item extends Component {
  render() {

    const {
      type,
      color,
      children,
    } = this.props;

    var classes = ({
      // Defaults
      'black-60 f6 lh-copy mb3': true,
    });

    if (type === "bordered") {
      var classes = ({'bl b--black-10 black-60 bw2 f6 lh-copy mb3 pl3': true});
    }

    if (type === "bordered green") {
      var classes = ({'bl b--green black-60 bw2 f6 lh-copy mb3 pl3': true});
    }

    return (
      <li className={classNames(classes)}>
        {children}
      </li>
    );
  }
}

export default Item;
