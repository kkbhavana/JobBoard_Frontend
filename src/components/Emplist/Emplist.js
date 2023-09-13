import React, { useEffect, useState } from 'react'
import {getALLjobitems} from '../ApiService/api' 
import {Link} from 'react-router-dom';
import './EmpList.css'



function EmpList() {
    const[jobList,setJobList] =useState([])
    useEffect(()=>{
        const fetchALLJobs = async() =>{
            const data =await getALLjobitems();
            console.log(data,"data");
            setJobList(data);
        };
        fetchALLJobs();
    },[])

  return (
    <div className='container'>
      <Link to='/add_job'>
      <button>Add</button>
      </Link> 
    <div className='details'>
        {jobList.map((job)=>(
            <div className='jobdetails' key={job.id}>
            <h1>{job.title}</h1>
            <h4>Company Name:{job.company}, {job.places}</h4>
           
            <p>Descriotions : {job.description}</p>
           <p>Skills : {job.skills}</p>
           
            <p>Salary : {job.salary}</p>
 <Link to={`/update/${job.id}`}>
 <button>Update</button>
          </Link>
         
          {/* <Link to={`/detail/${product.id}`}> */}
 <button>Delete</button>
          {/* </Link> */}
        </div>
        ))}
        
       
    </div>
    </div>
  )

}
export default EmpList