import React, { Component } from 'react';

import TitleParagraph from '../../../TitleParagraph';

class Approach extends Component {
  render() {
    return (
      <div id="Approach">
        <div className="w-100 bg-map bg-black-20 pv5-l pv3 bb bt b--black-05">
          <div className="w-80 center cf">
            <h2 className="f1-ns f2 fw6 white mb5">Approach</h2>
            <div className=" fr-ns fn tl">
              <p className="f4 lh-subtitle black-60 measure mb5">
                I believe all work is more than just technique. Thought process is driven by a combination of
                knowledge, ethics, and philosophy. I think about these topics a lot and am always trying to refine and
                improve, here's how I currently approach my work and process.
              </p>
            </div>
            <div className="content-end flex flex-wrap pv3 w-100 cf white">
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Inclusion"
                  toolTipText="👥"
                  paragraph="My family and my friends are constant reminders of humility. My girlfriend and my
                             dogs keep me level headed and inspired to balance my work and my life. Creating
                             a better, more enjoyable life for others motivates my work." />
              </div>
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Accessibility"
                  toolTipText="🎨"
                  paragraph="When I'm not designing or writing code you can find me writing, playing video games,
                             learning about coffee, trying out new tech, treating my dogs like kids, catching Pokémon, or making music." />
              </div>
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Simplicity"
                  toolTipText="⚫️"
                  paragraph="When I'm not designing or closing elements you can find me writing, playing video games,
                             learning about coffee, catching Pokémon, or making sick beatz." />
              </div>
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Discovery"
                  toolTipText="🌎"
                  paragraph="My family and my friends are constant reminders of humility. My girlfriend and my
                             dogs keep me level headed and inspired to balance my work and my life. Creating
                             a better, more enjoyable life for others motivates my work." />
              </div>
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Transparency"
                  toolTipText="👓"
                  paragraph="When I'm not designing or writing code you can find me writing, playing video games,
                             learning about coffee, trying out new tech, treating my dogs like kids, catching Pokémon, or making music." />
              </div>
              <div className="w-33-l w-50-m w-100 pr5-ns items-start">
                <TitleParagraph
                  title="Ethics"
                  toolTipText="❤️"
                  paragraph="When I'm not designing or closing elements you can find me writing, playing video games,
                             learning about coffee, catching Pokémon, or making sick beatz." />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Approach;
