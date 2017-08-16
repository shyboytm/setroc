import React, { Component } from 'react';

import Footer from '../../Footer';
import Subheader from '../../Subheader';
import Spacer from '../../Spacer';
import Title from '../../Title';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="animated fadeIn black">
        {/* <div id="IntroCircle" className="br-100 bg-black-05 fixed h5-ns w5-ns h4 w4 o-30 mt6" /> */}
        <div className="w-40-l w-75-m w-90 center mt5 ph0-ns ph3">

          <Subheader />

          <Title
            title="Currently"
            toolTipText="💪">
          </Title>
          <div className="pl4-ns fw4 lh-copy">
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
            title="Work"
            toolTipText="💻">
          </Title>
          <div className="pl4-ns fw4 lh-copy">
            <p className="measure mb4">
              In addition to branding, illustration, and UI/UX work for others in my portfolio, a lot of my work is living and breathing projects I've built that people rely on and use on a regular basis.
            </p>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://dribbble.com/fromcortes">
              My Portfolio
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover light-red ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://prompter.cortes.us">
              Prompter
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://coffee.cortes.us">
              Taste Notes
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://usequarry.com">
              Quarry
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://sogol.co">
              Sogol
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://fieldy.co">
              Fieldy
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://livtra.co">
              Livtra
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://blog.cortes.us">
              The Rate of Change
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://www.instagram.com/illustree/">
              Illustree
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://atom.io/users/fromcortes">
              Prisma
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://www.instagram.com/muchclean/">
              Much Clean
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://gamesandgrids.com">
              Games and Grids
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="http://calligritype.us">
              Calligritype
            </a>
            <p className="measure mt4 mb3">
              Made with teams
            </p>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="https://satchelhealth.com">
              Satchel Health
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="http://unclekragers.com/app">
              Uncle Kragers
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="http://simplesam.com">
              Simple Sam
            </a>
            <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              target="_blank" rel="nofollow" href="http://12ounceapp.com/">
              Twelve Ounce
            </a>
          </div>

          <Spacer />

            <Title
              title="Recognition"
              toolTipText="🏆">
            </Title>
            <div className="pl4-ns fw4 lh-copy">
              <p className="measure mb4">
                From awards to interviews, here are some folks who think my work and I are pretty cool. I'm always open to interviews if that's your thing.
              </p>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://www.typewolf.com/site-of-the-day/taste-notes">
                Typewolf SOTD
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://sitesee.co/sites/taste-notes">
                Site See SOTD
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://365awesomedesigners.com/dennis-cortes/">
                365 Designers
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=8vTTJ-W-Axc&feature=youtu.be">
                ta–lk
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=XWLhtUGbQwk&t=1s">
                Logomarked
              </a>
            </div>

            <Spacer />

            <Title
              title="Recent Writing"
              toolTipText="📝">
            </Title>
            <div className="pl4-ns fw4 lh-copy">
              <p className="measure mb4">
                I write an article every week for my blog, <a className="link link-underlined rainbow-hover black mh1 fw6" target="_blank" rel="nofollow" href="https://blog.cortes.us">The Rate of Change</a>. Here are some of the most recent articles, you can sign up for my
                <a className="link link-underlined rainbow-hover black mh1 fw6"
                  target="_blank" rel="nofollow" href="https://eepurl.com/cgT2bD">
                  newsletter
                </a>
                if you'd like.
              </p>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://blog.cortes.us/5-things-i-learned-applying-to-jobs-in-tech">
                5 Things I Learned Applying to Jobs in the Tech World
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://blog.cortes.us/help-people-help-you">
                Help People Help You
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://blog.cortes.us/favorite-tech-purchases-this-year">
                My Favorite Tech Purchases This Year
              </a>
              <a className="f4-ns fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
                target="_blank" rel="nofollow" href="https://blog.cortes.us/how-to-make-passive-social-media-traction">
                How to Make Passive Social Media Traction
              </a>
            </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
