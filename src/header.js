import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
  return(
    <header>
      
      <Link to="/">
        <div className="logo-container">
          <img src={'/images/nba-logo.png'} alt="nba logo"/>
        </div>
      </Link>

      <Link to='./Player'>
        <div className="logo-container">
          <img src={'/images/nba-logo.png'} alt="nba logo"/>
        </div>
      </Link>


    </header>
  )
}

export default Header;