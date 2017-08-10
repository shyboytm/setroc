import React, { Component } from 'react';

class Item extends Component {
  render() {

    const {
      description,
      image,
      stars,
      title
    } = this.props;

    return (
      <div className="item ph4 pv3">
        <a href="#" className="link pointer black hover-black-30">
          <img src={this.props.image} className="no-drag w-100 bg-black-05 shadow-large mb2 br2" />
          <h1 className="fw6 f4 mb1 lh-copy">{this.props.title}</h1>
          <p className="lh-copy f5 black-60 mv1">
            {this.props.description}
          </p>
          <span>{this.props.stars}</span>
        </a>
      </div>
    );
  }
}

export default Item;
