import React, { Component } from 'react';
import { Link } from 'react-router';

import List from '../List';
import ListItem from '../ListItem';

class AboutInfoSections extends Component {
  render() {

    const { } = this.props;

    return (
      <div id="AboutInfoSection" className="w-100 bb bt b--black-05 bg-black-025 mt5-ns mt2">
        <div className="content-end flex flex-wrap pv5 w-80-ns w-100 center cf">
          <List listTitle="Skillset">
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
