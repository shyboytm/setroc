import React, { Component } from 'react';

import Feature from '../../Feature';
import Spacer from '../../Spacer';
import Title from '../../Title';

import Today from './Data/Today';
import Currently from './Data/Currently';
import Work from './Data/Work';

class Desktop extends Component {
  render() {

    const aboutImage = require("../../../img/about-picture.jpg");

    return (
      <div className="w-100 dn flex-l flex-wrap">
        <div className="flex flex-column w-25-l pv3-l ph4-l pa5-m pa4 br bb b--black-10">
          <img src={aboutImage} alt="Dennis Cortés" className="br2 shadow-large mt3" />
          <h3 className="f3 fw6 lh-subtitle system mt4 mb0 blur-late tracked-tiny">
            Hey Friend <span className="ml2 absolute spin">👋</span>
          </h3>
          <p className="lh-copy">
            I’m a digital designer and illustrator that codes based in Memphis, TN from Bayamón, Puerto Rico. I have 6+ years of experience
            in the world of design and illustration and have built products both on my own and on a team.
            I love working on projects that require multidisciplinary skill sets solving complex issues that make the lives of people better.
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
            title="Games I'm Playing"
            toolTipText="🎮">
          </Title>
          <div className="db">
            <p className="fw4 lh-copy">
              My current lineup of single-player games I am playing through.
            </p>
            <Feature
              href="http://amzn.to/2EJUrhY"
              name="Night in the Woods" />
            <Feature
              href="http://amzn.to/2zOSvSQ"
              name="Super Mario Odyssey" />
            <Feature
              href="http://amzn.to/2Di0X2d"
              name="Assassin's Creed: Origins" />
            <Feature
              href="http://amzn.to/2D7mTK7"
              name="Pokémon Gold" />
            <Feature
              href="http://amzn.to/2ypBctD"
              name="Stardew Valley" />
            <Feature
              href="http://amzn.to/2D3hHXP"
              name="Pokémon Ultra Moon" />
          </div>
        </div>

        <div className="flex flex-column w-25-l pv3-l ph4-l pa5-m pa4 br bb b--black-10">
          <Currently />

          <Spacer />

          <Title
            title="Approach"
            toolTipText="❤️">
          </Title>
          <div className="fw4 lh-copy">
            <p className="lh-copy measure mb4">
              I believe all work is more than just technique. Thought process is driven by a combination of knowledge, ethics, and philosophy. I think about these topics a lot and am always trying to refine and improve, here's how I currently approach my work and process.
            </p>
            <h3 className="f6 ttu fw6 lh-title black-40 mt0 mb0 tooltip">
              Inclusion<span className="tooltiptext black">👥</span>
            </h3>
            <h4 className="fw4 pv1 mt2 mb4">
              People are the essence of the technology industry. Without people, we would have no clear purpose in our work. I believe in helping people feel welcomed and included when it comes to my work and who I am as a person.
            </h4>

            <h3 className="f6 ttu fw6 lh-title black-40 mt0 mb0 tooltip">
              Accessibility<span className="tooltiptext black">🎨</span>
            </h3>
            <h4 className="fw4 pv1 mt2 mb4">
              Unfortunately overlooked nowadays, Accessibility is a very important aspect of my work. I believe in equal access to technology and providing the tools and refinements to style, typography, and code neccessary to do so.
            </h4>

            <h3 className="f6 ttu fw6 lh-title black-40 mt0 mb0 tooltip">
              Simplicity<span className="tooltiptext black">⚫️</span>
            </h3>
            <h4 className="fw4 pv1 mt2 mb4">
              Although an overused term, Simplicity is at the heart of my goals in my work. I believe in a simple approach with a touch of uniqueness, developing work into the purest form with tasteful novelty.
            </h4>

            <h3 className="f6 ttu fw6 lh-title black-40 mt0 mb0 tooltip">
              Transparency<span className="tooltiptext black">👓</span>
            </h3>
            <h4 className="fw4 pv1 mt2 mb4">
              Openly and actively sharing my process to help others is a core element of my process. I always try my best to share what I can for the benefit of others. My weekly blog and weekly streams of me working are a direct approach for me to give back to the industry.
            </h4>

            <h3 className="f6 ttu fw6 lh-title black-40 mt0 mb0 tooltip">
              Ethics<span className="tooltiptext black">💖</span>
            </h3>
            <h4 className="fw4 pv1 mt2 mb4">
              I believe that morals and ethics in design play a large part in process. Both business and experience decisions based on the greater good of users makes a better, more personable product and brand.
            </h4>
          </div>
        </div>

        <div className="flex flex-column w-25-l pv3-l ph4-l pa5-m pa4 br bb b--black-10">
          <Work />
          <Spacer />

          <Title
            title="Experience"
            toolTipText="💼">
          </Title>
          <h3 className="black-40 f5 fw6 lh-title mt3 mb0">
            2017
          </h3>
          <ul className="list ml0 pl0 mb4">
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Speak</span>
              <br />Web Designer & Developer
            </li>
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Satchel Health</span>
              <br />Design Lead & Developer
            </li>
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Livtra</span>
              <br />Co-Founder
            </li>
          </ul>

          <h3 className="black-40 f5 fw6 lh-title mt3 mb0">
            2016
          </h3>
          <ul className="list ml0 pl0 mb4">
            <li className="fw4 pv2">Graduated College</li>
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Satchel Health</span>
              <br />Product Designer
            </li>
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Quarry</span>
              <br />Co-Founder
            </li>
          </ul>

          <h3 className="black-40 f5 fw6 lh-title mt3 mb0">
            2015
          </h3>
          <ul className="list ml0 pl0 mb4">
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Vrasa</span>
              <br />Designer
            </li>
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Satchel Health</span>
              <br />Product Designer
            </li>
          </ul>

          <h3 className="black-40 f5 fw6 lh-title mt3 mb0">
            2014
          </h3>
          <ul className="list ml0 pl0 mb4">
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Vrasa</span>
              <br />Designer
            </li>
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Calligritype</span>
              <br />Founder
            </li>
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Illustree</span>
              <br />Founder
            </li>
          </ul>

          <h3 className="black-40 f5 fw6 lh-title mt3 mb0">
            2013
          </h3>
          <ul className="list ml0 pl0 mb4">
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Fivestone Studios</span>
              <br />3D Designer
            </li>
            <li className="fw4 pv2 lh-copy dib mr4">
              <span className="b">Freelance</span>
              <br />Branding, Illustration, UI/UX
            </li>
          </ul>
        </div>

        <div className="flex flex-column w-25-l pv3-l ph4-l pa5-m pa4 br bb b--black-10">
          <Title
            title="Contact"
            toolTipText="💌">
          </Title>
          <div className="db">
            <a href="mailto:hi@cortes.us" target="_blank" rel="nofollow" className="db mt3 mb4 f4 ttu link shine bg-text-clip dim fw7">
              hi@cortes.us
            </a>
            <Feature
              href="https://twitter.com/fromcortes"
              name="Twitter" />
            <Feature
              href="https://instagram.com/fromcortes"
              name="Instagram" />
            <Feature
              href="https://dribbble.com/fromcortes"
              name="Dribbble" />
            <Feature
              href="https://github.com/fromcortes"
              name="Github" />
            <Feature
              href="https://twitch.tv/fromcortes"
              name="Twitch" />
            <Feature
              href="https://fromcortes.tumblr.com"
              name="Tumblr" />
            <Feature
              href="https://unsplash.com/@cortes"
              name="Unsplash" />
            <Feature
              href="https://ello.co/crts"
              name="Ello" />
          </div>

          <Spacer />

          <Title
            title="Newsletter"
            toolTipText="📬">
          </Title>
          <p className="lh-copy measure mb4">
            Join my monthly newsletter for valuable information including useful recommendations,
            and updates on new work, articles, and projects.
          </p>
          <form action="https://cortes.us9.list-manage.com/subscribe/post" method="POST">
            {/*Hidden fields for Mailchimp account and list*/}
            <input type="hidden" name="u" value="574c615abddacf2d7b51d2104" />
            <input type="hidden" name="id" value="7bd40f02a4" />
            <label className="clip" for="email-address">Email Address</label>
            <input className="f6 shine bg-text-clip input-reset ba b--black-10 black bg-transparent pa3 w-100 br2 mb3"
              placeholder="Email Address"
              type="email" name="MERGE0" tabindex="-1" id="b_email" />
            <input className="bn fw6 f6 ttu button-reset dim pv3 tc white bg-gradient pointer w-100 br2" type="submit" value="Subscribe" />
          </form>


          <Spacer />

          <Title
            title="Recent Writing"
            toolTipText="📝">
          </Title>
          <div className="fw4 lh-copy">
            <p className="lh-copy measure mb4">
              I write an article every week for my blog, <a className="link link-underlined rainbow-hover black mh1 fw6" target="_blank" rel="nofollow" href="https://blog.cortes.us">The Rate of Change</a>. Here are some of the most recent articles.
            </p>
            <Feature
              href="https://blog.cortes.us/here-is-my-illustration-process"
              name="Here’s My Illustration Process" />
            <Feature
              href="https://blog.cortes.us/2017"
              name="My 2017" />
            <Feature
              href="https://blog.cortes.us/giant-list-of-design-inspiration-to-use"
              name="Here’s a Giant List of Design Inspiration for You to Use" />
            <Feature
              href="https://blog.cortes.us/a-global-rule-for-your-work"
              name="A Global Rule for Your Work" />
          </div>

          <Spacer />

          <Title
            title="Recognition"
            toolTipText="🏆">
          </Title>
          <div className="fw4 lh-copy">
            <p className="lh-copy measure mb4">
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
          </div>

          <Spacer />

          <Title
            title="Hobbies"
            toolTipText="🤓">
          </Title>
          <p className="fw4 lh-copy">
            When I'm not designing or writing code you can find me trying to learn new things, playing video games,
            trying new restaurants, writing, learning about coffee, trying out new tech, treating my dogs like kids,
            catching Pokémon, or making music.
          </p>

        </div>
      </div>
    );
  }
}

export default Desktop;
