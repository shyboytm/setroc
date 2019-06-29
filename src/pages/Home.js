import React, { Component } from 'react';

import Button from '../components/Button';
import Card from '../components/Card';
import H from '../components/H';
import ImageCard from '../components/ImageCard';
import Item from '../components/Item';
import Link from '../components/Link';

class Home extends Component {
  render() {

    const hm06Audio = require("../music/HM-06.mp3");
    const hm06Artwork = require("../img/hm-06-album-artwork.png");

    const portfolioImage = require("../img/work/my-portfolio-thumbnail.png");
    const daveImage = require("../img/work/dave-inc-portfolio-thumbnail.png");
    const trademarkedImage = require("../img/work/trademarked-portfolio-thumbnail.gif");
    const metalabImage = require("../img/work/metalab-portfolio-thumbnail.png");
    const tastenotesImage = require("../img/work/taste-notes-portfolio-thumbnail.png");
    const thegiftatlasImage = require("../img/work/the-gift-atlas-portfolio-thumbnail.png");
    const prompterImage = require("../img/work/prompter-portfolio-thumbnail.png");
    const ambiImage = require("../img/work/ambi-portfolio-thumbnail.png");
    const eagleviewImage = require("../img/work/eagleview-portfolio-thumbnail.png");
    const remotelyImage = require("../img/work/remotely-portfolio-thumbnail.png");
    const livtraImage = require("../img/work/livtra-portfolio-thumbnail.png");
    const calligritypeImage = require("../img/work/calligritype-portfolio-thumbnail.png");
    const quarryImage = require("../img/work/quarry-portfolio-thumbnail.png");
    const illustreeImage = require("../img/work/illustree-portfolio-thumbnail.png");
    const trocImage = require("../img/work/troc-portfolio-thumbnail.png");
    const wiseacreImage = require("../img/work/wiseacre-portfolio-thumbnail.png");
    const uncleKragersImage = require("../img/work/unclekragers-portfolio-thumbnail.png");
    const twelveOunceImage = require("../img/work/twelveounce-portfolio-thumbnail.png");

    return (
      <div className="blur center mw9 pa4-ns pa3">
        <div id="list" className="content-end flex flex-wrap">
          <Card size={3} title="Welcome" buttonText="hi@cortes.us" href="mailto:hi@cortes.us">
            <H size={2}>I'm Dennis Cortés <span className="absolute black spin ml2">👋</span></H>
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
            <p className="black-70 f6 lh-copy">
              I rarely take on freelance projects nowadays, but if you're working on something exciting feel
              free to reach out if I can be of any help or guidance.
            </p>
            {/*<p className="black-70 f6 lh-copy mb4">
              When I'm not working on design, I spend time coding for the web to build projects to benefit
              myself and others. I also work on new music under the alias Cordio. Besides that you'll find
              me spending time with my pets and my girlfriend, traveling, making pour overs, learning, playing
              video games, and eating food.
            </p>*/}
            <div className="mb3">
              <h3 className="black-30 f7 mv3 tracked ttu">Contact me</h3>
              <div className="flex-wrap">
                <Button
                  href="mailto:hi@cortes.us"
                  name="hi@cortes.us" />
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
                  href="https://youtube.com/cortesarts"
                  name="YouTube" />
                <Button
                  href="https://soundcloud.com/cordio"
                  name="Soundcloud" />
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
            <p className="black-70 f6 lh-copy">
              I specialize in design, mainly working in product design for both the web and mobile apps. I have extensive
              experience with both visual and interaction design, design systems, user research, branding, and shipping products.
              I am also a front-end developer focusing on React, CSS architecture, and component systems.
            </p>
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
          <Card size={3} title="My Music" buttonText="See All" href="https://open.spotify.com/artist/75jwCgOQHHq1qQAJ2dqoul?si=Fv-8PlK2Q3indabwNGMOnQ">
              <div style={{"height":"90%", "width":"90%"}} className="ba b--white bw2 bg-white br3 center mv3 shadow-colored">
                <img src={hm06Artwork} alt="Album artwork for HM-06 by Cordio" className="br2"/>
              </div>
              <div className="tc mv4">
                <H size={1}>HM-06</H>
                <span className="black-40">EP by Cordio</span>
              </div>
            <audio className="w-100" controls controlsList="nodownload" preload="auto">
              <source src={hm06Audio} type="audio/mpeg" />
            </audio>
            <ol className="list pl0 pv0">
              <Item type="no spacing">
                <div className="flex items-center justify-between pb2">
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
                <div className="bt b--black-05 flex items-center justify-between pt2">
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
          <Card size={1} title="My Work">
            <ul id="list" className="content-end flex flex-wrap list pl0">
              <ImageCard
                color="black-70"
                href="https://dribbble.com/fromcortes"
                image={portfolioImage}
                name="My Portfolio"
                description="An overview of the type of work I do and the work that I can show publicly." />
              <ImageCard
                color="green"
                href="https://dave.com"
                image={daveImage}
                name="Dave Inc."
                description="This is where I work full-time, I work on everything from our website to our product." />
              <ImageCard
                color="black-40"
                href="https://trademarked.store"
                image={trademarkedImage}
                name="Trademarked"
                description="Nice stuff for nice people with character. A line of minimal clothing to buy." />
              <ImageCard
                color="purple"
                href="https://metalab.co"
                image={metalabImage}
                name="MetaLab"
                description="My previous full-time job. Most work I did is under NDA but I did help create their new site." />
              <ImageCard
                color="orange"
                href="https://coffee.cortes.us"
                image={tastenotesImage}
                name="Taste Notes"
                description="My personal blog about coffee methods, roasts, and shops that I've tried and rated." />
              <ImageCard
                color="light-purple"
                href="https://thegiftatlas.com"
                image={thegiftatlasImage}
                name="The Gift Atlas"
                description="A collective gift giving guide tool to help others buy the perfect gift for anyone." />
              <ImageCard
                color="gold"
                href="https://prompter.cortes.us"
                image={prompterImage}
                name="Prompter"
                description="A prompt randomizer for artists and illustrators to use for practicing and improving." />
              <ImageCard
                color="pink"
                href="https://www.facebook.com/ambigeneration/videos/782611065420372/"
                image={ambiImage}
                name="Ambi"
                description="A product that aims to replace those crappy existing internal school systems." />
              <ImageCard
                color="blue"
                href="https://apps.apple.com/app/id352070517"
                image={eagleviewImage}
                name="EagleView"
                description="A product that helps contractors get accurate home reports and track their projects." />
              <ImageCard
                color="black-40"
                href="https://remotely.cortes.us"
                image={remotelyImage}
                name="Remotely"
                description="A fun experiment and attempt at making a resource for remote workers." />
              <ImageCard
                color="light-purple"
                href="https://livtra.co"
                image={livtraImage}
                name="Livtra"
                description="A life-tracking tool I was working on that ended up being too advanced for me to create alone." />
              <ImageCard
                color="black"
                href="https://instagram.com/calligritype"
                image={calligritypeImage}
                name="Calligritype"
                description="A place for artists & designers to get inspired that I started back in 2013." />
              <ImageCard
                color="black-70"
                href="https://usequarry.com"
                image={quarryImage}
                name="Quarry"
                description="A place where I used to house all my side projects. Obsolete now, but still love the site I made." />
              <ImageCard
                color="green"
                href="https://instagram.com/illustree"
                image={illustreeImage}
                name="Illustree"
                description="A resource and showcase for illustration inspiration that I started back in 2013." />
              <ImageCard
                color="dark-blue"
                href="https://blog.cortes.us"
                image={trocImage}
                name="The Rate of Change"
                description="My personal blog that I've written 100+ articles for over the past few years." />
              <ImageCard
                color="black"
                href="https://wiseacrebrew.com"
                image={wiseacreImage}
                name="Wiseacre"
                description="Quirky website created for one of the best breweries in the South." />
              <ImageCard
                color="black-50"
                href="http://unclekragers.com/app"
                image={uncleKragersImage}
                name="Uncle Kragers"
                description="A salsa tracker app for homemade salsa in Nashville." />
              <ImageCard
                color="blue"
                href="http://12ounceapp.com/"
                image={twelveOunceImage}
                name="Twelve Ounce"
                description="Coffee subscription app for unlimited coffee at coffee shops in Nashville." />
            </ul>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
