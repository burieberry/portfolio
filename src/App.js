import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './Nav';
import Projects from './Projects';
import Grid from './Grid';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
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
