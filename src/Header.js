import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rmwc/Button';

import Portfolio from './Projects';
import Contact from './Contact';

import '@material/button/dist/mdc.button.min.css';
import './header.css';

const Menu = () => {
  return (
    <div className='menu'>
      <Button raised id="portfolio-button">
        <Link to='/projects' className='menu-btn'>Portfolio</Link>
      </Button>
      <Button raised id="contact-button">
        <Link to='/contact' className='menu-btn'>Contact</Link>
      </Button>
    </div>
  );
}

const Blurb = () => {
  return (
    <div className="blurb-container">
      <p className="blurb-text">I'm a full stack developer with a passion for front end engineering and design, and a background in journalism. Currently, I work as a web producer at FORTUNE, where I lead digital production, and collaborate with product, engineering, and design teams. I have a Master's in Information Systems from Baruch College, and a Bachelor's in Economics (and French) from Vassar College.</p>
    </div>
  );
}

const Header = ({ headline }) => {
  return (
    <div className='header-container'>
      <div className='headline-container'>
        <h1 className='headline'>{ headline || 'Burcu Noyan' }</h1>
        <Menu />
      </div>
      <Blurb />
    </div>
  )
};

export default Header;


/*
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { LinkedIn, Email } from './socialLinks';

const buttons = [ LinkedIn, Email ];

<div className='contact-group'>
{
  buttons.map(button => {
    return (
      <Link to={ button.link } target='_blank' className='contact-btn'>
        <FontAwesomeIcon key={ button.iconName } icon={ button.icon } />
      </Link>
    );
  })
}
</div>
*/
