import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
        <h1>Job Board</h1>
       
        <Link to='/login'>
        <button className='login-button'>Login</button>
        </Link>
        {/* <Link to='/logout'> 
        <button className='logout-button'>Logout</button>
        </Link> */}
    </header>
  )
}

export default Header
