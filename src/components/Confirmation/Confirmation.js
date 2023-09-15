import React from 'react'
import { Link } from 'react-router-dom'
import tickmark from '../Assets/tickmark.jpg';
import './Confirmation.css'

function Confirmation() {
  return (
    <div className='confirmation_container'>
         <img src={tickmark}  alt='tickmark'/>
        <p>Your Application is Successfully submited....!</p>
        <Link to={'/joblist/'}>
        <button className='btn-submit'>Done</button>
        </Link>
     
    </div>
  )
}

export default Confirmation
