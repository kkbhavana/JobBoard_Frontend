import React from 'react'
import { Link } from 'react-router-dom'
// import tickmark from '../components/Images/tickmark.jpg';
function Confirmation() {
  return (
    <div className='apply_container'>
         {/* <img src={tickmark}  alt='photo'/> */}
        <p>Your Application is Successfully submited....!</p>
        <Link to={'/joblist/'}>
        <button className='btn-submit'>Done</button>
        </Link>
     
    </div>
  )
}

export default Confirmation
