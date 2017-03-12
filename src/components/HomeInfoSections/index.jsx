import React, { Component } from 'react';
import { Link } from 'react-router';

import InfoSection from '../InfoSection';
import InfoSectionItem from '../InfoSectionItem';

class HomeInfoSections extends Component {
  render() {

    const {
      infoSectionTitle,
      infoSectionDescription
    } = this.props;

    return (
      <div id="HomeInfoSection" className="w-100 bb bt b--black-05 bg-black-025 mt5-ns mt2">
        <div className="content-end flex flex-wrap pv5 w-80-ns w-100 center cf">
          <InfoSection
            infoSectionTitle="Work"
            infoSectionDescription="We design, architect and build creative digital solutions with the highest attention to aesthetic, functional and content detail to ensure a flawless and truly engaging user experience.">
            <InfoSectionItem
              infoSectionItemLink="https://dribbble.com/fromcortes"
              infoSectionItemTitle="Portfolio" />
            <InfoSectionItem
              infoSectionItemLink="http://calligritype.us"
              infoSectionItemTitle="Calligritype" />
            <InfoSectionItem
              infoSectionItemLink="http://coffee.cortes.us"
              infoSectionItemTitle="Taste Notes" />
            <InfoSectionItem
              infoSectionItemLink="http://sogol.co"
              infoSectionItemTitle="Sogol" />
            <InfoSectionItem
              infoSectionItemLink="http://fieldy.co"
              infoSectionItemTitle="Fieldy" />
            <InfoSectionItem
              infoSectionItemLink="https://instagram.com/illustree"
              infoSectionItemTitle="Illustree" />
            <InfoSectionItem
              infoSectionItemLink="http://shopdrones.co"
              infoSectionItemTitle="Shop Drones Co" />
            <InfoSectionItem
              infoSectionItemLink="https://instagram.com/muchclean"
              infoSectionItemTitle="Much Clean" />
            <InfoSectionItem
              infoSectionItemLink="https://soundcloud.com/cordio/tracks"
              infoSectionItemTitle="Cordio" />
            <InfoSectionItem
              infoSectionItemLink="http://pokem.cortes.us"
              infoSectionItemTitle="Pokém" />
          </InfoSection>
          <InfoSection
             infoSectionTitle="Recognition"
             infoSectionDescription="We design, architect and build creative digital solutions with the highest attention to aesthetic, functional and content detail to ensure a flawless and truly engaging user experience.">
             <InfoSectionItem
               infoSectionItemLink="https://dribbble.com/fromcortes"
               infoSectionItemTitle="ta-lk" />
             <InfoSectionItem
               infoSectionItemLink="https://www.youtube.com/watch?v=XWLhtUGbQwk&t=1s"
               infoSectionItemTitle="Logomarked" />
             <InfoSectionItem
               infoSectionItemLink="https://www.typewolf.com/site-of-the-day/taste-notes"
               infoSectionItemTitle="Typewolf SOTD" />
             <InfoSectionItem
               infoSectionItemLink="https://sitesee.co/sites/taste-notes"
               infoSectionItemTitle="Site See SOTD" />
             <InfoSectionItem
               infoSectionItemLink="http://365awesomedesigners.com/dennis-cortes/"
               infoSectionItemTitle="365 Awesome Designers" />
          </InfoSection>
          <InfoSection
             infoSectionTitle="Writing"
             infoSectionDescription="We design, architect and build creative digital solutions with the highest attention to aesthetic, functional and content detail to ensure a flawless and truly engaging user experience.">
             <InfoSectionItem
               infoSectionItemLink="#"
               infoSectionItemTitle="How to Keep Learning and Stay Fulfilled" />
             <InfoSectionItem
               infoSectionItemLink="#"
               infoSectionItemTitle="Finding Comfort in Identity Crisis" />
             <InfoSectionItem
               infoSectionItemLink="#"
               infoSectionItemTitle="Why You Should Give Away What You Know" />
          </InfoSection>
        </div>
      </div>
    );
  }
}

export default HomeInfoSections;
