import React, { Component } from 'react';

import CollectionItem from '../../CollectionItem';
import Header from '../../Header';
import TitleParagraph from '../../TitleParagraph';
import Footer from '../../Footer';

class Books extends Component {
  render() {

    const dontMakeMeThink       = require('../../../img/books/dont-make-me-think.svg');
    const orderingDisorder      = require('../../../img/books/ordering-disorder.svg');
    const showYourWork          = require('../../../img/books/show-your-work.svg');
    const stealLikeAnArtist     = require('../../../img/books/steal-like-an-artist.svg');
    const prettyMuchEverything  = require('../../../img/books/pretty-much-everything.svg');

    return (
      <div id="Books" className="animated fadeIn overflow-x-hidden-l">
        <Header />
          <div className="w-100 bg-map bg-black-20 pv6-l pv3 bb bt b--black-05">
            <div className="w-80 center cf">
              <h2 className="f1-ns f2 fw6 white mb5">Books</h2>
              <div className=" fr-ns fn tl">
                <p className="f4 lh-subtitle black-60 measure mb5">
                  Folks ask me quite often about which books I read and recommend.
                  So here you go, categorized and everything!
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 bg-rainbow h05" />
          <div className="w-90 center mv5">
            <TitleParagraph title="Design" />
                <hr className="b--black-05 mb4"/>
            <div className="masonry">
              <CollectionItem
                image={dontMakeMeThink}
                title="Don't Make me Think Revisited"
                description="CEO and Founder of Gyroscope" />
              <CollectionItem
                image={orderingDisorder}
                title="Ordering Disorder"
                description="CEO and Founder of Gyroscope" />
              <CollectionItem
                image={showYourWork}
                title="Show Your Work"
                description="CEO and Founder of Gyroscope" />
              <CollectionItem
                image={stealLikeAnArtist}
                title="Steal Like an Artist"
                description="CEO and Founder of Gyroscope" />
              <CollectionItem
                image={prettyMuchEverything}
                title="Pretty Much Everything"
                description="CEO and Founder of Gyroscope" />
              <CollectionItem
                image={dontMakeMeThink}
                title="Anand Sharma"
                description="CEO and Founder of Gyroscope" />
              <CollectionItem
                image={dontMakeMeThink}
                title="Anand Sharma"
                description="CEO and Founder of Gyroscope" />
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Books;
