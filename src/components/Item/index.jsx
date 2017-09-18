import React, { Component } from 'react';

class Item extends Component {
  render() {

    const {
      description,
      href,
      image,
      stars,
      title
    } = this.props;

    return (
      <div className="items-start relative ph3 pv3 w-25-l w-50-m w-100">
        <div className="db-ns flex bg-white ba b--black-10 shadow-small br2">
          <a href={href} target="_blank" rel="nofollow" className="db-ns flex justify-around items-center link pointer black hover-black-30 no-outline">
            <img src={image} className="no-drag w-100-ns w-30 ml0-ns ml2 bb-ns bn b--black-10 br2 br--top-ns" />
            <div className="db-ns flex flex-column justify-between pa3">
              <h1 className="leitura fw4 f4-ns f5 mt0 mb1-ns mb0 lh-subtitle">{title}</h1>
              <p className="f6 black-60 mt0 mb3-ns mb1" style={{lineHeight: "1.35rem"}}>
                {description}
              </p>
              {/* <div className="flex items-center justify-between"> */}
                {/* <span className="fw6 black-30">$99</span> */}
                <a className="link ba b--black-10 black br2 fw6 f6 db rainbow-hover pointer ph2 pv1 tc pointer br2 mt2" target="_blank" rel="nofollow" href={href}>
                  See Details
                </a>
              {/* </div> */}
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Item;
