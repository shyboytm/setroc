import React, { Component } from 'react';

import L from '../../L';
import NewsLayout from '../../NewsLayout';

class HM03IsOutEverywhereNow extends Component {
  render() {
    return (
      <div className="bg-black-blue">
        <NewsLayout
          title="HM-03 is Out Everywhere Now"
          subtitle="The third installation of my EP series is ready for ya"
          date="Jul 5th, 2018"
          url="hm-03-is-out-everywhere-now"
          twitterLink="https://twitter.com/home?status=HM-03%20is%20Out%20Out%20Everywhere%20Now%20by%20%40fromcortes%20http%3A//cortes.us/news/hm-03-is-out-everywhere-now"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//cortes.us/news/hm-03-is-out-everywhere-now"
          googleLink="https://plus.google.com/share?url=http%3A//cortes.us/news/hm-03-is-out-everywhere-now"
        >
          <p>
            After releasing <L href="/music">HM-02</L> at the end of April, I was pleasantly surprised
            to land a feature in Bandcamp's <L href="https://daily.bandcamp.com/2018/05/23/best-new-ambient-may-2018/"><em>The Best New Ambient Music on Bandcamp, May 2018</em></L>.
            Being a "new" artist (I've been a musician for ~12 years technically, this is my first time
            releasing produced music though), this is huge for me.
          </p>
        </NewsLayout>
      </div>
    );
  }
}

export default HM03IsOutEverywhereNow;
