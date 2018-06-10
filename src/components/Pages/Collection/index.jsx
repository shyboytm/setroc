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
    const pageDescription = "A curated selection of great resources, people, updates, other valuable things delivered straight to your inbox on the first of each month.";

    const airMax97lightBone     = require('../../../img/collection/shoes/air-max-97-light-bone.jpg');
    const airJordan1CyberMonday = require('../../../img/collection/shoes/air-jordan-1-cyber-monday.jpg');

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

        <div className="w-100 bg-black-05 bg-dot-grid center pv4 ph0-ns z-0 smooth-text">
          <div className="center w-90">
            {pageName}
          </div>
          <div className="center flex flex-wrap w-80-l w-90-m w-100">
            <ShoeList />
          </div>
        </div>


        <Footer />
      </div>
    );
  }
}

export default Collection;
