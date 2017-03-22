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
        <div className="content-end flex flex-wrap pv5-l pv3 w-90-ns w-100 center cf">
          <div className="w-33-l w-50-m w-80 center ph4-ns items-start">
            <TitleParagraph
              title="Work 💻"
              paragraph="In addition to branding, illustration, and UI/UX work for others in my portfolio, a lot of my work is living and breathing projects I've built that people rely on and use on a regular basis." />
              <InlineList>
                <InlineListItem
                  inlineListItemLink="https://dribbble.com/fromcortes"
                  inlineListItemTitle="My Portfolio" />
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
                  inlineListItemLink="https://atom.io/users/fromcortes"
                  inlineListItemTitle="Prisma" />
                <InlineListItem
                  inlineListItemLink="http://shopdrones.co"
                  inlineListItemTitle="Shop Drones Co" />
                <InlineListItem
                  inlineListItemLink="https://instagram.com/muchclean"
                  inlineListItemTitle="Much Clean" />
                <InlineListItem
                  inlineListItemLink="http://www.usequarry.com"
                  inlineListItemTitle="Quarry" />
              </InlineList>
              <InlineList>
                <InlineListItem
                  inlineListItemLink="http://satchelhealth.com"
                  inlineListItemTitle="Satchel Health" />
                <InlineListItem
                  inlineListItemLink="http://unclekragers.com/app"
                  inlineListItemTitle="Uncle Kragers" />
                <InlineListItem
                  inlineListItemLink="http://simplesam.com"
                  inlineListItemTitle="Simple Sam" />
                <InlineListItem
                  inlineListItemLink="http://12ounceapp.com"
                  inlineListItemTitle="Twelve Ounce" />
              </InlineList>
          </div>
          <div className="w-33-l w-50-m w-80 center ph4-ns items-start">
            <TitleParagraph
              title="Recognition 🏆"
              paragraph="From awards to interviews, here are some folks who think my work and I are pretty cool. I'm always open to interviews if that's your thing." />
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
              title="Writing 📝"
              paragraph="I write an article every week for my blog, The Rate of Change. Here are some of the most recent articles, you can sign up for my newsletter if you'd like." />
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
          <div className="w-33-l w-50-m w-80 center ph4-ns items-start">
            <TitleParagraph
              title="Case Studies 💼"
              paragraph="Almost all my recent work can't be shown publicly, but here are some older case studies that I am allowed to show at the moment." />
            <InlineList>
               <InlineListItem
                 inlineListItemLink="https://www.behance.net/gallery/38016709/Heft-Wing-Beer-Co-Case-Study"
                 inlineListItemTitle="Heft Wing Co. - 2016" />
               <InlineListItem
                 inlineListItemLink="https://www.behance.net/gallery/32067775/Lumi-Holiday-Gifting"
                 inlineListItemTitle="Lumi Holiday - 2015" />
               <InlineListItem
                 inlineListItemLink="https://www.behance.net/gallery/38016747/Twelve-Ounce-Case-Study"
                 inlineListItemTitle="Twelve Ounce Coffee - 2014" />
            </InlineList>
          </div>
          <div className="w-33-l w-50-m w-80 center ph4-ns items-start">
            <TitleParagraph
              title="Skillset 💪"
              paragraph="I've tried just about every facet of design, but am now focused on Branding, Illustration, UI/UX, Front-End, and Eating." />
          </div>
          <div className="w-33-l w-50-m w-80 center ph4-ns items-start">
            <TitleParagraph
              title="Free Time ⏰"
              paragraph="Not my main work portfolio, but here are some things I do and/or make in my free time." />
            <InlineList>
              <InlineListItem
                inlineListItemLink="https://twitch.tv/cortesarts"
                inlineListItemTitle="Livestream" />
              <InlineListItem
                inlineListItemLink="https://soundcloud.com/cordio/tracks"
                inlineListItemTitle="Cordio" />
              <InlineListItem
                inlineListItemLink="http://pokem.cortes.us"
                inlineListItemTitle="Pokém" />
            </InlineList>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeInfoSections;