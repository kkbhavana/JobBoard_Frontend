import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='home_container'>
      
      <div className='title_card'>
      <div className='title'>FIND THE PERFECT JOB</div>
      <p>Register for free</p>
       <Link to={'/jobsignup/'}>
          <button className='register_title'>SignUp</button>
          </Link>
          </div>
          
    </div>
  )
}

export default Home
