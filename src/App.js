import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './Nav';
import Projects from './Projects';
import Grid from './Grid';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Route component={ Nav } />
        <Route path='/' exact component={ Grid } />
        <Route path='/projects' component={ Projects } />
        <Route path='/contact' component={ Contact } />
        <Route component={ Footer } />
      </div>
    );
  }
}

export default App;
