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
    <div className='list_container'>
      <Link to='/add_job'>
      <button className='btn-update'>Add</button>
      </Link> 
    <div className='details'>
        {jobList.map((job)=>(
            <div className='jobdetails' key={job.id}>
            <h1>{job.title}</h1>
            <h4>Company Name:{job.company}, {job.places}</h4>
           
            <p>Descriotions : {job.description}</p>
           <p>Skills : {job.skills}</p>
           
            <p>Salary : {job.salary}</p>
 <Link to={`/updatejob/${job.id}`}>
 <button className='btn-update'>Update</button>
          </Link>
         
          {/* <Link to={`/detail/${product.id}`}> */}
 <button className='btn-update'>Delete</button>
          {/* </Link> */}
        </div>
        ))}
        
       
    </div>
    </div>
  )

}
export default EmpList