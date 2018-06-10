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
          <img src={`http://cortes.us/images/collection/shoes/${details.image}.jpg`} alt={`${details.name} ${details.model}`} className="nb2"/>
          <div className="pa3" style={{backgroundColor: `${details.color}`}}>
            <h2 className="black-40 f4">{details.name}</h2>
            <h3>{details.model}</h3>
          </div>
          <div className="flex items-center justify-between w-100">
            <span className="black-40 f7 fw6 ttu">{details.date}</span>
            <span className="black-40 fw6 mv0">${details.price}</span>
          </div>
        </a>
      </li>
    )
  }
}

export default Shoe;
