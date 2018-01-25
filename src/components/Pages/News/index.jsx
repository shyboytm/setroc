import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from '../../Footer';

class News extends Component {
  render() {
    return (
      <div id="News" className="relative black">

        <div className="w-100 bg-dot-grid bg-black-blue center pv4 ph0-ns z-0 tl">
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
          <div className="ba br2 b--black-10 bg-black-10 black center flex flex-row-l flex-column items-center justify-between pv3 ph4 w-90">
            <p className="flex-auto mv0 f4 fw5 tracked-tiny">Stay in the Loop 📬</p>
            <form className="flex-auto items-center" action="https://cortes.us9.list-manage.com/subscribe/post" method="POST">
              {/*Hidden fields for Mailchimp account and list*/}
              <input type="hidden" name="u" value="574c615abddacf2d7b51d2104" />
              <input type="hidden" name="id" value="7bd40f02a4" />
              <label className="clip" for="email-address">Your Email</label>
              <input className="flex-auto f6 input-reset black bg-white dib shadow-large bn pa3 br2 mr3 w-40"
                placeholder="Email Address"
                type="email" name="MERGE0" tabindex="-1" id="b_email" />
              <input className="bn fw6 f6 ttu button-reset dim pv3 tc dib white bg-gradient pointer br2 w-40" type="submit" value="Subscribe" />
            </form>
          </div>
        </div>

        <div className="pb5">
          <ul className="center list pl0 w-90">
            <li className="bb b--black-10 pv3">
              <Link to="/" className="dim flex items-center-ns flex-row-ns flex-column justify-between link">
                <h2 className="black fw5 f3 tracked-tiny">I'm Joining MetaLab!</h2>
                <span className="bg-text-clip black shine">Feb 5 2018</span>
              </Link>
            </li>
            <li className="bb b--black-10 pv3">
              <Link to="/" className="dim flex items-center-ns flex-row-ns flex-column justify-between link">
                <h2 className="black fw5 f3 tracked-tiny">Item Example Header</h2>
                <span className="bg-text-clip black shine">Item date</span>
              </Link>
            </li>
            <li className="bb b--black-10 pv3">
              <Link to="/" className="dim flex items-center-ns flex-row-ns flex-column justify-between link">
                <h2 className="black fw5 f3 tracked-tiny">Item Example Header</h2>
                <span className="bg-text-clip black shine">Item date</span>
              </Link>
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}

export default News;
