import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './Nav';
import Grid from './Grid';
import Footer from './Footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Nav />
          <Grid />
          <Footer title={ 'Contact' }/>
        </div>
      </Router>
    );
  }
}

export default App;
