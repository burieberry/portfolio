import React, { Component } from 'react';

import Nav from './Nav';
import Grid from './Grid';
import Footer from './Footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />
        <Grid />
        <Footer title={ 'Contact' }/>
      </div>
    );
  }
}

export default App;
