import './ApplicationForm.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ApplicationForm() {
  const { id } = useParams();
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('');
  const [resume, setResume] = useState(null); // Store the file object
  const [status, setStatus] = useState(false); // Use boolean for checkboxes
  const navigate = useNavigate();

  async function Jobapplication(e) {
    e.preventDefault(); 

    let formData = new FormData();
    formData.append('job_id', id);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('qualification', qualification);
    if (resume) {
      formData.append('resume', resume);
    }
    formData.append('status', status);

  
      let result = await fetch('http://127.0.0.1:8001/jobseeker/list_create-application/', {
        method: 'POST',
        body: formData,
      });

      result = await result.json();
      console.log("result", result);
      localStorage.setItem('application-details', JSON.stringify(result));
      navigate('/confirmationpage/');
    
  }

  return (
    <div className='apply_container'>
      <div className='applicationform'>
        <h1>Application Form</h1>
        <form onSubmit={Jobapplication}>
          <div className="form-input">
            <label>First Name:</label>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Last Name:</label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Qualification:</label>
            <textarea rows={15} cols={40}
            className='input-text'
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>
          <div className="form-resume">
            <label>Resume:</label>
            <input
              type="file"
              onChange={(e) => setResume(e.target.files[0])}
            />
          </div>
          <div className="form-checkbox">
           
            <input
              type="checkbox"
              id="status"
              checked={status}
              onChange={() => setStatus(!status)}
            /><br/>
             <label>I hereby declare that the information provided in this job application is true,<br/>
               complete, and accurate to the best of my knowledge</label>
          </div>
          <button type="submit" className='btn-submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;

