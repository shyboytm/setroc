import React, { Component } from 'react';
import classNames from 'classnames';

import H from './H';

class Card extends Component {
  render() {

    const {
      children,
      color,
      description,
      href,
      image,
      name,
      size
    } = this.props;

    var classes = ({
      // Defaults
      'card items-start pr4-l pr3-m pb4 relative w-33-l w-50-m w-100': true,

      // Type Color
      // 'blue':    color === 'blue',
      // 'black':   color === 'black',
    });

    if (size === 1 ) {
      var classes = ({'card items-start pr4-l pr3-m pr0 pb4 relative w-100': true});
    }

    if (size === 2) {
      var classes = ({'card items-start pr4-l pr3-m pr0 pb4 relative w-two-thirds-l w-50-m w-100': true});
    }

    if (size === 3) {
      var classes = ({'card items-start pr4-l pr3-m pr0 pb4 relative w-33-l w-50-m w-100': true});
    }

    if (size === .5) {
      var classes = ({'card items-start pr4-l pr3-m pr0 pb4 relative w-50-l w-100': true});
    }

    return (
      <div className={classNames(classes)}>
        <a href={href} target="_blank" rel="nofollow" className="bg-white-30 dib br4 link pointer shadow up">
          <div className="br3 grow relative w-100">
            <img className="br3 shadow" src={image} alt="sounder" />
          </div>
          <div className="ph3 pt2 pb3" >
            <H size={6} color={color}>{name}</H>
            <p className="black-40 f6 lh-copy mv0">
              {description}
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default Card;