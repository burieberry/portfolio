import React from 'react';

import './header.css';

const Header = ({ headline }) => {
  return (
    <div>
      <div className='hedBox'>
        <h1 className='headline'>{ headline || 'Burcu Noyan' }</h1>
      </div>
      <div className="blurbBox">
        <p className="blurbText">I'm a full stack developer with a passion for front end engineering and design, and a background in journalism. Currently, I work as a web producer at FORTUNE, where I lead digital production, and collaborate with product, engineering, and design teams. I have a Master's in Information Systems from Baruch College, and a Bachelor's in Economics (and French) from Vassar College.</p>
      </div>
    </div>
  )
}

export default Header;
