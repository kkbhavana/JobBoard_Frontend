import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function JobSignup() {
    const [username,setUsername]=useState('')
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [password2,setPassword2]=useState('')
    const navgate = useNavigate();
    async function SignUp()
    {
        let item ={firstname,lastname,email,username,password,password2}
        console.warn(item)

        let result = await fetch('http://127.0.0.1:8001/account/jobseeker_register/',{
            method:'POST',
           
            headers:{
                'Content-Type':'application/json',
                'Accept':"application/json"

            },
            body:JSON.stringify(item),
        });
        result=await result.json()
        console.warn("result",result)
        localStorage.setItem('user-inof',JSON.stringify(result));
        navgate('/joblist')
    
    }


    

    return (
        <div className='container'>
            <h1>SignUp For Employer</h1>

            <div className='form-group mb-3'>
                <input type='text'
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                    className='form-control'
                    name='firstname'
                    placeholder="FirstName"
                />
            </div>
            <div className='form-group mb-3'>
                <input type='text'
                value={lastname}
                onChange={(e)=> setLastname(e.target.value)}
                    className='form-control'
                    name='lastname'
                    placeholder="LastName"
                />
            </div>
            <div className='form-group mb-3'>
                <input type='text'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                    className='form-control'
                    name='username'
                    placeholder="UserName"
                />
            </div>

            <div className='form-group mb-3'>
                <input type='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                    className='form-control'
                    name='email'
                    placeholder="Email"
                />
            </div>
            <div className='form-group mb-3'>
                <input type='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                    className='form-control'
                    name='password'
                    placeholder="Password"
                />
            </div>
            <div className='form-group mb-3'>
                <input type='password'
                value={password2}
                onChange={(e)=>setPassword2(e.target.value)}
                    className='form-control'
                    name='password2'
                    placeholder="Confirm Password"
                />
            </div>
            <button onClick={SignUp} >Signup</button>

        </div>



    )
}


export default JobSignup
