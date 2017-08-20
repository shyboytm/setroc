import React, { Component } from 'react';

import Feature from '../../Feature';
import Footer from '../../Footer';
import Subheader from '../../Subheader';
import Spacer from '../../Spacer';
import Title from '../../Title';

class Home extends Component {
  render() {

    const aboutImage = require("../../../img/about-picture.jpg");

    return (
      <div id="Home" className="animated fadeIn black">
        {/* <div id="IntroCircle" className="br-100 bg-black-05 fixed h5-ns w5-ns h4 w4 o-30 mt6" /> */}
        <div className="w-100 grid">

          <div className="grid-row-start-1-ns pv3-l ph4-l pa5-m pa4 bt br bb b--black-10">
            <img src={aboutImage} alt="Dennis Cortés" className="br2 shadow-large mt3" />
            <h2 className="f4 fw6 lh-subtitle system mt4 mb0">
              Hey There <span className="ml2 absolute spin">👋</span>
            </h2>
            <p className="lh-copy f6">
              I’m a digital designer and illustrator that codes based in Memphis, TN from Bayamón, Puerto Rico. I have 5+ years of experience
              in the world of design and illustration and have built products both on my own and on a team.
              I love working on projects that require multidisciplinary skill sets solving complex issues that make the lives of people better.
            </p>
            <p className="lh-copy f6">
              Outside of design, I write and release at least one article a week (50+ weeks!). I also spend time
              learning code on my own and build projects with that knowledge for fun. As a firm believer in giving
              to others, a lot of my efforts go to building things that will help others as well as helping those in
              the design and tech industry. I stream the majority of my work on <a className="fw6 link link-underlined black rainbow-hover" target="_blank" rel="nofollow" href="https://twitch.tv/cortesarts">Twitch</a>,
              where others can hang out and maybe learn a few things.
            </p>
            <p className="lh-copy f6">
              I'm always open to chat! Say hello at <a className="fw6 link link-underlined black rainbow-hover" target="_blank" rel="nofollow" href="mailto:hi@cortes.us">hi@cortes.us</a> 📩
            </p>
          </div>

          <div className="grid-row-start-2-ns pv3-l ph4-l pa5-m pa4 bt br bb b--black-10">
            <Title
              title="I'm Currently..."
              toolTipText="💪">
            </Title>
            <div className="f6 fw4 lh-copy">
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
          </div>

          <div className="grid-row-start-3-ns pv3-l ph4-l pa5-m pa4 bt br bb b--black-10">
            <Title
              title="Work"
              toolTipText="💻">
            </Title>
            <div className="f6 fw4 lh-copy">
              <p className="measure mb4">
                In addition to branding, illustration, and UI/UX work for others in my portfolio, a lot of my work is living and breathing projects I've built that people rely on and use on a regular basis.
              </p>
              <Feature
                href="https://dribbble.com/fromcortes"
                name="My Portfolio" />
              <Feature
                href="https://prompter.cortes.us"
                name="Prompter" />
              <Feature
                href="https://coffee.cortes.us"
                name="Taste Notes" />
              <Feature
                href="https://livtra.co"
                name="Livtra" />
              <Feature
                href="https://usequarry.com"
                name="Quarry" />
              <Feature
                href="https://sogol.co"
                name="Sogol" />
              <Feature
                href="https://fieldy.co"
                name="Fieldy" />
              <Feature
                href="https://blog.cortes.us"
                name="The Rate of Change" />
              <Feature
                href="https://www.instagram.com/illustree/"
                name="Illustree" />
              <Feature
                href="https://atom.io/users/fromcortes"
                name="Prisma" />
              <Feature
                href="https://www.instagram.com/muchclean/"
                name="Much Clean" />
              <Feature
                href="https://gamesandgrids.com"
                name="Games and Grids" />
              <Feature
                href="http://calligritype.us"
                name="Calligritype" />
              <p className="measure mt4 mb3">
                Made with teams
              </p>
              <Feature
                href="https://satchelhealth.com"
                name="Satchel Health" />
              <Feature
                href="http://unclekragers.com/app"
                name="Uncle Kragers" />
              <Feature
                href="http://simplesam.com"
                name="Simple Sam" />
              <Feature
                href="http://12ounceapp.com/"
                name="Twelve Ounce" />
            </div>
          </div>

          <div className="grid-row-start-4-ns pv3-l ph4-l pa5-m pa4 bt br bb b--black-10">
            <Title
              title="Recognition"
              toolTipText="🏆">
            </Title>
            <div className="f6 fw4 lh-copy">
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
              <div className="f6 fw4 lh-copy">
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
        <Footer />
      </div>
    );
  }
}

export default Home;
