import React, { Component } from 'react';

import L from '../../L';
import NewsLayout from '../../NewsLayout';

class myFirstEPIsAvailable extends Component {
  render() {
    return (
      <div className="bg-black-blue">
        <NewsLayout
          title="My First EP HM-01 is Available Now"
          subtitle="My first of many releases in my musical creation hobby"
          date="Mar 1st, 2018"
          url="my-first-ep-is-available"
          twitterLink="https://twitter.com/home?status=My%20First%20EP%20HM-01%20is%20Available%20Now%20by%20%40fromcortes%20http%3A//cortes.us/news/my-first-ep-is-available"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//cortes.us/news/my-first-ep-is-available"
          googleLink="https://plus.google.com/share?url=http%3A//cortes.us/news/my-first-ep-is-available"
        >
          <p>
            If you told me I'd have an EP finished and up on all streaming platforms last year
            I'd think you're crazy. I know it's not an uncommon thing to have happen, but it's
            very surreal to my high school self who dreamt day and night of making music. While
            my music genre and styles has definitely changed, I'm happy to finally have HM-01 out
            in the world.
          </p>
          <p>
            If I had to give you a genre for the type of music it is, I'd say it's ambient-electronic with
            elements from jazz and hip-hop. HM-01 is great for studying, working, or chilling out to if that's what
            you're looking for. I have some more music already in the works and just recently bought an <L href="https://teenageengineering.com/products/op-1">OP-1</L> to
            really put me in a great spot fo make music a main hobby for myself outside of my design and development work.
            I can't wait to share even more music with you, but I hope you'll love HM-01 as much as I did making it for now.
          </p>
          <p>
            I put quite a bit of work into creating this EP from start to finish and would love if
            you took some time to listen to it, share it with your friends, and let me know what
            you think about it. You can search for it on any streaming platform or check out <L href="/music">my Music page</L> to
            find direct links to all platforms.
          </p>
        </NewsLayout>
      </div>
    );
  }
}

export default myFirstEPIsAvailable;
