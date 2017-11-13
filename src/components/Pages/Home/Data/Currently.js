import React, { Component } from 'react';

import Feature from '../../../Feature';
import Title from '../../../Title';

class Work extends Component {
  render() {
    return (
      <div>
        <Title
          title="I'm Currently..."
          toolTipText="💪">
        </Title>
        <div className="fw4 lh-copy">
          <h4 className="fw4 pv1">Making stuff for the web at
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://madebyspeak.com">
              Speak
            </a>
          </h4>
          {/*<h4 className="fw4 pv1">Helping brands grow and communicate at
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://offgray.co">
              Off Gray
            </a>
          </h4>*/}
          <h4 className="fw4 pv1">Building products for others at
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://usequarry.com">
              Quarry
            </a>
          </h4>
          <h4 className="fw4 pv1">Writing weekly about work and life at
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://blog.cortes.us">
              The Rate of Change
            </a>
          </h4>
          <h4 className="fw4 pv1">Building a life-tracking tool called
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://livtra.co">
              Livtra
            </a>
          </h4>
          <h4 className="fw4 pv1">Curating inspiration for others at
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://instagram.com/calligritype">
              Calligritype
            </a> and
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://instagram.com/illustree">
              Illustree
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Work;
