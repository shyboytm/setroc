import React, { Component } from 'react';
import { Link } from 'react-router';

class NewsItem extends Component {
  render() {

    const {
      date,
      linkTo,
      title
    } = this.props;

    return (
      <li className="bb b--black-10 pv3">
        <Link to={linkTo} className="black flex items-center-ns flex-row-ns flex-column hover-light-purple justify-between link">
          <h2 className="flex-auto fw5 f3 tracked-tiny">{title}</h2>
          <span className="mr3">{date}</span>
          <span className="bg-text-clip shine fw6">Read &rarr;</span>
        </Link>
      </li>
    );
  }
}

export default NewsItem;
