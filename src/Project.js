import React from 'react';

import './project.css';

const Project = ({ projectTitle, projectDesc, projectImg }) => {
  return (
    <div className='project-box'>
      <img className='project-img' src={ projectImg } alt='' />
      <h3 className='subhead project-title'>{ projectTitle }</h3>
      <p className='project-desc'>{ projectDesc }</p>
      <div className='project-buttons'>
        <button>Demo</button>
        <button>Code</button>
      </div>
    </div>
  );
};

export default Project;
