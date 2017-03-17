import React, { Component } from 'react';
import { Link } from 'react-router';

import InlineList from '../InlineList';
import InlineListItem from '../InlineListItem';
import TitleParagraph from '../TitleParagraph';

class HomeInfoSections extends Component {
  render() {

    const { } = this.props;

    return (
      <div id="HomeInfoSection" className="w-100 bb bt b--black-05 bg-black-025 mt5-ns mt2">
        <div className="content-end flex flex-wrap pv5 w-80-ns w-100 center cf">
          <div className="w-33-l w-50-m w-80 center ph4-ns items-start">
            <TitleParagraph
              title="Work"
              paragraph="We design, architect and build creative digital solutions with the highest attention to aesthetic, functional and content detail to ensure a flawless and truly engaging user experience." />
              <InlineList>
                <InlineListItem
                  inlineListItemLink="https://dribbble.com/fromcortes"
                  inlineListItemTitle="Portfolio" />
                <InlineListItem
                  inlineListItemLink="http://calligritype.us"
                  inlineListItemTitle="Calligritype" />
                <InlineListItem
                  inlineListItemLink="http://coffee.cortes.us"
                  inlineListItemTitle="Taste Notes" />
                <InlineListItem
                  inlineListItemLink="http://sogol.co"
                  inlineListItemTitle="Sogol" />
                <InlineListItem
                  inlineListItemLink="http://fieldy.co"
                  inlineListItemTitle="Fieldy" />
                <InlineListItem
                  inlineListItemLink="https://instagram.com/illustree"
                  inlineListItemTitle="Illustree" />
                <InlineListItem
                  inlineListItemLink="http://shopdrones.co"
                  inlineListItemTitle="Shop Drones Co" />
                <InlineListItem
                  inlineListItemLink="https://instagram.com/muchclean"
                  inlineListItemTitle="Much Clean" />
                <InlineListItem
                  inlineListItemLink="https://soundcloud.com/cordio/tracks"
                  inlineListItemTitle="Cordio" />
                <InlineListItem
                  inlineListItemLink="http://pokem.cortes.us"
                  inlineListItemTitle="Pokém" />
              </InlineList>
          </div>
          <div className="w-33-l w-50-m w-80 center ph4-ns items-start">
            <TitleParagraph
              title="Recognition"
              paragraph="We design, architect and build creative digital solutions with the highest attention to aesthetic, functional and content detail to ensure a flawless and truly engaging user experience." />
            <InlineList>
               <InlineListItem
                 inlineListItemLink="https://dribbble.com/fromcortes"
                 inlineListItemTitle="ta-lk" />
               <InlineListItem
                 inlineListItemLink="https://www.youtube.com/watch?v=XWLhtUGbQwk&t=1s"
                 inlineListItemTitle="Logomarked" />
               <InlineListItem
                 inlineListItemLink="https://www.typewolf.com/site-of-the-day/taste-notes"
                 inlineListItemTitle="Typewolf SOTD" />
               <InlineListItem
                 inlineListItemLink="https://sitesee.co/sites/taste-notes"
                 inlineListItemTitle="Site See SOTD" />
               <InlineListItem
                 inlineListItemLink="http://365awesomedesigners.com/dennis-cortes/"
                 inlineListItemTitle="365 Awesome Designers" />
            </InlineList>
          </div>
          <div className="w-33-l w-50-m w-80 center ph4-ns items-start">
          <TitleParagraph
            title="Writing"
            paragraph="We design, architect and build creative digital solutions with the highest attention to aesthetic, functional and content detail to ensure a flawless and truly engaging user experience" />
            <InlineList>
               <InlineListItem
                 inlineListItemLink="#"
                 inlineListItemTitle="How to Keep Learning and Stay Fulfilled" />
               <InlineListItem
                 inlineListItemLink="#"
                 inlineListItemTitle="Finding Comfort in Identity Crisis" />
               <InlineListItem
                 inlineListItemLink="#"
                 inlineListItemTitle="Why You Should Give Away What You Know" />
            </InlineList>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeInfoSections;
