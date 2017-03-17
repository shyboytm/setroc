import React, { Component } from 'react';
import { Link } from 'react-router';

import TitleParagraph from '../TitleParagraph';

class AboutInfoSections extends Component {
  render() {

    const { } = this.props;

    return (
      <div id="AboutInfoSection" className="w-100 mt2">
        <div className="content-end flex flex-wrap pv5 w-80 center cf">
          <div className="w-33-l w-50-m w-80 pr5-ns items-start">
            <TitleParagraph
              title="Skillset"
              paragraph="I have expertise focused on Branding, Illustration, UI/UX, Front-End, and Eating." />
          </div>
          <div className="w-33-l w-50-m w-80 pr5-ns items-start">
            <TitleParagraph
              title="Hobbies"
              paragraph="When I'm not designing or closing elements you can find me writing, playing video games,
                         learning about coffee, catching Pokémon, or making sick beatz." />
          </div>
          <div className="w-33-l w-50-m w-80 pr5-ns items-start">
            <TitleParagraph
              title="Hobbies"
              paragraph="When I'm not designing or closing elements you can find me writing, playing video games,
                         learning about coffee, catching Pokémon, or making sick beatz." />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutInfoSections;
