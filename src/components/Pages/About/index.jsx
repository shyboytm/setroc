import React, { Component } from 'react';

import Footer from '../../Footer';
import Header from '../../Header';
import Spacer from '../../Spacer';
import Title from '../../Title';

class Home extends Component {
  render() {

    const aboutImage = require("../../../img/about-picture.jpg");

    return (
      <div id="Home" className="animated fadeIn black">
        {/* <Header /> */}
        <div id="IntroCircle" className="br-100 bg-black-05 fixed h5-ns w5-ns h4 w4 o-30 mt6 z-1" />
        <div className="w-40-l w-75-m w-90 center mv5 ph0-ns ph3 z-0">

          <Header />

          <img src={aboutImage} alt="Dennis Cortés" className="br2 shadow-large" />

          <h2 className="f3 fw6 lh-title mt5">
            Hey There <span className="ml2 f3 absolute spin">👋</span>
          </h2>
          <p className="lh-copy">
            I’m a digital designer and illustrator that codes based in Saint Louis from Bayamón, Puerto Rico. I have 5+ years of experience
            in the world of design and illustration and have built products both on my own and on a team. Currently,
            I am the design lead and a developer at <a className="fw6 link link-underlined black rainbow-hover" target="_blank" rel="nofollow" href="https://satchelhealth.com">Satchel Health</a>,
            and am the co-founder of <a className="fw6 link link-underlined black rainbow-hover" target="_blank" rel="nofollow" href="https://usequarry.com">Quarry</a>, where I build products that help people.
          </p>
          <p className="lh-copy">
            Outside of design, I write quite a bit and release an article each week (40+ weeks!). I also spend time
            learning code on my own and build projects with that knowledge for fun. As a firm believer in giving
            to others, a lot of my efforts go to building things that will help others as well as helping those in
            the design and tech industry. I stream the majority of my work on <a className="fw6 link link-underlined black rainbow-hover" target="_blank" rel="nofollow" href="https://twitch.tv/cortesarts">Twitch</a>,
            where others can hang out and maybe learn a few things.
          </p>
          <p className="lh-copy">
            I'm always open to chat! Whether you have a project I can help you with, a new hiring opportunity, or
            just want to say hi and ask me a question, please feel free to email me at <a className="fw6 link link-underlined black rainbow-hover" target="_blank" rel="nofollow" href="mailto:hi@cortes.us">hi@cortes.us</a> 📩
          </p>

          <Spacer />

          <Title
            title="Approach"
            toolTipText="❤️">
          </Title>
          <div className="pl4-ns fw4 lh-copy">
            <p className="measure mb4">
              I believe all work is more than just technique. Thought process is driven by a combination of knowledge, ethics, and philosophy. I think about these topics a lot and am always trying to refine and improve, here's how I currently approach my work and process.
            </p>

            <h3 className="f4 fw6 lh-title mt3 mb2 tooltip">
              Inclusion<span className="tooltiptext">👥</span>
            </h3>
            <h4 className="fw4 pv1 mt2">
              People are the essence of the technology industry. Without people, we would have no clear purpose in our work. I believe in helping people feel welcomed and included when it comes to my work and who I am as a person.
            </h4>

            <h3 className="f4 fw6 lh-title mt3 mb2 tooltip">
              Accessibility<span className="tooltiptext">🎨</span>
            </h3>
            <h4 className="fw4 pv1 mt2">
              Unfortunately overlooked nowadays, Accessibility is a very important aspect of my work. I believe in equal access to technology and providing the tools and refinements to style, typography, and code neccessary to do so.
            </h4>

            <h3 className="f4 fw6 lh-title mt3 mb2 tooltip">
              Simplicity<span className="tooltiptext">⚫️</span>
            </h3>
            <h4 className="fw4 pv1 mt2">
              Although an overused term, Simplicity is at the heart of my goals in my work. I believe in a simple approach with a touch of uniqueness, developing work into the purest form with tasteful novelty.
            </h4>

            <h3 className="f4 fw6 lh-title mt3 mb2 tooltip">
              Transparency<span className="tooltiptext">👓</span>
            </h3>
            <h4 className="fw4 pv1 mt2">
              Openly and actively sharing my process to help others is a core element of my process. I always try my best to share what I can for the benefit of others. My weekly blog and weekly streams of me working are a direct approach for me to give back to the industry.
            </h4>

            <h3 className="f4 fw6 lh-title mt3 mb2 tooltip">
              Ethics<span className="tooltiptext">💖</span>
            </h3>
            <h4 className="fw4 pv1 mt2">
              I believe that morals and ethics in design play a large part in process. Both business and experience decisions based on the greater good of users makes a better, more personable product and brand.
            </h4>

          </div>

          <Spacer />

          <Title
            title="Hobbies"
            toolTipText="🤓">
          </Title>
          <div className="pl4-ns fw4 lh-copy">
            <p className="measure mb4">
              When I'm not designing or writing code you can find me trying to learn new things, playing video games, writing, learning about coffee, trying out new tech, treating my dogs like kids, catching Pokémon, or making music.
            </p>
          </div>

          <Spacer />

          <Title
            title="Experience"
            toolTipText="💼">
          </Title>
          <div className="pl4-ns fw4 lh-copy">
            <h3 className="f4 fw6 lh-title mt3 mb0 tooltip">
              2017
            </h3>
            <ul className="list ml0 pl0 mb4">
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Satchel Health</span>
                <br />Design Lead & Developer
              </li>
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Livtra</span>
                <br />Co-Founder
              </li>
            </ul>

            <h3 className="f4 fw6 lh-title mt3 mb0 tooltip">
              2016
            </h3>
            <ul className="list ml0 pl0 mb4">
              <li className="fw4 pv2 black-60">Graduated College</li>
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Satchel Health</span>
                <br />Product Designer
              </li>
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Quarry</span>
                <br />Co-Founder
              </li>
            </ul>

            <h3 className="f4 fw6 lh-title mt3 mb0 tooltip">
              2015
            </h3>
            <ul className="list ml0 pl0 mb4">
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Vrasa</span>
                <br />Designer
              </li>
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Satchel Health</span>
                <br />Product Designer
              </li>
            </ul>

            <h3 className="f4 fw6 lh-title mt3 mb0 tooltip">
              2014
            </h3>
            <ul className="list ml0 pl0 mb4">
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Vrasa</span>
                <br />Designer
              </li>
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Calligritype</span>
                <br />Founder
              </li>
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Illustree</span>
                <br />Founder
              </li>
            </ul>

            <h3 className="f4 fw6 lh-title mt3 mb0 tooltip">
              2013
            </h3>
            <ul className="list ml0 pl0 mb4">
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Fivestone Studios</span>
                <br />3D Designer
              </li>
              <li className="fw4 pv2 black-60 lh-copy dib mr4">
                <span className="b black">Freelance</span>
                <br />Branding, Illustration, UI/UX
              </li>
            </ul>

          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
