import React, { Component } from 'react';

import L from '../../L';
import NewsLayout from '../../NewsLayout';

class featuredInBestAmbientMusicOnBandcamp extends Component {
  render() {
    return (
      <div className="bg-black-blue">
        <NewsLayout
          title="Featured in Best Ambient Music of 2018 on Bandcamp"
          subtitle="My first bit of press as music artist"
          date="Jun 15th, 2018"
          url="featured-in-best-ambient-music-of-2018-on-bandcamp"
          twitterLink="https://twitter.com/home?status=Featured%20in%20Best%20Ambient%20Music%20of%202018%20on%20Bandcamp%20by%20%40fromcortes%20http%3A//cortes.us/news/featured-in-best-ambient-music-of-2018-on-bandcamp"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//cortes.us/news/featured-in-best-ambient-music-of-2018-on-bandcamp"
          googleLink="https://plus.google.com/share?url=http%3A//cortes.us/news/featured-in-best-ambient-music-of-2018-on-bandcamp"
        >
          <p>
            After releasing <L href="/music">HM-02</L> at the end of April, I was pleasantly surprised
            to land a feature in Bandcamp's <L href="https://daily.bandcamp.com/2018/05/23/best-new-ambient-may-2018/"><em>The Best New Ambient Music on Bandcamp, May 2018</em></L>.
            Being a "new" artist (I've been a musician for ~12 years technically, this is my first time
            releasing produced music though), this is huge for me.
          </p>
          <p>
            Yeah yeah, I know it won't go viral or cause a spike in sales or anything. But, when you
            feel like a complete beginner at something there's nothing better than assurance that you
            are doing a good job so far. Don't get me wrong, I'd make music no matter what, but it's a
            great feeling to know others are enjoying the output.
          </p>
          <p>
            I'm almost done with HM-03, and this was a nice surprise to push me over the finish line on
            my next project. Also I wish Bandcamp would notify artists when they get featured, shout out
            to <L href="https://www.instagram.com/skiesspeak/">SkiesSpeak</L> for the heads up on the feature.
          </p>
          <p>
            <strong>From the article writeup:</strong>
          </p>
          <p>
            <em>
              "Hailing from Memphis, Tennessee, Cordio first released music under this name in February 2018 but he’s been working with various instruments for over 12 years—stretching across ambient, jazz, hip-hop, and other electronic genres. However, HM-01 is the first public trace of his musical talents. His music incorporates dreamy ambient with hip-hop, jazz, and classical for a unique sound. Following HM-01, HM-02 explores a more emotional side to Cordio’s craft. The music is all centered around a common theme, he says, but he leaves it up to listeners to interpret that theme how they wish. Wood percussion melodies wind around melancholic, analog-sounding synths on opener 'Gem Mint.' The record then takes a jazzier turn, stumbling through woozy beats and sad melodies towards the static-laced, wonky ambient closer 'Carrier Decay.'"
            </em>
          </p>
          <p>
            Feel free to read the full post and other artists featured <L href="https://daily.bandcamp.com/2018/05/23/best-new-ambient-may-2018/">here</L>.
          </p>
        </NewsLayout>
      </div>
    );
  }
}

export default featuredInBestAmbientMusicOnBandcamp;
