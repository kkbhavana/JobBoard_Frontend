import React from 'react'
import { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navgate = useNavigate();
    useEffect(()=>{
        if (localStorage.getItem("user-info"))
        
        {
            navgate("/emplist")
        }
    })

    async function login(){

        console.warn(username,email,password)
        let item ={username,email,password};
        let result= await fetch('http://127.0.0.1:8001/account/login/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':"application/json"
            },
            body:JSON.stringify(item)
        });
        result=await result.json();
        localStorage.setItem(JSON.stringify(result))
        navgate('/emplist')
        
    }

    return (
        <div>
            <h1>Login</h1>
            <div className='form-group mb-3'>
                <input type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='form-control'
                    name='username'
                    placeholder="UserName"
                />
            </div>

            <div className='form-group mb-3'>
                <input type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='form-control'
                    name='email'
                    placeholder="Email"
                />
            </div>
            <div className='form-group mb-3'>
                <input type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='form-control'
                    name='password'
                    placeholder="Password"
                />
            </div>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login
