import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Title from '../../Title';
import NewsItem from '../News/NewsItem';
import Section from '../../Section';

import Footer from '../../Footer';

class Folder extends Component {
  render() {

    const pageName = "Folder";
    const pageDescription = "A curated selection of great resources, people, updates, other valuable things delivered straight to your inbox on the first of each month.";

    return (
      <div id={pageName} className="black pt4-l">

        <Helmet>
          <title>Dennis Cortés - {pageName} 📂</title>
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

        <div className="w-100 bg-dot-grid center pv4 ph0-ns z-0 tc smooth-text">
          <div className="center w-90">
            <span className="f-subheadline-ns f1 db mt5">📂</span>
            <h1 className="bg-text-clip f-headline-ns f-subheadline blur-late fw8 lh-title mb3 mt4 shine tracked-tiny">{pageName}</h1>
            <p className="animated fadeInUp black center fw5 f3 lh-subtitle measure mb5-l mb4 tracked-tiny">
              A monthly newsletter by Dennis Cortés
            </p>
            <div className="w-100 cf">
              <div className="fl-l w-40-l w-50-m center-m w-100 pr5-l mb0-l mb4">
                <p className="black-60 f4 lh-subtitle measure mb4 tl-l tracked-tiny">
                  {pageDescription}
                </p>
                <form action="https://cortes.us9.list-manage.com/subscribe/post" method="POST">
                  {/*Hidden fields for Mailchimp account and list*/}
                  <input type="hidden" name="u" value="574c615abddacf2d7b51d2104" />
                  <input type="hidden" name="id" value="7bd40f02a4" />
                  <label className="clip" for="email-address">Your Email</label>
                  <input className="f4 fw6 blue input-reset ba b--black-10 bg-white pa3 w-100 br2 mb3 shadow-large"
                    placeholder="Your Email"
                    type="email" name="MERGE0" tabindex="-1" id="b_email" />
                  <input className="bn fw7 f6 ttu tracked-tiny button-reset dim pv3 tc white bg-gradient pointer w-100 br2 mb0-l mb4" type="submit" value="Subscribe" />
                </form>
              </div>
              <div className="cf fr-l w-60-l w-100">
                <ul className="animated fadeIn cf list pl0 tl">
                  <li className="fl pb4 pl4 pr3 w-50-ns w-100">
                    <Title className="fw6 mt0" toolTipText="📦" title="Resources"></Title>
                    <p className="black-60 mt2 mb0">
                      Every month I'll send a few articles, products, or other links that
                      I thought were cool.
                    </p>
                  </li>
                  <li className="fl pb4 pl4 pr3 w-40-ns w-100">
                    <Title className="fw6 mt0" toolTipText="👏" title="Project Updates"></Title>
                    <p className="black-60 mt2 mb0">
                      I'm always working on new projects, Folder will be a great place to see
                      new things I ship.
                    </p>
                  </li>
                  <li className="fl pb4 pl4 pr3 w-50-ns w-100">
                    <Title className="fw6 mt0" toolTipText="😻" title="Cool People"></Title>
                    <p className="black-60 mt2 mb0">
                      There are plenty of people that inspire me and my work, I'll
                      be sharing them here.
                    </p>
                  </li>
                  <li className="fl pb4 pl4 pr3 w-40-ns w-100">
                    <Title className="fw6 mt0" toolTipText="💩" title="No s#!% (Spam)"></Title>
                    <p className="black-60 mt2 mb0">
                      I don't like using the S word around here, so I'll never put s#!% in your
                      inbox either.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pb5">
              <Section
                id="Folder Archive"
                title="Folder Archive"
                description="Read past issues and get a sneak peek of what you'll get"
                number="5" />
              <ul className="list pl0">
                <NewsItem
                  date="Jun 2018"
                  linkTo="https://mailchi.mp/d5dbc50c00bb/5"
                  title="#5 - Cereal Type, Canadian Design, and Embossers"
                />
                <NewsItem
                  date="May 2018"
                  linkTo="https://mailchi.mp/1727b32cdd07/folder-4"
                  title="#4 - Braun Museum, Side Projects, and Dumb Phones"
                />
                <NewsItem
                  date="Apr 2018"
                  linkTo="https://mailchi.mp/980d2722e724/3-design-apis-light-phones-and-2017-design-reports"
                  title="#3 - 2017 Design Report, Light Phones, and Design APIs"
                />
                <NewsItem
                  date="Mar 2018"
                  linkTo="https://mailchi.mp/8baa1b9d8975/2-setup-galore-ml-synths-op-1-and-spicy-type?e=f619597c23"
                  title="#2 - Setup Galore, ML Synths, OP-1, and Spicy Type"
                />
                <NewsItem
                  date="Feb 2018"
                  linkTo="https://mailchi.mp/9f404acbc093/golden-kittens-3d-interviews-and-shipping-stuff"
                  title="#1 - Golden Kittens, 3D Interviews, and Shipping Stuff"
                />
              </ul>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Folder;
