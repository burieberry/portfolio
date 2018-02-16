import React from 'react';

import './header.css';

const Header = ({ headline }) => {
  return (
    <div className='header'>
      <h1 className='headline typewriter'>{ headline || 'Burcu Noyan' }</h1>
    </div>
  )
}

export default Header;
