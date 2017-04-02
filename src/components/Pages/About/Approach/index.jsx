import React, { Component } from 'react';

import TitleParagraph from '../../../TitleParagraph';

class Approach extends Component {
  render() {
    return (
      <div id="Approach">
        <div className="w-100 bg-map bg-black-20 pv5-l pv3 bb bt b--black-05">
          <div className="w-80 center cf">
            <h2 className="f1-ns f2 fw6 white mb5">Approach</h2>
            <div className=" fr-ns fn tl">
              <p className="f4 lh-subtitle black-60 measure mb5">
                I believe all work is more than just technique. Thought process is driven by a combination of
                knowledge, ethics, and philosophy. I think about these topics a lot and am always trying to refine and
                improve, here's how I currently approach my work and process.
              </p>
            </div>
            <div className="content-end flex flex-wrap pv3 w-100 cf white">
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Inclusion"
                  toolTipText="👥"
                  paragraph="People are the essence of the technology industry. Without people, we would have no clear
                             purpose in our work. I believe in helping people feel welcomed and included when it comes to my
                             work and who I am as a person." />
              </div>
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Accessibility"
                  toolTipText="🎨"
                  paragraph="Unfortunately overlooked a lot nowadays, Accessibility is a very important aspect of
                             my work. I believe in equal access to technology and providing the tools and refinements
                             to style, typography, and code neccessary to do so." />
              </div>
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Simplicity"
                  toolTipText="⚫️"
                  paragraph="Although an overused term, Simplicity is at the heart of my goals in my work. I believe in a simple
                             approach with a touch of uniqueness, developing work into the purest form with tasteful novelty." />
              </div>
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Discovery"
                  toolTipText="🌎"
                  paragraph="I regard knowledge as a never ending cycle of inspiration and curiousity. I accept and relish that
                             I'll never know everything about something. I approach projects with an open mind, being transparent
                             about what I learn in the process." />
              </div>
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Transparency"
                  toolTipText="👓"
                  paragraph="Openly and actively sharing my process to help others is a core element of my process. I always try
                             my best to share what I can for the benefit of others. My weekly blog and weekly streams of me working
                             are a direct approach for me to give back to the industry." />
              </div>
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Ethics"
                  toolTipText="❤️"
                  paragraph="I believe that morals and ethics in design play a large part in process. Both business
                             and experience decisions based on the greater good of users makes a better, more personable
                             product and brand." />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Approach;
