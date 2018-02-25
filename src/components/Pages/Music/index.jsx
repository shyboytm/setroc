import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../Footer';
import Item from '../../Item';
import Section from '../../Section';
import Title from '../../Title';

class Mentoring extends Component {
  render() {

    const pageName = "Music";
    const pageDescription = "I'm also a beat-maker and producer working under the alias Cordio; mixing elements of ambient, electronic, jazz, lo-fi, and hip-hop music genres";

    return (
      <div id={pageName} className="black pt4-l">

        <Helmet>
          <title>Dennis Cortés - {pageName} 🥁</title>
          <meta name="description" content={pageDescription} />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@fromcortes"/>
          <meta name="twitter:creator" content="@fromcortes"/>
          <meta name="twitter:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.cortes.us/${pageName}`} />
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
        </Helmet>

        <div>
          <div className="bg-silver overflow-hidden pt5 pb6 ph4 relative tc-l">
            <div className="center w-80-l w-90">
              <h1 className="f1 ttu fw8 flex items-center justify-center-ns">
                <svg id="CordioLogo" className="mr3 spin-full shadow-large" data-name="Cordio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401.04 401.04" height="35" width="35"><title>Cordio Logo</title><path d="M258.21,258.21c-78.31,78.31-78.31,205.27,0,283.58s205.27,78.31,283.58,0,78.31-205.27,0-283.58S336.52,179.9,258.21,258.21ZM506.34,506.34,293.66,293.66A150.39,150.39,0,0,1,506.34,506.34Z" transform="translate(-199.48 -199.48)"/></svg>
                Cordio
              </h1>
              <p className="center fw5 f4 lh-subtitle measure black-60 mv0" style={{letterSpacing: 0.8 + "px"}}>
                {pageDescription}
              </p>
            </div>
            <div className="absolute bottom--1 right-0">
              <svg version="1.1" id="CordioVinylBackground" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              	 viewBox="0 0 477.1 483.6" width="200" height="200" fill="rgba(0,0,0,0.1)">
              <path d="M263.6,483.6h-5c0-58.4,22.7-113.2,64-154.5c41.3-41.3,96.1-64,154.5-64v5c-57,0-110.6,22.2-151,62.5
              	C285.8,373,263.6,426.6,263.6,483.6z"/>
              <path d="M135.6,483.6h-5c0-92.6,36-179.6,101.5-245c65.4-65.4,152.5-101.5,245-101.5v5c-91.2,0-177,35.5-241.5,100
              	C171.1,306.6,135.6,392.4,135.6,483.6z"/>
              <path d="M199.6,483.6h-5c0-75.5,29.4-146.4,82.7-199.8s124.3-82.7,199.8-82.7v5c-74.1,0-143.8,28.9-196.2,81.3
              	C228.5,339.8,199.6,409.5,199.6,483.6z"/>
              <path d="M7.6,483.6h-5c0-64.1,12.5-126.2,37.3-184.7C63.8,242.4,98,191.7,141.6,148.1s94.3-77.8,150.8-101.7
              	C350.9,21.7,413,9.1,477.1,9.1v5c-63.4,0-124.9,12.4-182.8,36.9c-55.9,23.6-106.1,57.5-149.2,100.6s-77,93.3-100.6,149.2
              	C20,358.7,7.6,420.2,7.6,483.6z"/>
              <path d="M71.6,483.6h-5c0-55.4,10.9-109.2,32.3-159.8c20.7-48.9,50.3-92.8,88-130.5c37.7-37.7,81.6-67.3,130.5-88
              	C367.9,84,421.7,73.1,477.1,73.1v5c-54.7,0-107.8,10.7-157.8,31.9c-48.3,20.4-91.7,49.7-128.9,86.9c-37.2,37.2-66.5,80.6-86.9,128.9
              	C82.3,375.8,71.6,428.9,71.6,483.6z"/>
              <g>
              	<path d="M328.6,414.6c1.1,0.7,1.8,1.7,1.9,2.6c0.6-0.5,1.7-0.4,2.7,0.1l2.1,1.2c2,1.2,2.9,3.3,1.9,5.6l-3.4,8.3l-15.1-9.1l3.2-7.8
              		c0.9-2.1,3.3-3,5.2-1.8L328.6,414.6z M324.3,416.7l-2.1,5.2l3.9,2.4l2-4.9c0.4-1,0.2-1.4-0.7-2l-1.7-1
              		C325.2,416.1,324.5,416.3,324.3,416.7z M330.5,420.7l-2.1,5.1l4.1,2.5l2.1-5.2c0.2-0.5,0-1.2-0.6-1.6l-1.8-1.1
              		C331.3,419.8,330.9,419.8,330.5,420.7z"/>
              	<path d="M335.9,398.3c1,0.7,1.4,1.4,1.7,2.7l1.3,5.7l4.9,3.8l-1.4,2.7l-4.9-3.8l-4.9,1.1c-1.1,0.2-1.8,0-2.8-0.7l-3.7-2.9l1.4-2.6
              		l3.6,2.8c0.5,0.4,0.6,0.4,1.1,0.3l4-0.8l-1.1-4.7c-0.1-0.6-0.2-0.6-0.7-1l-3.7-2.8l1.4-2.7L335.9,398.3z"/>
              	<path d="M353.2,375.7l-1.9,2.4l-0.9-1c-0.4-0.4-1.1-0.4-1.4,0l-3,3.9c-0.3,0.4-0.3,1.2,0.1,1.7l6.6,7c0.4,0.4,1.1,0.4,1.4,0l3-3.9
              		c0.3-0.4,0.3-1.2-0.1-1.7l-0.9-1l1.9-2.4l0.9,1c1.6,1.7,1.9,4,0.4,5.9l-2.9,3.8c-1.5,1.9-4,2.3-5.6,0.6l-6.5-7
              		c-1.6-1.8-1.8-4.1-0.3-5.9l3.1-4c1.3-1.7,4-1.8,5.5-0.2L353.2,375.7z"/>
              	<path d="M370.5,369.6c1.5,2,1.3,4.2-0.4,6l-3.7,3.8c-1.7,1.8-4.2,1.9-5.6,0l-5.7-7.7c-1.4-1.9-1.3-4.3,0.5-6.1l3.7-3.8
              		c1.6-1.6,4.1-1.5,5.4,0.2L370.5,369.6z M361.2,363.8l-3.9,4c-0.4,0.4-0.4,1.2-0.1,1.7l5.8,7.8c0.3,0.5,1,0.5,1.4,0.2l3.9-4
              		c0.4-0.4,0.4-1.2,0.1-1.7l-5.8-7.8C362.3,363.5,361.6,363.4,361.2,363.8z"/>
              	<path d="M379.7,352.1c0.6,1.1,0.7,2.3,0.4,3.2c1,0,1.7,0.4,2.3,1.4l3.2,5.4l-2.4,1.9l-3.1-5.2c-0.5-0.9-0.9-0.9-1.6-0.3l-4.4,3.6
              		l3.7,6.3l-2.3,1.9l-8.9-15.2l6.8-5.6c1.8-1.4,4.3-0.9,5.4,0.8L379.7,352.1z M374.8,351.8l-4.6,3.8l2.4,4l4.3-3.6
              		c0.9-0.7,0.9-1.1,0.3-2l-1.1-1.8C375.9,351.7,375.2,351.5,374.8,351.8z"/>
              	<path d="M397.8,349.2c1,2.2,0.4,4.4-1.7,5.8l-7.7,5l-7.2-16.1l7.5-4.9c1.9-1.2,4.3-0.6,5.3,1.4L397.8,349.2z M389.9,341.5l-5.1,3.3
              		l4.9,10.9l5.1-3.3c0.5-0.3,0.7-1,0.4-1.6l-4-8.9C391,341.4,390.4,341.2,389.9,341.5z"/>
              	<path d="M404.9,333.1l-2.2,1.2l4,11.5l2.2-1.2l0.9,2.6l-7.2,3.8l-0.9-2.6l2.3-1.2l-4-11.5l-2.3,1.2l-0.8-2.6l7.2-3.8L404.9,333.1z"
              		/>
              	<path d="M424.4,336.7c0.6,2.4-0.4,4.4-2.8,5.4l-4.9,2c-2.3,0.9-4.6,0-5.1-2.3l-2.2-9.3c-0.5-2.3,0.5-4.4,2.9-5.4l4.9-2
              		c2.1-0.9,4.4,0.3,4.9,2.4L424.4,336.7z M418.1,327.7l-5.2,2.1c-0.5,0.2-0.9,0.9-0.7,1.5l2.3,9.4c0.1,0.6,0.7,0.9,1.2,0.7l5.2-2.1
              		c0.5-0.2,0.9-0.9,0.7-1.5l-2.2-9.5C419.2,327.8,418.6,327.5,418.1,327.7z"/>
              </g>
              <path d="M38.1,483.6h-2c0-59.5,11.7-117.3,34.7-171.7c22.2-52.5,54-99.7,94.5-140.2c40.5-40.5,87.7-72.3,140.2-94.5
              	c54.4-23,112.1-34.7,171.7-34.7v2c-59.3,0-116.8,11.6-170.9,34.5c-52.3,22.1-99.2,53.8-139.5,94.1c-40.3,40.3-72,87.3-94.1,139.5
              	C49.7,366.8,38.1,424.3,38.1,483.6z"/>
              <path d="M102.1,483.6h-2c0-50.9,10-100.3,29.6-146.7c19-44.9,46.2-85.2,80.8-119.8c34.6-34.6,74.9-61.8,119.8-80.8
              	c46.5-19.7,95.9-29.6,146.7-29.6v2c-50.6,0-99.7,9.9-146,29.5c-44.7,18.9-84.8,45.9-119.2,80.4c-34.4,34.4-61.5,74.5-80.4,119.2
              	C112,383.9,102.1,433,102.1,483.6z"/>
              <path d="M166.1,483.6h-2c0-83.6,32.6-162.2,91.7-221.3s137.7-91.7,221.3-91.7v2c-83.1,0-161.2,32.3-219.9,91.1
              	S166.1,400.5,166.1,483.6z"/>
              <path d="M230.1,483.6h-2c0-66.5,25.9-129,72.9-176.1c47-47,109.6-72.9,176.1-72.9v2c-66,0-128,25.7-174.7,72.3
              	S230.1,417.6,230.1,483.6z"/>
              </svg>
            </div>
          </div>
          <div className="center w-80-ns w-90">
            <Section
              title="Releases"
              description="Most recent releases including singles and full records"
              number="5"
            />
            <div className="content-end flex flex-wrap">
              <Item
                href="https://www.apple.com/shop/buy-mac/macbook-pro"
                image=""
                title='MacBook Pro 13"'
                description="8GB RAM, 128GB SSD, 2.3 GHz i5"
                price="1,299"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Mentoring;
