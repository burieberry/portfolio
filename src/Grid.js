import React, { Component } from 'react';

import Header from './Header';
import Intro from './Intro';
import Projects from './Projects';

import './grid.css';

const Grid = () => {

  return (
    <div className="container">
      <div className="intro">
        <Header headline={ 'Burcu Noyan' } />
      </div>
      <div className="blurb">
        <Intro />
      </div>
      <div className="projects">
        <Projects title={ 'Projects' } />
      </div>
      <div className="production">
        <Projects title={ 'Production' } />
      </div>
    </div>
  );
}

export default Grid;
