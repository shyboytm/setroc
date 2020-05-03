import React, { Component } from 'react';

import Item from '../../components/Item';
import Link from '../../components/Link';
import Button from '../../components/Button';
import H from '../../components/H';

class About extends Component {
  render() {

    

    return (
      <div id="albums" className="blur center mw9 pa4-ns pa3">
        About
            <p className="black-70 lh-copy">
              Designer that codes based in Los Angeles, CA from Bayamón, Puerto Rico.
              I grew up mainly in South Florida and studied print design in college, learning code, product, and
              business on my own time. I love working day-to-day on projects that require multidisciplinary
              skill sets solving complex issues that make the lives of people better. I've been designing for
              8+ years and coding for 4+ years.
            </p>
            <p className="black-70 lh-copy">
              I specialize in design, mainly working in product design for both the web and mobile apps. I have extensive
              experience with both visual and interaction design, design systems, user research, branding, and shipping products.
              I am also a front-end engineer focusing on React, CSS architecture, and component systems.
            </p>
            <p className="black-70 lh-copy">
              Got a project I can help with? Let's chat!
            </p>
        <H size={2}>Currently</H>
          <ul className="cf list pl0 mb4">
            <Item>
              Lead Product Designer at <Link href="https://mothership.com">Mothership</Link>
            </Item>
            <Item>
              Producing beat music as <Link href="/music">Cordio</Link>
            </Item>
            <Item>
              Curating <Link href="https://instagram.com/calligritype">Calligritype</Link> and <Link href="https://instagram.com/illustree">Illustree</Link>
            </Item>
          </ul>
          <H size={2}>Previously</H>
          <ul className="list pl0 mb5 db">
            <Item>
              Senior Product Designer at <Link href="https://dave.com">Dave</Link>
              <span className="b black-30 db f7 nt1 nb2">2019</span>
            </Item>
            <Item>
              Product Designer at <Link href="https://metalab.co">MetaLab</Link>
              <span className="b black-30 db f7 nt1 nb2">2016-2018</span>
            </Item>
            <Item>
              Writing articles on <Link href="http://blog.cortes.us">The Rate of Change</Link>
              <span className="b black-30 db f7 nt1 nb2">2016-2018</span>
            </Item>
            <Item>
              Building things for others at <Link href="https://usequarry.com">Quarry</Link>
              <span className="b black-30 db f7 nt1 nb2">2015-2018</span>
            </Item>
            <Item>
              VP of Design at <Link href="https://www.mobihealthnews.com/content/satchel-health-adds-another-15m-its-post-acute-focused-telemedicine-platform">Satchel Health</Link>
              <span className="b black-30 db f7 nt1 nb2">2014-2016</span>
            </Item>
            <Item>
              Designer at <Link href="https://vrasa.com">Vrasa</Link>
              <span className="b black-30 db f7 nt1 nb2">2013-2014</span>
            </Item>
            <div className="h4"></div>
          </ul>

          <H size={3}>Recognition</H>
            <p className="black-70 lh-copy mb4">
              From awards to interviews, here are some folks who think my work and I are pretty cool. I'm always open to interviews and podcasts if that's your thing.
            </p>
            <div className="mb4 mt0">
              <Button
                href="https://davidsilva.co/podcast/dennis-cortes-how-to-find-focus-and-the-challenges-of-ux-in-product-design/"
                name="Always Sunday" />
              <Button
                href="https://daily.bandcamp.com/2018/05/23/best-new-ambient-may-2018/"
                name="Bandcamp" />
              <Button
                href="https://www.typewolf.com/site-of-the-day/taste-notes"
                name="Typewolf" />
              <Button
                href="http://www.creative-portfolios.com/portfolio_page/dennis-cortes/"
                name="Creative Port" />
              <Button
                href="https://sitesee.co/sites/taste-notes"
                name="Site See" />
              <Button
                href="https://www.youtube.com/watch?v=8vTTJ-W-Axc&feature=youtu.be"
                name="ta–lk" />
              <Button
                href="https://365awesomedesigners.com/dennis-cortes/"
                name="365 Designers" />
              <Button
                href="https://www.youtube.com/watch?v=XWLhtUGbQwk&t=1s"
                name="Logomarked" />
            </div>
          <H size={3}>Outside of Work</H>
          <p className="black-70 lh-copy mb4">
            When I'm not working on design, I mainly work on new music under the alias Cordio. Besides that you'll find me spending time with my dog and my
            girlfriend, traveling, making pour overs, learning, playing video games, and eating food. My girlfriend and I make physical products and a podcast
            in our free time.
          </p>
          <p className="black-70 lh-copy mb4">
            I used to more often since I found this thing called a work/life balance, but every now and then I'll get the itch to design and code outside
            of my full-time job making things that I wish existed. I'd love to grab coffee or hop on a video call and talk the shop about music, games, code, 
            design, life, etc. Feel free to shoot over an email!
          </p>
          {/* <H size={3}>Gaming</H>
          <p className="black-70 lh-copy mb4">
            Always down to play some multiplayer games and chat, feel free to add me! Mortal Kombat 11, Rocket League, and Fortnite are my go-to online games currently.
            My PSN is fromcortes :)
          </p> */}
      </div>
    );
  }
}

export default About;
