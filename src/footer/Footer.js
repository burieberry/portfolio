import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { ContactLinks } from '../common/socialLinks';

import '@material/button/dist/mdc.button.min.css';
import './footer.css';

const Footer = ({ title }) => {
  const copyrightTxt = 'Site built by Burcu Noyan, 2018.';

  return (
    <div className='footer'>
      <div className='copyright'>
        <p><small>©</small> { copyrightTxt }</p>
      </div>
      <div className='social-buttons'>
        {
          ContactLinks.map(btn => {
            return (
              <Link to={ btn.link } target='_blank' key={ btn.icon.iconName }>
                <FontAwesomeIcon className='footer-icon' icon={ btn.icon } />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}

export default Footer;
