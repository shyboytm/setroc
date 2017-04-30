import React, { Component } from 'react';

import Header from '../../Header';
import TitleParagraph from '../../TitleParagraph';
import Footer from '../../Footer';

class Books extends Component {
  render() {

    const pokemonIllustrationCollection = require('../../../img/poke.jpg');

    return (
      <div id="Books" className="animated fadeIn overflow-x-hidden-l">
        <Header />
          <div className="w-100 bg-map bg-black-20 pv6-l pv3 bb bt b--black-05">
            <div className="w-80 center cf">
              <h2 className="f1-ns f2 fw6 white mb5">Books</h2>
              <div className="fr-ns fn tl">
                <p className="f4 lh-subtitle black-60 measure mb5">
                  Folks ask me quite often about which books I read and recommend.
                  So here you go, categorized and everything!
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 bg-rainbow h05" />
          <div className="w-100 pv5-l pv3">
            <div className="w-80 center cf">
              <div className="w-100">
                <TitleParagraph
                  title="Design"
                  paragraph="Folks ask me quite often about which books I read and recommend.
                  So here you go, categorized and everything!" />
                <hr />
                <div className="w-25-l w-50-m w-100 pa4 fl grow">
                  <img className="shadow-large" src={pokemonIllustrationCollection} />
                </div>
                <div className="w-25-l w-50-m w-100 pa4 fl grow">
                  <img className="shadow-large" src={pokemonIllustrationCollection} />
                </div>
                <div className="w-25-l w-50-m w-100 pa4 fl grow">
                  <img className="shadow-large" src={pokemonIllustrationCollection} />
                </div>
                <div className="w-25-l w-50-m w-100 pa4 fl grow">
                  <img className="shadow-large" src={pokemonIllustrationCollection} />
                </div>
                <div className="w-25-l w-50-m w-100 pa4 fl grow">
                  <img className="shadow-large" src={pokemonIllustrationCollection} />
                </div>
                <div className="w-25-l w-50-m w-100 pa4 fl grow">
                  <img className="shadow-large" src={pokemonIllustrationCollection} />
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Books;
