import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Joblogin.css'

function Joblogin() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()
    async function Joblogin(event) {
        event.preventDefault();
      
        const item = {
          email,
          username,
          password,
        };
      
        const response = await fetch('http://127.0.0.1:8001/account/login/', {
          method: 'POST',
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
      
        const result = await response.json();
      
        console.log('Response:', result); 
      
        if (result.isAuthenticated && !result.is_employer) {
          console.log('Navigating to joblist...');
          localStorage.setItem('user-info', JSON.stringify(result));
          navigate('/joblist/');
        } else {
          console.log('Authentication failed or user is an employer');
        }
      }
      


    return (
        <div className='seeker_container'>
            <div className='login_container'>
                <h1>Login</h1>
                <form onSubmit={Joblogin}>

                    <div className='form-group mb-3'>
                        <input type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='form-control'
                            name='username'
                            placeholder="UserName"
                            autoComplete="username"
                        />
                    </div>

                    <div className='form-group mb-3'>
                        <input type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='form-control'
                            name='email'
                            placeholder="Email"
                            autoComplete="email"
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <input type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-control'
                            name='password'
                            placeholder="Password"
                            autoComplete="current-password"
                        />
                    </div>
                    <button type='submit' className='btn-submit'>LogIn</button>
                    <Link to={'/jobsignup/'}>
                        <p className='signup-link'>Register for free</p>
                    </Link>
                </form>
            </div>

        </div>

    )
}


export default Joblogin

