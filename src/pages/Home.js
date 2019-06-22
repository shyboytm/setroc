import React, { Component } from 'react';

import Button from '../components/Button';
import Card from '../components/Card';
import Item from '../components/Item';
import Link from '../components/Link';
import Title from '../components/Title';

class Home extends Component {
  render() {
    return (
      <div className="blur center mw9 pa5-l pa4-m pa3">
        <div id="list" className="content-end flex flex-wrap">
          <Card size={2} title="Welcome">
            <h2 className="black-70 f4 fw6">I'm Dennis,</h2>
            <p className="black-70 f6 lh-copy">
              a 24 year old digital designer and illustrator that codes based in the USA from Bayamón, Puerto Rico.
              I grew up mainly in South Florida and studied design in college after putting my rap
              producer dreams to rest. I love working day-to-day on projects that require multidisciplinary
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
              me spending time with my dog and my girlfriend, traveling, making pour overs, learning, playing
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
            <h2 className="black-70 f4 fw6">Currently</h2>
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
            <h2 className="black-70 f4 fw6">Previously</h2>
            <ul className="list pl0 mb4">
              <Item>
                Product Designer at <Link href="https://metalab.co">MetaLab</Link>
                <span className="b black-30 db f7 nt1 nb2">2017-2018</span>
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
            <h2 className="black-70 f4 fw6">Latest Release</h2>
            <div className="flex mb4">
              <div className="bg-white br3 h5 shadow w5"></div>
              <div className="pl4">
                <h3 className="black-70 f2 fw6 mb2">HM-06</h3>
                <span className="black-70 db mb4">EP by Cordio</span>
                <Button
                  href="#"
                  name="Play" />
              </div>
            </div>
            <ol className="list pl0">
              <Item type="no spacing">
                <div className="bt b--black-05 pv2">
                  <span className="black-40 mr3">1</span> Precautionary
                </div>
              </Item>
              <Item type="no spacing">
                <div className="bt b--black-05 pv2">
                  <span className="black-40 mr3">2</span> Low Fidelity
                </div>
              </Item>
              <Item type="no spacing">
                <div className="bt b--black-05 pv2">
                  <span className="black-40 mr3">3</span> Héroe
                </div>
              </Item>
              <Item type="no spacing">
                <div className="bt b--black-05 pv2">
                  <span className="black-40 mr3">4</span> Strength
                </div>
              </Item>
              <Item type="no spacing">
                <div className="bt b--black-05 pv2">
                  <span className="black-40 mr3">5</span> Kalio
                </div>
              </Item>
              <Item type="no spacing">
                <div className="bt b--black-05 pv2">
                  <span className="black-40 mr3">6</span> Not a Dream
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
