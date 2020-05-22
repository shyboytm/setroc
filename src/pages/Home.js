import React, { Component } from 'react';

import Button from '../components/Button';
import Card from '../components/Card';
import H from '../components/H';
import ImageCard from '../components/ImageCard';
import Item from '../components/Item';
import Link from '../components/Link';
import FullScreenWork from '../components/FullScreenWork';

class Home extends Component {
  render() {

    const dennisCortes = require("../img/dennis-cortes-product-designer.jpeg")

    const portfolioImage = require("../img/work/my-portfolio-thumbnail.png");
    const mothershipImage = require("../img/work/mothership-portfolio-thumbnail.png");
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
      <div className="blur center mw9 pt5">
        <div id="list" className="center content-end flex flex-wrap w-90">
          <div className="flex mb6">
            <div className="w-100-l">
              <h1 className="db f3 fw4 lh-title mt0 nb4 w-100">Dennis Cortes</h1>
              <h2 className="db black-70 f3 mb5 fw4">Designer that codes, teaches, and makes music</h2>
              <div className="mv4">
                <Button
                  href="mailto:hi@cortes.us"
                  name="hi@cortes.us" />
                <Button
                  href="https://twitter.com/shyboytm"
                  name="Twitter" />
                <Button
                  href="https://instagram.com/shyboytm"
                  name="Instagram" />
                <Button
                  href="https://dribbble.com/shyboytm"
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
              <div className="flex">
                <div className="w-50-l pr4">
                  <p className="black-70 lh-copy">
                    I’m based in Los Angeles, CA from Bayamón, Puerto Rico. I currently lead product 
                    design at Mothership, produce music as Cordio, and run my Patreon. I've been 
                    designing for 8+ years and coding for 4+ years.
                  </p>
                  <p className="black-70 lh-copy">
                    I specialize in design, mainly working in product design for both the web and 
                    mobile apps. I have extensive experience with both visual and interaction design, 
                    design systems, user research, branding, and shipping products. I also code—focusing 
                    on React, CSS architecture, and component systems.
                  </p>
                </div>
                <div className="w-50-l pr5">
                  <p className="black-70 lh-copy">
                    I have produced 9 albums, blending elements from electronic, ambient, jazz, lofi, and 
                    hip-hop under the alias Cordio. I also design album covers and make music for films, 
                    shows, and podcasts. Listen to all my music anywhere you stream music, or snag some 
                    on my Bandcamp.
                  </p>
                  <p className="black-70 lh-copy">
                    Through my Patreon community I create detailed tutorials on design and music production, 
                    offer my source files, and even copyright free files of my music (and more). I also curate 
                    inspiration through multiple blogs including Illustree.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-40">
              <img className="br3 desaturate shadow-large" src={dennisCortes} alt="Dennis Cortés front portrait view from torso up"/>
            </div>
          </div>

          <ul id="list" className="content-end flex flex-wrap list pl0">
            <ImageCard
              href="https://dribbble.com/fromcortes"
              image={portfolioImage}
              name="My Portfolio"
              description="An overview of the type of work I do and the work that I can show publicly." />
            <ImageCard
              href="https://mothership.com"
              image={mothershipImage}
              name="Mothership"
              description="My full-time job, where I lead the product design team to ship things." />
            <ImageCard
              href="https://dave.com"
              image={daveImage}
              name="Dave Inc."
              description="A previous full-time job, I worked on everything from our website to our product." />
            <ImageCard
              href="https://trademarked.store"
              image={trademarkedImage}
              name="Trademarked"
              description="Nice stuff for nice people with character. A line of minimal clothing to buy." />
            <ImageCard
              href="https://metalab.co"
              image={metalabImage}
              name="MetaLab"
              description="A previous full-time job. Most work I did is under NDA but I did help create their new site." />
            <ImageCard
              href="https://coffee.cortes.us"
              image={tastenotesImage}
              name="Taste Notes"
              description="My personal blog about coffee methods, roasts, and shops that I've tried and rated." />
            <ImageCard
              href="https://thegiftatlas.com"
              image={thegiftatlasImage}
              name="The Gift Atlas"
              description="A collective gift giving guide tool to help others buy the perfect gift for anyone." />
            <ImageCard
              href="https://prompter.cortes.us"
              image={prompterImage}
              name="Prompter"
              description="A prompt randomizer for artists and illustrators to use for practicing and improving." />
            <ImageCard
              href="https://www.facebook.com/ambigeneration/videos/782611065420372/"
              image={ambiImage}
              name="Ambi"
              description="A product that aims to replace those crappy existing internal school systems." />
            <ImageCard
              href="https://apps.apple.com/app/id352070517"
              image={eagleviewImage}
              name="EagleView"
              description="A product that helps contractors get accurate home reports and track their projects." />
            <ImageCard
              href="https://remotely.cortes.us"
              image={remotelyImage}
              name="Remotely"
              description="A fun experiment and attempt at making a resource for remote workers." />
            <ImageCard
              href="https://livtra.co"
              image={livtraImage}
              name="Livtra"
              description="A life-tracking tool I was working on that ended up being too advanced for me to create alone." />
            <ImageCard
              href="https://instagram.com/calligritype"
              image={calligritypeImage}
              name="Calligritype"
              description="A place for artists & designers to get inspired that I started back in 2013." />
            <ImageCard
              href="https://usequarry.com"
              image={quarryImage}
              name="Quarry"
              description="A place where I used to house all my side projects. Obsolete now, but still love the site I made." />
            <ImageCard
              href="https://instagram.com/illustree"
              image={illustreeImage}
              name="Illustree"
              description="A resource and showcase for illustration inspiration that I started back in 2013." />
            <ImageCard
              href="http://blog.cortes.us"
              image={trocImage}
              name="The Rate of Change"
              description="My personal blog that I've written 100+ articles for over the past few years." />
            <ImageCard
              href="https://wiseacrebrew.com"
              image={wiseacreImage}
              name="Wiseacre"
              description="Quirky website created for one of the best breweries in the South." />
            <ImageCard
              href="http://unclekragers.com/app"
              image={uncleKragersImage}
              name="Uncle Kragers"
              description="A salsa tracker app for homemade salsa in Nashville." />
            <ImageCard
              href="http://12ounceapp.com/"
              image={twelveOunceImage}
              name="Twelve Ounce"
              description="Coffee subscription app for unlimited coffee at coffee shops in Nashville." />
          </ul>
        </div>
        <FullScreenWork 
          image={eagleviewImage} />
      </div>
    );
  }
}

export default Home;
