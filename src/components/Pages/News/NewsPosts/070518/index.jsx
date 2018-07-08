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
            Very proud and excited to announce that my 3rd EP is now finished and available for you
            to <L href="/music">stream anywhere</L> you listen to music! It's been just over 7 months since I started working
            on my first EP, and now I have 3 completed and ready for you to listen to.
          </p>
          <p>
            The main theme of HM-03 is an exploration of true loneliness in a world filled with other
            beings. Learning to accept and and thrive in what seems like solitude is how we cope, and
            we "ride the waves" of these emotions to the best of our abilities. While there are other
            overarching themes and smaller ones as well, I'd like to leave the rest up to your
            interpretation. Listen for mellow melodies paired with hard-hitting kicks and snares sprinkled
            with unique but familiar extras. Try and find all the themes on this medium-sized EP.
          </p>
          <p>
            I'm very excited for you to hear this EP as it's my favorite so far in terms of messaging
            and style. I'd call the style very much "Ambient Hip-Hop" and am quite content with how
            my musical style is developing. I still have a ton to learn, which is exciting for me as
            someone passionate towards music production, music culture, and bringing other passions
            and perspectives from my life into my work.
          </p>
          <p>
            I plan to make 9 EPs before my first full-fledged album and will be starting on HM-04 before
            you know it. Until then, I invite you to enjoy listening to HM-03 (best experienced with
            headphones 😉) and would love to hear your thoughts on <L href="https://twitter.com/fromcortes">Twitter</L> afterwards.
          </p>
          <p>
            <L href="/music">Find a direct link to your streaming service on the brand new music page I made for Cordio here →</L>
          </p>
        </NewsLayout>
      </div>
    );
  }
}

export default HM03IsOutEverywhereNow;
