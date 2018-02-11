import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../Footer';
import Spacer from '../../Spacer';
import Title from '../../Title';

class About extends Component {
  render() {

    const aboutImage = require("../../../img/about-picture.jpg");

    const pageName = "About";
    const pageDescription = "Dennis Cortes is a Designer, Illustrator, Developer, Writer, and Beat-Maker.";

    return (
      <div id={pageName} className="black pt4-l">

        <Helmet>
          <title>Dennis Cortés - {pageName} 🎉</title>
          <meta name="description" content={pageDescription} />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@fromcortes"/>
          <meta name="twitter:creator" content="@fromcortes"/>
          <meta name="twitter:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.cortes.us/${pageName}`} />
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
        </Helmet>

        <div className="w-40-l w-75-m w-90 center mv5-ns ph0-ns ph3 z-0">
          <img src={aboutImage} alt="Dennis Cortés" className="br2 shadow-large" />
          <h2 className="f2 fw6 mb4 lh-title black mt5">
            Hey There <span className="ml2 absolute spin">👋</span>
          </h2>
          <p className="lh-copy">
            I’m Dennis, a 23 year old digital designer and illustrator that codes based in Memphis, TN from Bayamón, Puerto Rico.
            I grew up mainly in Plantation, FL and studied design in college after putting my rap producer dreams to rest.
            I love working day-to-day on projects that require multidisciplinary skill sets solving complex issues that make the lives of people better.
            I make a lot of products on my own outside of my full-time work on a team.
          </p>
          <p className="lh-copy">
            I enjoy thinking about experience based solutions through use of design and technological implications.
            I find internal systematic struggles intriguing and set to solve and improve processes to better the way
            people work and interact with technology. Through merging expertise in product, branding,
            illustration, and web technologies, I can better approach problems for modern overarching solutions.
          </p>
          <p className="lh-copy">
            Outside of design, I write and release at least one article a week (70+ weeks!) and spend time
            coding for the web to build projects to benefit myself and others. I love spending time with my dogs,
            playing video games, making music, and eating food. As a firm believer in helping others, most of my efforts
            go towards finding ways to work with people and bringing value to their life and ventures.
          </p>
          <p className="lh-copy">
            I'm always open to chat! Say hello at <a className="fw6 link link-underlined black rainbow-hover" target="_blank" rel="nofollow" href="mailto:hi@cortes.us">hi@cortes.us</a> 📩
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
              <li className="fw4 pv2 green lh-copy dib mr4">
                <span className="b">Currently at Speak</span>
                <br />Web Designer & Developer
              </li>
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

export default About;
