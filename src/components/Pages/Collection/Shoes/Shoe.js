import React from 'react';

class Shoe extends React.Component {
  render() {

    const { details } = this.props;

    return (
      <li className="pa2 w-33-l w-50-m w-100">
        <a className="link overflow-hidden pointer shadow-small up"
          href={details.href}
          target="_blank" rel="nofollow"
          title={`Check out ${details.name}`}>
          <div style={{backgroundColor: `${details.color}`}}>
            <img src={`http://cortes.us/images/collection/shoes/${details.image}.jpg`}
                 alt={`${details.name} ${details.model}`}
                 className="multiply hover-unmultiply bg-animate nb2"/>
            <div className="pa3 tc">
              <h2 className="black-60 f3 fw8 mv0">{details.name}</h2>
              <h3 className="black-40 mt0 mb3">{details.model}</h3>
              <div className="flex items-center justify-between w-100">
                <span className="black-40 f6 fw6 ttu">Got {details.date}</span>
                <span className="black-40 fw6 mv0">${details.price}</span>
              </div>
            </div>
          </div>
        </a>
      </li>
    )
  }
}

export default Shoe;
