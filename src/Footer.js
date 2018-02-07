import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/fontawesome-free-brands';
import { faCopyright, faEnvelope } from '@fortawesome/fontawesome-free-solid';

import './footer.css';

const Footer = ({ title }) => {
  const icons = [
    faLinkedinIn,
    faGithub,
    faTwitter,
    faStackOverflow,
    faMediumM,
    faEnvelope
  ]

  return (
    <div className='footer'>
      {/*<h2 className='subhead'>{ title }</h2>*/}
      <div className='copyright'>
        <p><small>©</small> Site built by Burcu Noyan, 2018.</p>
      </div>
      <div className='social-buttons'>
        {
          icons.map(icon => {
            return (
              <FontAwesomeIcon className='icon' icon={ icon } />
            );
          })
        }
      </div>
    </div>
  );
}

export default Footer;
