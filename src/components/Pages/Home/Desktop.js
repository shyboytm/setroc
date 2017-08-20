import React, { Component } from 'react';

import Feature from '../../Feature';
import Footer from '../../Footer';
import Subheader from '../../Subheader';
import Spacer from '../../Spacer';
import Title from '../../Title';

import Work from './Data/Work';

class Desktop extends Component {
  render() {

    const aboutImage = require("../../../img/about-picture.jpg");

    return (
      <div className="w-100 grid-l dn">
        <div className="grid-row-start-1-l pv3-l ph4-l pa5-m pa4 bt br bb b--black-10">
          <img src={aboutImage} alt="Dennis Cortés" className="br2 shadow-large mt3" />
          <h2 className="f4 fw6 lh-subtitle system mt4 mb0">
            Hey There <span className="ml2 absolute spin">👋</span>
          </h2>
          <p className="lh-copy">
            I’m a digital designer and illustrator that codes based in Memphis, TN from Bayamón, Puerto Rico. I have 5+ years of experience
            in the world of design and illustration and have built products both on my own and on a team.
            I love working on projects that require multidisciplinary skill sets solving complex issues that make the lives of people better.
          </p>
          <p className="lh-copy">
            Outside of design, I write and release at least one article a week (50+ weeks!). I also spend time
            learning code on my own and build projects with that knowledge for fun. As a firm believer in giving
            to others, a lot of my efforts go to building things that will help others as well as helping those in
            the design and tech industry. I stream the majority of my work on <a className="fw6 link link-underlined black rainbow-hover" target="_blank" rel="nofollow" href="https://twitch.tv/cortesarts">Twitch</a>,
            where others can hang out and maybe learn a few things.
          </p>
          <p className="lh-copy">
            I'm always open to chat! Say hello at <a className="fw6 link link-underlined black rainbow-hover" target="_blank" rel="nofollow" href="mailto:hi@cortes.us">hi@cortes.us</a> 📩
          </p>

          <Spacer />

          <Title
            title="Hobbies"
            toolTipText="🤓">
          </Title>
          <p className="fw4 lh-copy">
            When I'm not designing or writing code you can find me trying to learn new things, playing video games, writing, learning about coffee, trying out new tech, treating my dogs like kids, catching Pokémon, or making music.
          </p>

          <Spacer />

          <Title
            title="Social"
            toolTipText="🤓">
          </Title>
          <Feature
            href="https://twitter.com/fromcortes"
            name="Twitter" />
          <Feature
            href="https://dribbble.com/fromcortes"
            name="Dribbble" />
        </div>

        <div className="grid-row-start-2-l pv3-l ph4-l pa5-m pa4 bt br bb b--black-10">
          <Title
            title="I'm Currently..."
            toolTipText="💪">
          </Title>
          <div className="fw4 lh-copy">
            <h4 className="fw4 pv1">Building products for others at
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                target="_blank" rel="nofollow" href="https://usequarry.com">
                Quarry
              </a>
            </h4>
            <h4 className="fw4 pv1">Writing weekly about work and life at
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                target="_blank" rel="nofollow" href="https://blog.cortes.us">
                The Rate of Change
              </a>
            </h4>
            <h4 className="fw4 pv1">Building a life-tracking tool called
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                target="_blank" rel="nofollow" href="https://livtra.co">
                Livtra
              </a>
            </h4>
            <h4 className="fw4 pv1">Writing design reviews about the gaming world at
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                target="_blank" rel="nofollow" href="https://gamesandgrids.com">
                Games and Grids
              </a>
            </h4>
            <h4 className="fw4 pv1">Streaming my design and development work on
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                target="_blank" rel="nofollow" href="https://twitch.tv/cortesarts">
                Twitch
              </a>
            </h4>
            <h4 className="fw4 pv1">Curating inspiration for others at
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                target="_blank" rel="nofollow" href="https://instagram.com/calligritype">
                Calligritype
              </a> and
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                target="_blank" rel="nofollow" href="https://instagram.com/illustree">
                Illustree
              </a>
            </h4>
          </div>

          <Spacer />

          <Title
            title="Approach"
            toolTipText="❤️">
          </Title>
          <div className="fw4 lh-copy">
            <p className="measure mb4">
              I believe all work is more than just technique. Thought process is driven by a combination of knowledge, ethics, and philosophy. I think about these topics a lot and am always trying to refine and improve, here's how I currently approach my work and process.
            </p>
            <h3 className="f5 fw6 lh-title mt0 mb0 tooltip">
              Inclusion<span className="tooltiptext">👥</span>
            </h3>
            <h4 className="fw4 pv1 mt2">
              People are the essence of the technology industry. Without people, we would have no clear purpose in our work. I believe in helping people feel welcomed and included when it comes to my work and who I am as a person.
            </h4>

            <h3 className="f5 fw6 lh-title mt0 mb0 tooltip">
              Accessibility<span className="tooltiptext">🎨</span>
            </h3>
            <h4 className="fw4 pv1 mt2">
              Unfortunately overlooked nowadays, Accessibility is a very important aspect of my work. I believe in equal access to technology and providing the tools and refinements to style, typography, and code neccessary to do so.
            </h4>

            <h3 className="f5 fw6 lh-title mt0 mb0 tooltip">
              Simplicity<span className="tooltiptext">⚫️</span>
            </h3>
            <h4 className="fw4 pv1 mt2">
              Although an overused term, Simplicity is at the heart of my goals in my work. I believe in a simple approach with a touch of uniqueness, developing work into the purest form with tasteful novelty.
            </h4>

            <h3 className="f5 fw6 lh-title mt0 mb0 tooltip">
              Transparency<span className="tooltiptext">👓</span>
            </h3>
            <h4 className="fw4 pv1 mt2">
              Openly and actively sharing my process to help others is a core element of my process. I always try my best to share what I can for the benefit of others. My weekly blog and weekly streams of me working are a direct approach for me to give back to the industry.
            </h4>

            <h3 className="f5 fw6 lh-title mt0 mb0 tooltip">
              Ethics<span className="tooltiptext">💖</span>
            </h3>
            <h4 className="fw4 pv1 mt2">
              I believe that morals and ethics in design play a large part in process. Both business and experience decisions based on the greater good of users makes a better, more personable product and brand.
            </h4>
          </div>
        </div>

        <div className="grid-row-start-3-l pv3-l ph4-l pa5-m pa4 bt br bb b--black-10">
          <Work />
        </div>

        <div className="grid-row-start-4-l pv3-l ph4-l pa5-m pa4 bt br bb b--black-10">
          <Title
            title="Recognition"
            toolTipText="🏆">
          </Title>
          <div className="fw4 lh-copy">
            <p className="measure mb4">
              From awards to interviews, here are some folks who think my work and I are pretty cool. I'm always open to interviews if that's your thing.
            </p>
            <Feature
              href="https://www.typewolf.com/site-of-the-day/taste-notes"
              name="Typewolf" />
            <Feature
              href="https://sitesee.co/sites/taste-notes"
              name="Site See" />
            <Feature
              href="https://www.youtube.com/watch?v=8vTTJ-W-Axc&feature=youtu.be"
              name="ta–lk" />
            <Feature
              href="https://365awesomedesigners.com/dennis-cortes/"
              name="365 Designers" />
            <Feature
              href="https://www.youtube.com/watch?v=XWLhtUGbQwk&t=1s"
              name="Logomarked" />

            <Spacer />

            <Title
              title="Recent Writing"
              toolTipText="📝">
            </Title>
            <div className="fw4 lh-copy">
              <p className="measure mb4">
                I write an article every week for my blog, <a className="link link-underlined rainbow-hover black mh1 fw6" target="_blank" rel="nofollow" href="https://blog.cortes.us">The Rate of Change</a>. Here are some of the most recent articles, you can sign up for my
                <a className="link link-underlined rainbow-hover black mh1 fw6"
                  target="_blank" rel="nofollow" href="https://eepurl.com/cgT2bD">
                  newsletter
                </a>
                if you'd like.
              </p>
              <Feature
                href="https://blog.cortes.us/beatsx-earphones-review"
                name="BeatsX Earphones Review" />
              <Feature
                href="https://blog.cortes.us/your-workflow-is-not-important"
                name="Your Workflow is Not Important" />
              <Feature
                href="https://blog.cortes.us/5-things-i-learned-applying-to-jobs-in-tech"
                name="5 Things I Learned Applying to Jobs in the Tech World" />
              <Feature
                href="https://blog.cortes.us/help-people-help-you"
                name="Help People Help You" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Desktop;
