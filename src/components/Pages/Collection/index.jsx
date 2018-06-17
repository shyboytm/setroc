import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Title from '../../Title';
import NewsItem from '../News/NewsItem';
import Section from '../../Section';
import ShoeList from './Shoes/ShoeList';

import Footer from '../../Footer';

class Collection extends Component {
  render() {

    const pageName = "Collection";
    const pageDescription = "A gallery of the shoes I own in my collection currently plus when and how much I got them for";

    return (
      <div id={pageName} className="black pt4-l">

        <Helmet>
          <title>Dennis Cortés - {pageName} 😍</title>
          <meta name="description" content={pageDescription} />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@fromcortes"/>
          <meta name="twitter:creator" content="@fromcortes"/>
          <meta name="twitter:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.cortes.us/${pageName}`} />
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
        </Helmet>

        <div className="w-100 bg-dot-grid bg-black-blue center pv4 ph0-ns z-0 tc smooth-text">
          <div className="animated fadeIn center w-90">
            <h1 className="f-subheadline-ns f1 fw8 lh-title blur-late white tracked-tiny ttu">{pageName}</h1>
            <p className="center fw5 f4 lh-subtitle measure white-90 mb5" style={{letterSpacing: 0.8 + "px"}}>
              {pageDescription}
            </p>
          </div>
        </div>

        <div className="center flex flex-wrap mw9 w-100">
          <ShoeList />
        </div>


        <Footer />
      </div>
    );
  }
}

export default Collection;
