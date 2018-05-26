import React, { Component } from 'react';

import Feature from '../../../Feature';
import Title from '../../../Title';

class Work extends Component {
  render() {
    return (
      <div>
        <Title
          title="Work"
          toolTipText="💻">
        </Title>
        <div className="fw4 lh-copy">
          <p className="measure mb4">
            Here's a list of projects and recent work either made on my own or with teams I've worked with.
          </p>
          <Feature
            href="https://dribbble.com/fromcortes"
            name="My Portfolio" />
          <Feature
            href="/folder"
            name="Folder" />
          <Feature
            href="https://prompter.cortes.us"
            name="Prompter" />
          <Feature
            href="https://coffee.cortes.us"
            name="Taste Notes" />
          <Feature
            href="https://livtra.co"
            name="Livtra" />
          <Feature
            href="https://usequarry.com"
            name="Quarry" />
          {/* <Feature
            href="https://sogol.co"
            name="Sogol" /> */}
          {/* <Feature
            href="https://fieldy.co"
            name="Fieldy" /> */}
          <Feature
            href="https://www.instagram.com/illustree/"
            name="Illustree" />
          <Feature
            href="https://blog.cortes.us"
            name="The Rate of Change" />
          <Feature
            href="https://atom.io/users/fromcortes"
            name="Prisma" />
          <Feature
            href="https://www.instagram.com/muchclean/"
            name="Much Clean" />
          <Feature
            href="http://calligritype.us"
            name="Calligritype" />
          <p className="measure mt4 mb3">
            Made with teams
          </p>
          <Feature
            href="https://metalab.co"
            name="MetaLab" />
          <Feature
            href="https://wiseacrebrew.com"
            name="Wiseacre Brew" />
          <Feature
            href="https://tec.sco.edu"
            name="TEC SCO" />
          <Feature
            href="https://satchelhealth.com"
            name="Satchel Health" />
          <Feature
            href="http://unclekragers.com/app"
            name="Uncle Kragers" />
          <Feature
            href="http://simplesam.com"
            name="Simple Sam" />
          <Feature
            href="http://12ounceapp.com/"
            name="Twelve Ounce" />
        </div>
      </div>
    );
  }
}

export default Work;
