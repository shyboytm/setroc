import React, { Component } from 'react';

import Subheader from '../../Subheader';
import Spacer from '../../Spacer';
import Title from '../../Title';

import Currently from './Data/Currently';
import Work from './Data/Work';

class Mobile extends Component {
  render() {
    return (

      <div className="dn-l db w-90 center mv5 ph0-ns ph3">

          <Subheader />
          <Currently />
          <Spacer />
          <Work />
          <Spacer />
          <Title
            title="Newsletter"
            toolTipText="📬">
          </Title>
          <p className="lh-copy measure mb4">
            Join my monthly newsletter for valuable information including useful recommendations,
            and updates on new work, articles, and projects.
          </p>
          <form action="https://cortes.us9.list-manage.com/subscribe/post" method="POST">
            {/*Hidden fields for Mailchimp account and list*/}
            <input type="hidden" name="u" value="574c615abddacf2d7b51d2104" />
            <input type="hidden" name="id" value="7bd40f02a4" />
            <label className="clip" for="email-address">Email Address</label>
            <input className="f6 shine bg-text-clip input-reset ba b--black-10 black bg-transparent pa3 w-100 br2 mb3"
              placeholder="Email Address"
              type="email" name="MERGE0" tabindex="-1" id="b_email" />
            <input className="bn fw6 f6 ttu button-reset dim pv3 tc white bg-gradient pointer w-100 br2" type="submit" value="Subscribe" />
          </form>

        </div>
    );
  }
}

export default Mobile;
