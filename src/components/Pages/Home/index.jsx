import React, { Component } from 'react';

import Footer from '../../Footer';
import Header from '../../Header';
import Logo from '../../Logo';
import Title from '../../Title';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="animated fadeIn black">
        {/* <Header />
        <div id="IntroCircle" className="br-100 bg-black-05 relative o-30 mt6-l mt3" />
        <Footer /> */}
        <div className="mv4 tc fixed top-0 w-100 mw9">
          <Logo />
        </div>
        <div className="mt6 w-40-l w-75-m w-90 center">
          <h1 className="f4 fw4 lh-title">Dennis Cortés</h1>
          <h2 className="f5 fw4 lh-title black-70">Designer and Illustrator that codes</h2>
          {/* <p className="lh-copy black-50 mv4">
            I'm currently leading design at Satchel Health and building resources
            and experiences at Quarry. I also write for my weekly personal blog and
            stream my work on Twitch. Email me at hi@cortes.us if you'd like to get in touch.
          </p> */}

          <hr className="b--black-05 mv4" />

          <Title
            title="Currently"
            toolTipText="💻">
          </Title>
          <div className="pl4 fw4 lh-copy">
            <h4 className="fw4 pv1">Working full-time as a designer and developer at Satchel Health</h4>
            <h4 className="fw4 pv1">Building products for others at Quarry</h4>
            <h4 className="fw4 pv1">Writing weekly about work and life at The Rate of Change</h4>
            <h4 className="fw4 pv1">Building a life-tracking tool called Livtra</h4>
            <h4 className="fw4 pv1">Writing design reviews about the gaming world at Games and Grids</h4>
          </div>

          <hr className="b--black-05 mv4" />

        </div>
      </div>
    );
  }
}

export default Home;
