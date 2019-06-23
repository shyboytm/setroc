import React, { Component } from 'react';

import Button from '../components/Button';
import Card from '../components/Card';
import H from '../components/H';
import Item from '../components/Item';
import Link from '../components/Link';

class Home extends Component {
  render() {

    const dennisCortes = require("../img/dennis-cortes-product-designer.jpeg")
    const hm06Audio = require("../music/HM-06.mp3");
    const hm06Artwork = require("../img/hm-06-album-artwork.png");

    return (
      <div className="blur center mw9 pa5-l pa4-m pa3">
        <div id="list" className="content-end flex flex-wrap">
          <Card size={2} title="Welcome">
            <H size={2}>I'm Dennis,</H>
            <p className="black-70 f6 lh-copy">
              a 24 year old digital designer and illustrator that codes based in the USA from Bayamón, Puerto Rico.
              I grew up mainly in South Florida and studied print design in college, learning code, product, and
              business on my own time. I love working day-to-day on projects that require multidisciplinary
              skill sets solving complex issues that make the lives of people better. I've been designing for
              7+ years and coding for 4+ years.
            </p>
            <p className="black-70 f6 lh-copy">
              I enjoy thinking about experience based solutions through use of design and technological
              implications. I find internal systematic struggles intriguing and set to solve and improve
              processes to better the way people work and interact with technology. Through merging
              expertise in product, branding, illustration, and web technologies, I can better approach
              problems for modern overarching solutions.
            </p>
            <p className="black-70 f6 lh-copy mb4">
              When I'm not working on design, I spend time coding for the web to build projects to benefit
              myself and others. I also work on new music under the alias Cordio. Besides that you'll find
              me spending time with my pets and my girlfriend, traveling, making pour overs, learning, playing
              video games, and eating food.
            </p>
            <div className="mb3">
              <h3 className="black-30 f7 mv3 tracked ttu">Contact me</h3>
              <div className="flex-wrap">
                <Button
                  href="mailto:hi@cortes.us"
                  name="hi@cortes.us"
                  subname="Email me" />
                <Button
                  href="https://twitter.com/fromcortes"
                  name="Twitter" />
                <Button
                  href="https://instagram.com/fromcortes"
                  name="Instagram" />
                <Button
                  href="https://dribbble.com/fromcortes"
                  name="Dribbble" />
                <Button
                  href="https://github.com/fromcortes"
                  name="Github" />
                <Button
                  href="https://rawg.io/@cortes/overview"
                  name="RAWG" />
              </div>
            </div>
          </Card>
          <Card size={3} title="Experience">
            <div className="absolute ba b--white bw2 bg-white br-100 h3 w3 shadow-colored bg-white overflow-hidden right--4 top--2">
              <img src={dennisCortes} alt="Dennis Cortés front portrait view from torso up"/>
            </div>
            <H size={2}>Currently</H>
            <ul className="list pl0 mb4">
              <Item>
                Building the future of finances at <Link href="https://dave.com">Dave</Link>
              </Item>
              <Item>
                Producing beat music as <Link href="/music">Cordio</Link>
              </Item>
              <Item>
                Making physical products at <Link href="https://trademarked.store">Trademarked</Link>
              </Item>
              <Item>
                Making a tool called <Link href="https://thegiftatlas.com">The Gift Atlas</Link>
              </Item>
              <Item>
                Curating <Link href="https://instagram.com/calligritype">Calligritype</Link> and <Link href="https://instagram.com/illustree">Illustree</Link>
              </Item>
            </ul>
            <H size={2}>Previously</H>
            <ul className="list pl0 mb4">
              <Item>
                Product Designer at <Link href="https://metalab.co">MetaLab</Link>
                <span className="b black-30 db f7 nt1 nb2">2016-2018</span>
              </Item>
              <Item>
                Writing articles on <Link href="https://blog.cortes.us">The Rate of Change</Link>
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
            </ul>
          </Card>
          <Card size={.5} title="My Work">
            <p className="black-70 f6 lh-copy">

            </p>
          </Card>
          <Card size={.5} title="My Music">
            <div className="flex mb4">
              <div style={{"height":"12rem", "width":"12rem"}} className="ba b--white bw2 bg-white br3 mt3 shadow-colored">
                <img src={hm06Artwork} alt="Album artwork for HM-06 by Cordio" className="br2"/>
              </div>
              <div className="pl4">
                <H size={4}>Latest Release</H>
                <H size={1}>HM-06</H>
                <span className="black-40 db mb4 nt3">EP by Cordio</span>
              </div>
            </div>
            <audio className="w-100" controls controlsList="nodownload" preload="auto">
              <source src={hm06Audio} type="audio/mpeg" />
            </audio>
            <ol className="list pl0">
              <Item type="no spacing">
                <div className="bt b--black-05 flex items-center justify-between pv2">
                  <div>
                    <span className="black-40 mr3">1</span>
                    Precautionary
                  </div>
                  <div>
                    <span className="black-40 mr3">0:00</span>
                  </div>
                </div>
              </Item>
              <Item type="no spacing">
                <div className="bt b--black-05 flex items-center justify-between pv2">
                  <div>
                    <span className="black-40 mr3">2</span>
                    Low Fidelity
                  </div>
                  <div>
                    <span className="black-40 mr3">2:38</span>
                  </div>
                </div>
              </Item>
              <Item type="no spacing">
                <div className="bt b--black-05 flex items-center justify-between pv2">
                  <div>
                    <span className="black-40 mr3">3</span>
                    Héroe
                  </div>
                  <div>
                    <span className="black-40 mr3">5:18</span>
                  </div>
                </div>
              </Item>
              <Item type="no spacing">
                <div className="bt b--black-05 flex items-center justify-between pv2">
                  <div>
                    <span className="black-40 mr3">4</span>
                    Strength
                  </div>
                  <div>
                    <span className="black-40 mr3">7:25</span>
                  </div>
                </div>
              </Item>
              <Item type="no spacing">
                <div className="bt b--black-05 flex items-center justify-between pv2">
                  <div>
                    <span className="black-40 mr3">5</span>
                    Kalio
                  </div>
                  <div>
                    <span className="black-40 mr3">10:07</span>
                  </div>
                </div>
              </Item>
              <Item type="no spacing">
                <div className="bt b--black-05 flex items-center justify-between pv2">
                  <div>
                    <span className="black-40 mr3">6</span>
                    Not a Dream
                  </div>
                  <div>
                    <span className="black-40 mr3">13:15</span>
                  </div>
                </div>
              </Item>
            </ol>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
