import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rmwc/Button';

import '@material/button/dist/mdc.button.min.css';
import './project.css';


const Project = ({ projectTitle, projectDesc, projectImg, demoLink, codeLink }) => {
  return (
    <div className='project-box'>
      <img className='project-img' src={ projectImg } alt='' />
      <h3 className='subhead project-title'>{ projectTitle }</h3>
      <p className='project-desc'>{ projectDesc }</p>
      <div className='project-buttons'>
        <Button raised dense id='demo-button'>
          <Link to={ demoLink } target='_blank' className="project-btn">Demo</Link>
        </Button>
        <Button raised dense id='code-button'>
          <Link to={ codeLink } target='_blank' className="project-btn">Code</Link>
        </Button>
      </div>
    </div>
  );
};

export default Project;