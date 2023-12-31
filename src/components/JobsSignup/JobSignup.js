import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './JobSignup.css'

function JobseekerSignup() {
    const [username,setUsername]=useState('');
    const [firstname,setFirstname]=useState('');
    const [lastnamename,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [password2,setPassword2]=useState('');
    const navigate = useNavigate();


    async function SignUp(event)
    
    {
        event.preventDefault();

        const item = {
      firstname,
      lastnamename,
      email,
      username,
      password,
      password2,
    };
    console.warn(item);

    const response = await fetch('http://127.0.0.1:8001/account/jobseeker_register/', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        })
        const result = await response.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate('/joblist/');

    }


    

    return (
        <div className='seeker_container'>
            <div className='signup_container'>
            <h1>SignUp For Jobseeker</h1>
            <form onSubmit={SignUp}>
            <div className='form-group mb-3'>
                <input type='text'
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                    className='form-control'
                    name='firstname'
                    placeholder="FirstName"
                    autoComplete="firstname" 
                />
            </div>
            <div className='form-group mb-3'>
                <input type='text'
                value={lastnamename}
                onChange={(e)=> setLastname(e.target.value)}
                    className='form-control'
                    name='lastname'
                    placeholder="LastName"
                    autoComplete="lastname"
                />
            </div>
            <div className='form-group mb-3'>
                <input type='text'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                    className='form-control'
                    name='username'
                    placeholder="UserName"
                    autoComplete="usename"
                />
            </div>

            <div className='form-group mb-3'>
                <input type='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                    className='form-control'
                    name='email'
                    placeholder="Email"
                    autoComplete="email"
                />
            </div>
            <div className='form-group mb-3'>
                <input type='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                    className='form-control'
                    name='password'
                    placeholder="Password"
                    autoComplete="current-password"
                />
            </div>
            <div className='form-group mb-3'>
                <input type='password'
                value={password2}
                onChange={(e)=>setPassword2(e.target.value)}
                    className='form-control'
                    name='password2'
                    placeholder="Confirm Password"
                    autoComplete="current-password"
                />
            </div>
            <button type='submit' className='btn-submit'>Signup</button>
</form>
<Link to ={'/empsignup/'}>
<p>Signup for employer</p>
</Link>
        </div>

        </div>

    )
}


export default JobseekerSignup
