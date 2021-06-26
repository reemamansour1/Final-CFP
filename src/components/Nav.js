import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (

   <nav>
       
          <ul className="nav-links">
            <Link to ='/'>
              <li className='home'>Home</li>
            </Link>
            <Link to ='/workout'>
              <li className='homes'>Workout</li>
            </Link>
            <Link to ='/food'>
              <li>Healthy Food</li>
            </Link>
            <Link to ='/mentalhealth'>
              <li>Mental Health</li>
            </Link>
          </ul>

   </nav>

  );
}

export default Nav;
