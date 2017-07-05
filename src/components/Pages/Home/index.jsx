import React, { Component } from 'react';

import Footer from '../../Footer';
import Header from '../../Header';
import Logo from '../../Logo';
import Spacer from '../../Spacer';
import Title from '../../Title';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="animated fadeIn black">
        {/* <Header />

        <Footer /> */}
        <div className="mv4 tc w-100 mw9">
          <Logo />
        </div>
        <div id="IntroCircle" className="br-100 bg-black-05 fixed o-30 mt6" />
        <div className="w-40-l w-75-m w-90 center mt5">
          <h1 className="f4 fw4 lh-title">Dennis Cortés</h1>
          <h2 className="f5 fw4 lh-title black-60">Designer and Illustrator that codes</h2>
          <h3 href="mailto:hi@cortes.us" className="green f5 fw4 mt3 tooltip">
            hi@cortes.us
            <span className="tooltiptext">Available</span>
          </h3>
          {/* <p className="lh-copy black-50 mv4">
            I'm currently leading design at Satchel Health and building resources
            and experiences at Quarry. I also write for my weekly personal blog and
            stream my work on Twitch. Email me at hi@cortes.us if you'd like to get in touch.
          </p> */}
          <div className="db mt4">
            <a href="https://twitter.com/fromcortes" className="dim mr3">
              <img src='https://icon.now.sh/twitter/20/000000' alt='twitter' />
            </a>
            <a href="https://twitch.com/cortesarts" className="dim mr3 ml1">
              <img src='https://icon.now.sh/twitch/20/000000' alt='twitch' />
            </a>
            <a href="https://youtube.com/cortesarts" className="dim mr3 ml1">
              <img src='https://icon.now.sh/play_arrow/20/000000' alt='youtube' />
            </a>
            <a href="https://instagram.com/fromcortes" className="dim mr3 ml1">
              <img src='https://icon.now.sh/instagram/20/000000' alt='instagram' />
            </a>
            <a href="https://github.com/fromcortes" className="dim mr3 ml1">
              <img src='https://icon.now.sh/github/20/000000' alt='github' />
            </a>
          </div>

          <Spacer />

          <Title
            title="Currently"
            toolTipText="💪">
          </Title>
          <div className="pl4 fw4 lh-copy">
            <h4 className="fw4 pv1">Working full-time as a designer and developer at
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                href="https://satchelhealth.com">
                Satchel Health
              </a>
            </h4>
            <h4 className="fw4 pv1">Building products for others at
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                href="https://usequarry.com">
                Quarry
              </a>
            </h4>
            <h4 className="fw4 pv1">Writing weekly about work and life at
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                href="https://blog.cortes.us">
                The Rate of Change
              </a>
            </h4>
            <h4 className="fw4 pv1">Building a life-tracking tool called
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                href="https://livtra.co">
                Livtra
              </a>
            </h4>
            <h4 className="fw4 pv1">Writing design reviews about the gaming world at
              <a className="link link-underlined rainbow-hover black ml1 fw6"
                href="https://gamesandgrids.com">
                Games and Grids
              </a>
            </h4>
          </div>

          <Spacer />

          <Title
            title="Work"
            toolTipText="💻">
          </Title>
          <div className="pl4 fw4 lh-copy">
            <a className="f4 fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              href="https://dribbble.com/fromcortes">
              My Portfolio
            </a>
            <a className="f4 fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              href="https://usequarry.com">
              Quarry
            </a>
            <a className="f4 fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              href="https://blog.cortes.us">
              The Rate of Change
            </a>
            <a className="f4 fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              href="https://livtra.co">
              Livtra
            </a>
            <a className="f4 fw6 dib link rainbow-hover black ba br2 b--black-10 ph3 pv2 mv2 mr3"
              href="https://gamesandgrids.com">
              Games and Grids
            </a>
          </div>

          <Spacer />

        </div>
      </div>
    );
  }
}

export default Home;
