import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';

const Nav = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' className='nav-item'>Home</NavLink>
      <NavLink to='/projects' activeClassName='selected' className='nav-item'>Portfolio</NavLink>
      <NavLink to='/contact' activeClassName='selected' className='nav-item'>Contact</NavLink>
    </div>
  );
}

export default Nav;
