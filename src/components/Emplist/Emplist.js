import React, { useEffect, useState } from 'react'
// import {getALLjobitems} from '../ApiService/api' 
import { Link } from 'react-router-dom';
import './EmpList.css'



function EmpList() {
 
  const [jobList, setJobList] = useState([])
  // const navigate = useNavigate();
  useEffect(() => {

    getJoblist()
  }, [])
  async function deleteOperation(id) {
    let result = fetch('http://127.0.0.1:8001/employers/delete-job/' + id, {
      method: 'DELETE'
    })
    result = await result.json()
    console.log('result', result)
    getJoblist()
  }
  async function getJoblist() {
    let result = await fetch('http://127.0.0.1:8001/employers/list_create-job/')
    result = await result.json()
    console.log('res')
    setJobList(result)
  }

  return (
    <div className='list_container'>
      <Link to='/add_job'>
        <button className='btn-update'>Add</button>
      </Link>
      <div className='details'>
        {jobList.map((job) => (
          <div className='jobdetails' key={job.id}>
            <h1>{job.title}</h1>
            <h4>Company Name:{job.company}, {job.places}</h4>

            <p>Descriotions : {job.description}</p>
            <p>Skills : {job.skills}</p>

            <p>Salary : {job.salary}</p>
            <Link to={`/updatejob/${job.id}`}>
              <button className='btn-update'>Update</button>
            </Link>

            {/* <Link to={`/deletejob/${job.id}`}> */}
            <button className='btn-update' onClick={() => deleteOperation(job.id)}>Delete</button>
            {/* </Link> */}
          </div>
        ))}


      </div>
    </div>
  )

}
export default EmpList