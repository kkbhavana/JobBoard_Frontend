import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  // const isAuthenticated = true; // Replace this with your authentication logic
  // const navigate = useNavigate();

  // async function Signout() {
  //   const response = await fetch('http://127.0.0.1:8001/account/logout/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   });

  //   if (response.status === 200) {
  //     localStorage.removeItem('user-info'); 
  //     navigate('/'); 
  //   } else {
  //     // Handle error or display a message if logout fails
  //   }
  

  return (
    <header className='header'>
      <h1>Job Board</h1>
      {/* {isAuthenticated ? (
        <button className='logout-button' onClick={Signout}>
          Logout
        </button>
      ) : ( */}
        <p>
          For employers
          <Link to='/empsignup/'>
            <button className='login-button'>Login</button>
          </Link>
        </p>
      {/* )} */}
    </header>
  );
}

export default Header;

