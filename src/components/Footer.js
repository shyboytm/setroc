import React, { Component } from 'react';
import { Link } from 'react-router';

import Button from './Button';
import emojis from './Emojis';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emoji: emojis[Math.floor(Math.random()*emojis.length)]
    }
   }

   handleClick(e) {
     e.preventDefault();
     this.setState({
       emoji: emojis[Math.floor(Math.random()*emojis.length)]
     });
   }

  render() {
    return (
      <footer id="Footer" className="bg-white pt0-l pt4">
        <div className="w-90-ns w-80 center flex justify-between items-center-l flex-row-l flex-column pv2-l">
          <div className="flex-auto-l flex-column order-1-l order-2 mb3 mt0">
            <p className="f1-l f2 lh-subtitle tracked-tiny">
              <span onClick={this.handleClick.bind(this)} className="hover-bg-black-10 bg-animate br2 pa1 pointer">{this.state.emoji}</span>
              <a className="db link underline bg-text-clip shine fw6 f3 mt4" href="mailto:hi@cortes.us">hi@cortes.us</a>
            </p>
            <div className="mb4">
              <a href="https://amzn.to/2sJNZEc" className="black fw6 i link underline-hover">Support the hustle on Amazon &rarr;</a>
            </div>
          </div>
          <div className="order-2-l order-1 w-50-l tr-l">
            <Button
              href="https://twitter.com/fromcortes"
              name="Twitter" />
            <Button
              href="https://instagram.com/fromcortes"
              name="Instagram" />
            <Button
              href="https://dribbble.com/fromcortes"
              name="Dribbble" />
            <Button
              href="https://github.com/fromcortes"
              name="Github" />
            <Button
              href="https://open.spotify.com/user/hswlc8mdk5gxobfmshmki9gau?si=15BRL5VGRGydOG5YZUDxyg"
              name="Spotify" />
            <Button
              href="https://soundcloud.com/cordio/tracks"
              name="Soundcloud" />
            <Button
              href="https://youtube.com/cortesarts"
              name="Youtube" />
            <Button
              href="https://fromcortes.tumblr.com"
              name="Tumblr" />
            <Button
              href="https://unsplash.com/@cortes"
              name="Unsplash" />
            <Button
              href="https://ello.co/crts"
              name="Ello" />
            <Button
              href="https://www.last.fm/user/fromcortes"
              name="Last.fm" />
            <Button
              href="https://rawg.io/@cortes/overview"
              name="RAWG" />
          </div>
        </div>
        <p className="bg-black-05 black-30 f7 pv2 mb0 tc w-100">© 2019 Dennis Cortés All Rights Reserved</p>
      </footer>
    );
  }
}

export default Footer;
