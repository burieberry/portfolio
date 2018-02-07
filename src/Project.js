import React from 'react';
import { Button } from 'rmwc/Button';

import '@material/button/dist/mdc.button.min.css';
import './project.css';


const Project = ({ projectTitle, projectDesc, projectImg }) => {
  const backgroundColor = '#674497';

  return (
    <div className='project-box'>
      <img className='project-img' src={ projectImg } alt='' />
      <h3 className='subhead project-title'>{ projectTitle }</h3>
      <p className='project-desc'>{ projectDesc }</p>
      <div className='project-buttons'>
        <Button raised dense style={{ backgroundColor }}>
          <span className="project-btn">Demo</span>
        </Button>
        <Button raised dense style={{ backgroundColor }}>
          <span className="project-btn">Code</span>
        </Button>
      </div>
    </div>
  );
};

export default Project;
