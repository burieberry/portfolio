import React, { Component } from 'react';

import Intro from './Intro';
import IntroBlurb from './IntroBlurb';

import './grid.css';

const Grid = () => {

  return (
    <div className="container">
      <div className="one">
        <Intro />
      </div>
      <div className="two">
        <IntroBlurb />
      </div>
      <div className="three">Three</div>
      <div className="four">Four</div>
      <div className="five">Five</div>
      <div className="six">Six</div>
    </div>
  );
}

export default Grid;
