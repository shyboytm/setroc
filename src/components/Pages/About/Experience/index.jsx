import React, { Component } from 'react';

import ExpRotatedRight from './ExpRotatedRight';
import ExpRotatedLeft from './ExpRotatedLeft';

class Approach extends Component {
  render() {
    return (
      <div id="Experience">
        <div className="w-100 bg-black-05 pv5-l pv3 overflow-x-hidden-l overflow-x-scroll">
          <div className="w-80 center cf">
            <h2 className="f1-ns f2 fw6 mb5">Experience</h2>
          </div>
          <div className="w-100-l w-80 db center content-end flex flex-wrap overflow-y-visible mb5">
            <ExpRotatedLeft year="2013">
              <li className="fw4 pv2 black-60 lh-copy">
                <span className="b black">Fivestone Studios</span>
                <br />Designer
                <br />3D Illustrator
              </li>
              <li className="fw4 pv2 black-60 lh-copy">
                <span className="b black">Freelance</span>
                <br />Branding
                <br />Illustration
                <br />UI/UX
              </li>
            </ExpRotatedLeft>
            <ExpRotatedRight year="2014">
              <li className="fw4 pv2 black-60 lh-copy">
                <span className="b black">Vrasa</span>
                <br />Designer
              </li>
              <li className="fw4 pv2 black-60 lh-copy">
                <span className="b black">Calligritype</span>
                <br />Founder
              </li>
              <li className="fw4 pv2 black-60 lh-copy">
                <span className="b black">Illustree</span>
                <br />Founder
              </li>
            </ExpRotatedRight>
            <ExpRotatedLeft year="2015">
              <li className="fw4 pv2 black-60 lh-copy">
                <span className="b black">Vrasa</span>
                <br />Designer
              </li>
              <li className="fw4 pv2 black-60 lh-copy">
                <span className="b black">Satchel Health</span>
                <br />Product Designer
              </li>
            </ExpRotatedLeft>
            <ExpRotatedRight year="2016">
              <li className="fw4 pv2 black-60">Graduated College</li>
              <li className="fw4 pv2 black-60 lh-copy">
                <span className="b black">Satchel Health</span>
                <br />Product Designer
              </li>
              <li className="fw4 pv2 black-60 lh-copy">
                <span className="b black">Quarry</span>
                <br />Co-Founder
              </li>
            </ExpRotatedRight>
            <ExpRotatedLeft year="2017">
              <li className="fw4 pv2 black-60 lh-copy">
                <span className="b black">Satchel Health</span>
                <br />Lead Designer
                <br />Front-End Developer
              </li>
            </ExpRotatedLeft>
           </div>
          </div>
      </div>
    );
  }
}

export default Approach;
