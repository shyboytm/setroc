import React, { Component } from 'react';

import Footer from '../../Footer';
import Item from '../../Item';
import Section from '../../Section';
import Title from '../../Title';

class Mentoring extends Component {
  render() {
    return (
      <div id="Mentoring" className="animated fadeIn black">

        <div className="w-75-ns w-100 center mv5-ns mv4 ph0-ns ph3 z-0 tc">
          <h1 className="f2-ns f3 fw4 lh-title leitura blur">Mentoring</h1>
          <p className="fw4 lh-copy center measure black-60 mb4">
            After years of requests for a mentorship service from me and my own personal views on mentoring,
            I've figured out a way that you can book 1-on-1 sessions with me at a time that works
            best for you. Let's hop on a video call (or phone if you'd like) for 45 minutes
            and chat.
          </p>
          <a className="link bn fw6 f6 ttu dib button-reset dim ph3 pv2 tc white bg-gradient pointer br2 mt3" href="#MentoringPay">
            Get Started
          </a>
        </div>

        <div className="w-75-l w-90 center mv5">
          <div className="content-end flex flex-wrap">
            <div className="items-start relative ph3 pv3 w-50-ns w-100">
              <Title title="What is this for?" />
              <p className="fw4 lh-copy measure black-60 mb4">
                Mentoring from me is a great way to ask any questions you may have about
                work approach and/or methodologies from my perspective. Some examples:
              </p>
              <ul className="lh-copy">
                <li>Want to learn how to illustrate something?</li>
                <li>Not sure how to do something in code?</li>
                <li>Want my advice on a topic or decision?</li>
                <li>Want to ask about the tech industry?</li>
              </ul>
            </div>

            <div className="items-start relative ph3 pv3 w-50-ns w-100">
              <Title title="Why Charge for Mentoring?" />
              <p className="fw4 lh-copy center measure black-60 mb4">
                I want us to both be serious about mentorship. I want to give you
                dedicated time for important questions
              </p>
            </div>
          </div>

          <Section
            id="MentoringDate"
            title="Step 2: Choose a Date"
            description="Check below for a day and time that works for you. Any week day after 7pm is best for me!"
            number="" />
          <div className="w-100 h-100 br3 shadow-large calendly-inline-widget" data-url="https://calendly.com/cortes"></div>

        </div>

        <Footer />
      </div>
    );
  }
}

export default Mentoring;
