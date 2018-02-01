import React, { Component } from 'react';

class NewsItem extends Component {
  render() {

    const {
      date,
      linkTo,
      title
    } = this.props;

    return (
      <li className="bb b--black-10 pv4 tl">
        <a href={linkTo} className="black flex items-center-l flex-row-l flex-column hover-light-purple justify-between link">
          <h2 className="flex-auto fw6 f3-l f4 mv0-l mb1 tracked-tiny">{title}</h2>
          <span className="black-60 fw5 mh3-l mr4 mv0-l mb3 mt1">{date}</span>
          <span className="bg-text-clip shine fw6 ttu tracked">Read &rarr;</span>
        </a>
      </li>
    );
  }
}

export default NewsItem;
