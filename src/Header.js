import React from 'react';

import './header.css';

// import headshot from './bn.jpg';

const Header = ({ headline }) => {
  return (
    <div>
      <h1 className='headline'>{ headline } {/*<img className='headshot' src={ headshot } />*/}</h1>
    </div>
  )
}

export default Header;
