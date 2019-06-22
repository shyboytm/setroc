import React, { Component } from 'react';

import Card from '../components/Card';
import Item from '../components/Item';
import Link from '../components/Link';
import Title from '../components/Title';

class Home extends Component {
  render() {
    return (
      <div className="blur pa5-l pa4-m pa3">
        <div id="list" className="content-end flex flex-wrap">
          <Card size={2} title="Welcome friend">
            <h2>I'm Dennis,</h2>
            <p className="black-60 f6 lh-copy">
              a digital designer and illustrator that codes based in the USA from Bayamón, Puerto Rico.
              I grew up mainly in South Florida and studied design in college after putting my rap
              producer dreams to rest. I love working day-to-day on projects that require multidisciplinary
              skill sets solving complex issues that make the lives of people better.
            </p>
            {/*<p className="black-60 f6 lh-copy">
              I enjoy thinking about experience based solutions through use of design and technological
              implications. I find internal systematic struggles intriguing and set to solve and improve
              processes to better the way people work and interact with technology. Through merging
              expertise in product, branding, illustration, and web technologies, I can better approach
              problems for modern overarching solutions.
            </p>*/}
            <p className="black-60 f6 lh-copy mb4">
              When I'm not working on design, I spend time coding for the web to build projects to benefit
              myself and others. I also work on new music under the alias Cordio. Besides that you'll find
              me spending time with my dog and my girlfriend, traveling, making pour overs, learning, playing
              video games, and eating food.
            </p>
            <div className="b bt b--black-10">
              <h3 className="black-30 f7 tracked ttu">Contact me</h3>
            </div>
          </Card>
          <Card size={3} title="I'm currently">
            <ul className="list pl0">
              <Item>
                Building the future of finances at <Link href="https://dave.com">Dave</Link>
              </Item>
              <Item>
                Making physical products at <Link href="https://trademarked.store">Trademarked</Link>
              </Item>
            </ul>
          </Card>
          <Card size={.5} title="I'm currently">
            <ul className="list pl0">
              <Item>
                Building the future of finances at <Link href="https://dave.com">Dave</Link>
              </Item>
              <Item>
                Making physical products at <Link href="https://trademarked.store">Trademarked</Link>
              </Item>
            </ul>
          </Card>
          <Card size={.5} title="I'm currently">
            <ul className="list pl0">
              <Item>
                Building the future of finances at <Link href="https://dave.com">Dave</Link>
              </Item>
              <Item>
                Making physical products at <Link href="https://trademarked.store">Trademarked</Link>
              </Item>
            </ul>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
