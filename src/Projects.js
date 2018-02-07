import React from 'react';

import './projects.css';

import Project from './Project';
import allprojects from './allProjects';

const Projects = ({ title }) => {
  return (
    <div>
      <h2 className='subhead'>{ title }</h2>
      <ul className='project_container'>
        {
          allprojects.map(proj => {
            return (
              <li className='project' key={ proj.id }>
                <Project
                  projectTitle={ proj.projectTitle }
                  projectDesc={ proj.projectDesc }
                  projectImg={ proj.projectImg } />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Projects;
