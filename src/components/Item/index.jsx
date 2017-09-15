import React, { Component } from 'react';

class Item extends Component {
  render() {

    const {
      description,
      href,
      image,
      stars,
      title
    } = this.props;

    return (
      <div className="item ph3 pv3">
        <div className="bg-white ba b--black-10 shadow-large br2 pa3">
          <a href={href} className="link pointer black hover-black-30 no-outline">
            <img src={image} className="no-drag w-100 bg-black-05 shadow-large mb2 br2" />
            <h1 className="fw6 f4 mb1 lh-copy">{title}</h1>
            <p className="lh-copy f5 black-60 mv1">
              {description}
            </p>
            <span>{stars}</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Item;
