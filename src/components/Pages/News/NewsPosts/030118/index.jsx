import React, { Component } from 'react';

import L from '../../L';
import NewsLayout from '../../NewsLayout';

class myFirstEPIsAvailable extends Component {
  render() {

    return (
      <div className="bg-black-blue">
        <NewsLayout
          title="My EP HM-01 is Available Now"
          subtitle="My first of many releases in my musical creation hobby"
          date="Mar 1st, 2018"
          url="my-first-ep-is-available"
          twitterLink="https://twitter.com/home?status=My%20EP%20HM-01%20is%20Available%20Now%20by%20%40fromcortes%20http%3A//cortes.us/news/my-first-ep-is-available"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//cortes.us/news/my-first-ep-is-available"
          googleLink="https://plus.google.com/share?url=http%3A//cortes.us/news/my-first-ep-is-available"
        >
          <p>
            I never thought I’d be one of those that wrote a “I’m joining…” posts, yet here we are!
            This definitely won’t be a dragged on post by any means, but I think landing a dream job
            of mine constitutes a post like this.
          </p>
        </NewsLayout>
      </div>
    );
  }
}

export default myFirstEPIsAvailable;
