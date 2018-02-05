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
          date="Feb 5th, 2018">
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
        </NewsLayout>
      </div>
    );
  }
}

export default iAmJoiningMetaLab;
