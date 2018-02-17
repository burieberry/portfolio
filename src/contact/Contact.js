import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { LinkedIn, Twitter, Email } from '../common/socialLinks';

import './contact.css';

const Contact = ({ title }) => {
  return (
    <div className='contact-box'>
      <h2 className='subhead'>{ title || 'Contact Me' }</h2>
      <div className='contact-links'>
        <Link to={ Email.link } target='_blank' className='contact-icon'>
          <FontAwesomeIcon key={ Email.iconName } icon={ Email.icon } />
          <span className='icon-text'>Email</span>
        </Link>
        <Link to={ LinkedIn.link } target='_blank' className='contact-icon'>
          <FontAwesomeIcon key={ LinkedIn.iconName } icon={ LinkedIn.icon } />
          <span className='icon-text'>Connect on LinkedIn</span>
        </Link>
        <Link to={ Twitter.link } target='_blank' className='contact-icon'>
          <FontAwesomeIcon key={ Twitter.iconName } icon={ Twitter.icon } />
          <span className='icon-text'>Follow</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
