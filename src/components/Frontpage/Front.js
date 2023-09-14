import React from 'react'
 import {Link} from 'react-router-dom'
import './Front.css'
function Home() {
  return (
    <div className='front_container'>
      <div className='title_card'>
      <h1>SignUp</h1>
       <Link to={`/empsignup/`}>
          <button >Employer</button>
          </Link>
          <Link to={`/jobsignup/`}>
          <button >JobSeeker</button>
          </Link>
          </div>
    </div>
  )
}

export default Home
