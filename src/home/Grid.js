import React from 'react';

import Header from '../header/Header';
// import Projects from '../projects/Projects';

import './grid.css';

const Grid = () => {

  return (
    <div className="container">
      <div className="intro">
        <Header title={ 'Burcu Noyan' } />
      </div>
     {/* <div className="projects">
        <Projects title={ 'Projects' } />
      </div>*/}
      {/*<div className="production">
        <Projects title={ 'Production' } />
      </div>*/}
    </div>
  );
}

export default Grid;
