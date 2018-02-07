import React, { Component } from 'react';

import L from '../../L';
import NewsLayout from '../../NewsLayout';

class iAmJoiningMetaLab extends Component {
  render() {

    return (
      <div className="bg-black-blue">
        <NewsLayout
          title="I'm Joining MetaLab!"
          subtitle="Joining an amazing company to work with amazing people"
          date="Feb 7th, 2018"
          url="i-am-joining-metalab"
          twitterLink="https://twitter.com/home?status=I%20am%20Joining%20MetaLab!%20by%20%40fromcortes%20http%3A//cortes.us/news/i-am-joining-metalab"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//cortes.us/news/i-am-joining-metalab"
          googleLink="https://plus.google.com/share?url=http%3A//cortes.us/news/i-am-joining-metalab"
        >
          <p>
            I never thought I’d be one of those that wrote a “I’m joining…” posts, yet here we are!
            This definitely won’t be a dragged on post by any means, but I think landing a dream job
            of mine constitutes a post like this.
          </p>
          <p>
            Back when I started designing as an 18 year old, I would spend my nights researching
            design to try to improve and find resources I could use. Early on, I came
            across <L href="http://metalab.co/">MetaLab</L> and
            immediately fell in love with the company. As a young designer it was inspiring to see
            the type of companies they worked with and the impact they had on the lives of people.
          </p>
          <p>
            MetaLab was all about making things that not only worked well, but looked beautifully
            badass. While I was nowhere good enough or experienced to comprehend the strategy and
            work that went into these projects, MetaLab and similar companies have been a North
            Star in design for me since I can remember. The people, the work, the environment,
            from the outside looking in it seemed to be too good to be true.
          </p>
          <p>
            Fast forward to a few months ago as I was looking for new companies to call home. A
            friend of mine (shout out to <L href="https://twitter.com/Jabronus">Noah</L>!) mentioned
            the company he worked for (MetaLab) was hiring remote employees. At first I thought
            there was no way I’d get a job like that, I felt I wasn’t good enough. I thought about
            it for a little and ended up submitting my resume anyways, couldn’t hurt right?
          </p>
          <p>
            During the interview process I found something I hadn’t found in other “larger” companies
            I had applied and interviewed for. The people. From the people I interviewed with to friends
            I knew at the company, the same constant remained of the culture and people being the reason
            they joined and stayed at the company. I saw that MetaLab nurtured a genuine culture that
            cared about employees. Choosing your own hours for what suits your lifestyle best, encouraging
            you to travel and take time off, helping cover your fitness fees so you can stay healthy, etc.
            Overall MetaLab wants you to have the freedom you would have if you worked for yourself without
            having to worry about the business side of things that come with that. I couldn't imagine a better
            fit for what I was looking for.
          </p>
          <p>
            A couple months later after 3 interviews and a test project, I received a call with an offer
            to join MetaLab as a Product Designer. Needless to say, I was ecstatic. As I’m writing this it
            still hasn’t really settled in and all feels surreal to me. To be 23 years old and have landed
            a dream job of mine feels incredible. Seeing the years of hard work I invested into my passion
            come to fruition in a way like this is indescribable.
          </p>
          <p>
            I’ll be working remote from Memphis, TN for the time being. I can’t wait to see the difficult
            challenges I’ll be designing for and the impact I’ll help MetaLab make while I’m there. I’ll
            be heading to their HQ in Canada for my onboarding week and cannot wait to meet some of my
            teammates. I’ve never been to Canada, so let me know of some cool places in Vancouver I should see!
          </p>
        </NewsLayout>
      </div>
    );
  }
}

export default iAmJoiningMetaLab;
