import React, { Component } from 'react';

import L from '../../L';
import NewsLayout from '../../NewsLayout';

class mySecondEPIsAvailable extends Component {
  render() {
    return (
      <div className="bg-black-blue">
        <NewsLayout
          title="HM-02 is Available Now"
          subtitle="The sequel to my first EP is ready for your ears to listen"
          date="Apr 27th, 2018"
          url="my-second-ep-is-available"
          twitterLink="https://twitter.com/home?status=HM-02%20is%20Available%20Now%20by%20%40fromcortes%20http%3A//cortes.us/news/my-second-ep-is-available"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//cortes.us/news/my-second-ep-is-available"
          googleLink="https://plus.google.com/share?url=http%3A//cortes.us/news/my-second-ep-is-available"
        >
          <p>
            Following my first EP release just a month and a half ago, my second EP is finished and
            ready for you to add to your playlists! The past month and a half was filled with a lot
            of learning and artistic exploration for me and I think it really shines on <L href="/music">HM-02</L>.
          </p>
          <p>
            My first EP was a big step for me, putting myself out there with a vulnerable new passion.
            The overwhelming support on HM-01 really pushed me to be comfortable with my style and
            expression in music which I took advantage of in HM-02. HM-02 is definitely a more emotion-filled
            EP and a small step into experimental methodologies I hadn't tried in the past.
          </p>
          <p>
            In terms of equipment, I purchased both an <L href="https://teenageengineering.com/products/op-1">OP-1</L> and a <L href="https://amzn.to/2JNdiMz">Volca FM</L> and was more than pleased
            with them. I've been able to implement both of them quite a bit in this new EP while still
            keeping my initial style and methods intact. The devices have become great add-ons in my work
            and I'm excited to use them on future music.
          </p>
          <p>
            Anyways, I won't go too deep into the EP and give you the time to interpret the music on your
            own. I'd love to hear your thoughts after you give it a listen on <L href="https://twitter.com/fromcortes">Twitter</L>, and be sure to share
            it with other folks you think would appreciate the tunes. Enjoy! ✨
          </p>
        </NewsLayout>
      </div>
    );
  }
}

export default mySecondEPIsAvailable;
