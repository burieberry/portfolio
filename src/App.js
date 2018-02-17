import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './nav/Nav';
import Projects from './projects/Projects';
import Grid from './home/Grid';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

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
