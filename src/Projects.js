import React from 'react';

import './projects.css';

import Project from './Project';
import projectImg from './images/ratingfinder.png';

const Projects = ({ title }) => {
  // TODO: import these from JSON obj, incl the image
  const projectTitle = 'RatingFinder';
  const projectDesc = 'Find and compare ratings and reviews from Yelp, Google Maps, Foursquare — all in one place.';

  return (
    <div>
      <h2 className='subhead'>{ title }</h2>
      <ul className='project_container'>
        <li className='project'><Project projectTitle={ projectTitle } projectDesc={ projectDesc } projectImg={ projectImg } /></li>
        <li className='project'><Project /></li>
      </ul>
    </div>
  );
}

export default Projects;
