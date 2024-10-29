import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css'

function NavMenu() {
  return (
    <nav>
      <Link className='nav-link' to="/">Home</Link>
      <Link className='nav-link' to="/weather">Weather</Link>
    </nav>
  );
}

export default NavMenu;