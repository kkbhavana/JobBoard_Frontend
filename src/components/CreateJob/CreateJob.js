
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CreatJob.css'
function CreateJob() {
      const [title, setTitle] = useState('');
      const [company, setCompany] = useState('');
      const [description, setDescription] = useState('');
      const [skills, setSkill] = useState('');
      const [places, setPlace] = useState('');
      const [salary, setSalary] = useState('');
      const navgate = useNavigate();


      async function Jobsdetails() {
            let item = { title, company, description, skills, places, salary }
            console.log(item)

            let result = await fetch('http://127.0.0.1:8001/employers/list_create-job/', {
                  method: 'POST',
                  body: JSON.stringify(item),
                  headers: {
                        'Content-Type': 'application/json',
                        'Accept': "application/json"

                  }
            })
            result = await result.json()
            console.log("result", result)
            localStorage.setItem('job-details', JSON.stringify(result));
            navgate('/emplist')

      }


      return (
            <div className="create_container">
                  <h1>Job Details</h1>
                 
                        <div className="input-box">
                              <label className='input-label'>Job Title</label>
                              <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                              />
                        </div>
                        <div className="input-box">
                              <label className='input-label'>Company Name</label>
                              <input
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                              />
                        </div>
                        <div className="input-box">
                              <label className='input-label'>Description</label>
                             <textarea rows={10} cols={30}
                             className='input-text'
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                              />
                        </div>
                        <div className="input-box">
                              <label className='input-label'>Skills</label>
                              <input
                                    type="text"
                                    value={skills}
                                    onChange={(e) => setSkill(e.target.value)}
                              />
                        </div>
                        <div className="input-box">
                              <label className='input-label'>Place</label>
                              <input
                                    type="text"
                                    value={places}
                                    onChange={(e) => setPlace(e.target.value)}
                              />
                        </div>
                        <div className="input-box">
                              <label className='input-label'>Salary</label>
                              <input
                                    type="text"
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}
                              />
                        </div>
                       
                        
                        <button onClick={Jobsdetails}className='btn-submit'>Submit</button>
                 
            </div>
      );
}
export default CreateJob
