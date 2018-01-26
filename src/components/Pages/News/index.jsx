import React, { Component } from 'react';
import { Link } from 'react-router';

import NewsItem from './NewsItem';
import Title from '../../Title';

import Footer from '../../Footer';

class News extends Component {
  render() {
    return (
      <div id="News" className="relative black">

        <div className="w-100 bg-dot-grid bg-black-blue center pv4 ph0-ns z-0 tl smooth-text">
          <div className="center w-90">
            <h1 className="f-subheadline-ns f1 fw3 lh-title blur-late white tracked-tiny">News</h1>
            <p className="fw5 f4 lh-subtitle measure white-90 mb5" style={{letterSpacing: 0.8 + "px"}}>
              I think it's hard to remember and give ourselves credit for our achievements. I wanted to be
              better at highlighting my own and updating you so here's a hub for what's going on in my work
              and personal life.
            </p>
          </div>
        </div>

        <div className="pt5 pb4">
          <div className="ba br2 b--black-10 bg-black-10 black center flex flex-row-l flex-column items-center-l justify-between pa3 pl4-ns w-90">
            <p className="mv0-l mb4 mt2 tl-ns tc">
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
              date="Feb 5 2018"
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
