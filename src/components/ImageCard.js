import React, { Component } from 'react';
import classNames from 'classnames';

import Button from './Button';
import H from './H';

class ImageCard extends Component {
  render() {

    const {
      children,
      description,
      href,
      image,
      name,
      price,
      size
    } = this.props;

    var classes = ({
      // Defaults
      'card items-start pr4-l pr3-m pb4 relative w-25-l w-50-m w-100': true,

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
        <a href={href} target="_blank" rel="nofollow" className="dib br4 link pointer up">
          <div className="br3 grow relative w-100">
            <img className="br3 shadow" src={image} alt={name} />
          </div>
          <div className="pt3 pb4" >
            <div className="flex items-center justify-between">
              <H size={3}>{name}</H>
              <div className="nr2">
                <Button href={href} name="View" />
              </div>
            </div>
            <p className="black-70 f5 lh-copy mt2 mb0">
              {description}
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default ImageCard;
