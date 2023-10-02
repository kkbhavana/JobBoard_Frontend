import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EmpList.css';

function EmpList() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    getJobList();
  }, []);

  const deleteJob = async (id) => {

    const confirmed = window.confirm('Are you sure you want to delete this job?');
  
    if (confirmed) {
      
        const response = await fetch(`http://127.0.0.1:8001/employers/delete-job/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {

          getJobList();
        } else {
          console.error('Failed to delete job:', response.status);
        }
      }
    
  };
  

  const getJobList = async () => {

      const response = await fetch('http://127.0.0.1:8001/employers/list_create-job/');
      
        const result = await response.json();
        setJobList(result);
  };

  return (
    <div className="list_container">
      <Link to="/add_job/">
        <button className="btn-update">Add</button>
      </Link>
      <div className="details">
        {jobList.map((job) => (
          <div className="jobdetails" key={job.id}>
            <h1>{job.title}</h1>
            <h4>
              Company Name: {job.company}, {job.places}
            </h4>
            <p>Description: {job.description}</p>
            <p>Skills: {job.skills}</p>
            <p>Salary: {job.salary}</p>
            <Link to={`/updatejob/${job.id}`}>
              <button className="btn-update">Update</button>
            </Link>
            <button className="btn-update" onClick={() => deleteJob(job.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmpList;
