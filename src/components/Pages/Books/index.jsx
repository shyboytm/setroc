import React, { Component } from 'react';

import Footer from '../../Footer';
import Item from '../../Item';
import Title from '../../Title';

class Books extends Component {
  render() {

    const dontMakeMeThink         = require('../../../img/books/dont-make-me-think.svg');
    const orderingDisorder        = require('../../../img/books/ordering-disorder.svg');
    const showYourWork            = require('../../../img/books/show-your-work.svg');
    const stealLikeAnArtist       = require('../../../img/books/steal-like-an-artist.svg');
    const prettyMuchEverything    = require('../../../img/books/pretty-much-everything.svg');
    const designingBrandIdentity  = require('../../../img/books/designing-brand-identity.svg');
    const symbolBook              = require('../../../img/books/symbol-book.svg');
    const typographySketchbooks   = require('../../../img/books/typography-sketchbooks.svg');
    const theAnatomyOfType        = require('../../../img/books/the-anatomy-of-type.svg');

    return (
      <div id="Books" className="animated fadeIn black">
        {/* <div id="IntroCircle" className="br-100 bg-black-05 fixed h5-ns w5-ns h4 w4 o-30 mt6 z-1" /> */}
        <div className="w-50-l w-75-m w-90 center mv5-ns mv4 ph0-ns ph3 z-0">
          <h1 className="f2-ns f3 fw4 lh-title tc leitura">Books</h1>
          <p className="f5 fw4 lh-copy tc center measure black-60">
            Folks ask me quite often about which books I read and recommend.
            So here you go, categorized and everything!
          </p>
        </div>
        <div className="masonry w-60-l w-90 center mv5">
          <Item
            image={dontMakeMeThink}
            title="Don't Make me Think Revisited"
            description="by Steve Krug" />
          <Item
            image={orderingDisorder}
            title="Ordering Disorder"
            description="CEO and Founder of Gyroscope" />
          <Item
            image={showYourWork}
            title="Show Your Work"
            description="CEO and Founder of Gyroscope" />
          <Item
            image={stealLikeAnArtist}
            title="Steal Like an Artist"
            description="CEO and Founder of Gyroscope" />
          <Item
            image={prettyMuchEverything}
            title="Pretty Much Everything"
            description="CEO and Founder of Gyroscope" />
          <Item
            image={designingBrandIdentity}
            title="Designing Brand Identity"
            description="CEO and Founder of Gyroscope" />
          <Item
            image={symbolBook}
            title="Symbol (Mini)"
            description="CEO and Founder of Gyroscope" />
          <Item
            image={typographySketchbooks}
            title="Typography Sketchbooks"
            description="CEO and Founder of Gyroscope" />
          <Item
            image={theAnatomyOfType}
            title="The Anatomy of Type"
            description="CEO and Founder of Gyroscope" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Books;
