import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Joblist.css';
import SearchResult from '../SearchBar/SearchResult';

function Joblist() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    async function fetchJobList() {
      
        const response = await fetch('http://127.0.0.1:8001/employers/list_create-job/');
    
        const data = await response.json();
        console.log('respone',data)
        setJobList(data);
     
    }
    fetchJobList();
  }, []);

  return (
    <div className='list_container'>
      <SearchResult/>
      <div className='details'>
        {jobList.map((job) => (
          <div className='jobdetails' key={job.id}>
            <h1>{job.title}</h1>
            <h4>
              Company Name: {job.company}, {job.places}
            </h4>
            <p>Descriptions: {job.description}</p>
            <p>Skills: {job.skills}</p>
            <p>Salary: {job.salary}</p>
            <Link to={`/applicaton_form/${job.id}`}>
              <button className='btn-submit'>Apply</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Joblist;
