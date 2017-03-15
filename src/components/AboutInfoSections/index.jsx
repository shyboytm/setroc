import React, { Component } from 'react';
import { Link } from 'react-router';

import List from '../List';
import ListItem from '../ListItem';

class AboutInfoSections extends Component {
  render() {

    const { } = this.props;

    return (
      <div id="AboutInfoSection" className="w-100 mt2">
        <div className="content-end flex flex-wrap pv5 w-80 center cf">
          <List listTitle="Skillset">
            <ListItem listItemTitle="I have expertise focused on Branding, Illustration, UI/UX, Front-End, and Eating." />
          </List>
          <List listTitle="Hobbies">
            <ListItem listItemTitle="When I'm not designing or closing elements you can find me writing, playing video games,
                                     learning about coffee, catching Pokémon, or making sick beatz." />
          </List>
          <List listTitle="Music">
            <ListItem listItemTitle="Branding" />
            <ListItem listItemTitle="Illustration" />
            <ListItem listItemTitle="UI/UX" />
            <ListItem listItemTitle="Front-End" />
            <ListItem listItemTitle="Food Eater" />
          </List>
        </div>
      </div>
    );
  }
}

export default AboutInfoSections;
