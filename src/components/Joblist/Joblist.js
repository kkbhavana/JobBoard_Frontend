import React from 'react'
import { getALLjoblists } from '../ApiService/api';
import { useEffect,useState } from 'react';
import './Joblist.css'
 import {Link} from 'react-router-dom'
function Joblist() {
  const[jobslist,setJobList] =useState([])
    useEffect(()=>{
        const fetchALLJobslist = async() =>{
            const data =await getALLjoblists();
            console.log(data,"data");
            setJobList(data);
        };
        fetchALLJobslist();
    },[])
  return (
      <div className='container'>
  
    <div className='details'>
        {jobslist.map((job)=>(
            <div className='jobdetails' key={job.id}>
            <h1>{job.title}</h1>
            <h4>Company Name:{job.company}, {job.places}</h4>
           
            <p>Descriotions : {job.description}</p>
           <p>Skills : {job.skills}</p>
           
            <p>Salary : {job.salary}</p>
 
         
          <Link to={`/applicaton_form/`}>
 <button>Apply</button>
          </Link>
        </div>
        ))}
        
       
    </div>
    </div>
  
  )
}

export default Joblist
