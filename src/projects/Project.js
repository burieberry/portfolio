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
        <Link to={ demoLink } target='_blank' className="project-btn">
          <Button raised dense id='demo-button'>
            Demo
          </Button>
        </Link>
        <Link to={ codeLink } target='_blank' className="project-btn">
          <Button raised dense id='code-button'>
            Code
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
