import React from 'react';

import './footer.css';

const Footer = ({ title }) => {
  return (
    <div className='footer'>
      <h2 className='subhead'>{ title }</h2>
      <p className='copyright'><small>©</small> Site built and designed by Burcu Noyan, 2018.</p>
    </div>
  );
}

export default Footer;
