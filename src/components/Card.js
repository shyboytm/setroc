import React, { Component } from 'react';
import classNames from 'classnames';

import Button from './Button';

class Card extends Component {
  render() {

    const {
      buttonText,
      href,
      size,
      children,
      title
    } = this.props;

    var classes = ({
      // Defaults
      'card items-start pr4-l pb4 relative w-33-l w-50-m w-100': true,

      // Type Color
      // 'blue':    color === 'blue',
      // 'black':   color === 'black',
    });

    if (size === 1 ) {
      var classes = ({'card items-start pr4-l pr3-m pr0 pb4 relative w-100': true});
    }

    if (size === 2) {
      var classes = ({'card items-start pr4-l pr3-m pr0 pb4 relative w-two-thirds-l w-100': true});
    }

    if (size === 3) {
      var classes = ({'card items-start pr4-l pr3-m pr0 pb4 relative w-33-l w-100': true});
    }

    if (size === .5) {
      var classes = ({'card items-start pr4-l pr3-m pr0 pb4 relative w-50-l w-100': true});
    }

    return (
      <div className={classNames(classes)}>
        <div className="bg-white-30 br4 overflow-hidden shadow">
          <div className="black-30 b bb b--black-05 f6 flex items-center justify-between ph4 pv3">
            <span className="tracked ttu">{title}</span>
            {buttonText &&
            <div>
              <Button color="white" href={href} name={buttonText}>
                {buttonText}
              </Button>
            </div>}
          </div>
          <div className="ph4 pv3" >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
