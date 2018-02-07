import React, { Component } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

import NewsItem from './NewsItem';
import Title from '../../Title';

import Footer from '../../Footer';

class News extends Component {
  render() {

    const pageName = "News";
    const pageDescription = "I think it's hard to remember and give ourselves credit for our achievements. I wanted to be better at highlighting my own and updating you so here's a hub for what's going on in my work and personal life (as well as other random posts sometimes).";

    return (
      <div id={pageName} className="black pt4-l">

        <Helmet>
          <title>Dennis Cortés - {pageName} 📰</title>
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
          <meta property="og:url" content="https://www.cortes.us/news"/>
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
        </Helmet>

        <div className="w-100 bg-dot-grid bg-black-blue center pv4 ph0-ns z-0 tl smooth-text">
          <div className="center w-90 animated fadeIn">
            <h1 className="f-subheadline-ns f1 fw3 lh-title blur-skew white tracked-tiny">{pageName}</h1>
            <p className="fw5 f4 lh-subtitle measure white-90 mb5" style={{letterSpacing: 0.8 + "px"}}>
              {pageDescription}
            </p>
          </div>
        </div>

        <div className="pt5 pb4">
          <div className="ba br2 b--black-10 bg-black-10 black center flex flex-row-l flex-column items-center-l justify-between pa3 pl4-ns w-90">
            <p className="mb0-l mt2-l mb4 mt2 tl-ns tc">
              <Title title="Stay in the Loop" toolTipText="📬" />
            </p>
            <form className="items-center justify-between" action="https://cortes.us9.list-manage.com/subscribe/post" method="POST">
              {/*Hidden fields for Mailchimp account and list*/}
              <input type="hidden" name="u" value="574c615abddacf2d7b51d2104" />
              <input type="hidden" name="id" value="7bd40f02a4" />
              <label className="clip" htmlFor="email-address">Your Email</label>
              <input className="f6 input-reset black bg-white dib-l db shadow-large bn pa3 br2 mb0-l mb3 w-auto-l w-100"
                placeholder="Email Address"
                type="email" name="MERGE0" tabindex="-1" id="b_email" />
              <input className="bn fw6 f6 ttu button-reset dim pa3 tc dib-l db white bg-gradient pointer br2 ml3-l w-auto-l w-100" type="submit" value="Subscribe" />
            </form>
          </div>
        </div>

        <div className="pb5">
          <ul className="center list pl0 w-90">
            <NewsItem
              date="Feb 7 2018"
              linkTo="/news/i-am-joining-metalab"
              title="I'm Joining MetaLab!"
            />
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}

export default News;
