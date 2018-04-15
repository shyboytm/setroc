import React, { Component } from 'react';

class Item extends Component {
  render() {

    const {
      description,
      href,
      image,
      price,
      title
    } = this.props;

    return (
      <div className="items-start relative ph2 pv2 w-25-l w-50-m w-100">
        <div className="br2 db-ns flex overflow-hidden" style={{backgroundColor: "#F6F6F6"}}>
          <a href={href} target="_blank" rel="nofollow" className="db-ns flex justify-around items-center link pointer black hover-black-30 no-outline">
            <img src={image} alt={title} className="grow no-drag w-100-ns w-30 ml0-ns ml2" />
            <div className="db-ns flex flex-column justify-between pa3">
              <h1 className="fw5 f5 mt0 mb1-ns mb0 lh-title">{title}</h1>
              <p className="f6 black-60 mt0 mb3-ns mb1" style={{lineHeight: "1.35rem"}}>
                {description}
              </p>
               <div className="flex items-center justify-between mt2">
                 <span className="fw4 f4-ns black-30 dn">${price}</span>
                  <a className="b--black-10 black br2 ba bg-white db dim fw7 f7 link shadow-small ttu pointer ph2 pv1 tc tracked w-100" target="_blank" rel="nofollow" href={href}>
                    View
                  </a>
               </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Item;
