import React, { Component } from 'react';

import CollectionItem from '../../CollectionItem';
import Header from '../../Header';
import TitleParagraph from '../../TitleParagraph';
import Footer from '../../Footer';

class People extends Component {
  render() {

    const anandSharma = require('../../../img/anand-sharma.jpg');

    return (
      <div id="People" className="animated fadeIn overflow-x-hidden-l">
        <Header />
          <div className="w-100 bg-map bg-black-20 pv6-l pv3 bb bt b--black-05">
            <div className="w-80 center cf">
              <h2 className="f1-ns f2 fw6 white mb5">People</h2>
              <div className=" fr-ns fn tl">
                <p className="f4 lh-subtitle black-60 measure mb5">
                  A list of folks that inspire me in my life and work both directly and indirectly.
                  They make and do great things, be sure to check them out. Click to go to links for
                  their Twitter or website.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-rainbow h05" />
          <div className="masonry w-90 center mv5">
            <CollectionItem
              image={anandSharma}
              title="Anand Sharma"
              description="CEO and Founder of Gyroscope" />
            <CollectionItem
              image={anandSharma}
              title="Anand Sharma"
              description="CEO and Founder of Gyroscope" />
            <CollectionItem
              image={anandSharma}
              title="Anand Sharma"
              description="CEO and Founder of Gyroscope" />
            <CollectionItem
              image={anandSharma}
              title="Anand Sharma"
              description="CEO and Founder of Gyroscope" />
            <CollectionItem
              image={anandSharma}
              title="Anand Sharma"
              description="CEO and Founder of Gyroscope" />
            <CollectionItem
              image={anandSharma}
              title="Anand Sharma"
              description="CEO and Founder of Gyroscope" />
            <CollectionItem
              image={anandSharma}
              title="Anand Sharma"
              description="CEO and Founder of Gyroscope" />
          </div>
        <Footer />
      </div>
    );
  }
}

export default People;
