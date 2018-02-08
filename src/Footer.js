import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

import '@material/button/dist/mdc.button.min.css';
import './footer.css';

const Footer = ({ title }) => {
  const icons = [
    faLinkedinIn,
    faGithub,
    faTwitter,
    faStackOverflow,
    faMediumM,
    faEnvelope
  ];

  const copyrightTxt = 'Site built by Burcu Noyan, 2018.';

  return (
    <div className='footer'>
      {/*<h2 className='subhead'>{ title }</h2>*/}
      <div className='copyright'>
        <p><small>©</small> { copyrightTxt }</p>
      </div>
      <div className='social-buttons'>
        {
          icons.map(icon => <FontAwesomeIcon key={ icon.iconName } className='footer-icon' icon={ icon } />)
        }
      </div>
    </div>
  );
}

export default Footer;
