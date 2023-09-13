import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className='home_container'>
      <div className='title_card'>
      <div className='title'>FIND THE PERFECT JOB</div>
       <Link to={`/frontpage/`}>
          <button className='register_title'>Register</button>
          </Link>
          </div>
          
    </div>
  )
}

export default Home
