import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getALLjobid } from '../ApiService/api';


function UpdateJob() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [jobDetails, setJobDetails] = useState({
        title: '',
        company: '',
        description: '',
        skills: '',
        places: '',
        salary: '',
    });

    useEffect(()=>{
        const fetchALLJobs = async() =>{
            const data =await getALLjobid(id);
            console.log(data,"data");
            setJobDetails (data);
        };
        fetchALLJobs();
    },[id])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobDetails({ ...jobDetails, [name]: value });
    };

    const handleUpdate = async () => {

        let response = await fetch(`http://127.0.0.1:8001/employers/update-job/${id}/`, {
            method: 'PUT',
            body: JSON.stringify(jobDetails),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        response = await response.json()
        console.log("result", response)
        localStorage.setItem('job-details', JSON.stringify(response));
        navigate('/emplist')

    }




    return (
        <div className="container">
            <h1>Update Job Details</h1>
            <div className="input-box">
                <label>Job Title:</label>
                <input
                    type="text"
                    name="title"
                    value={jobDetails.title}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-box">
                <label>Company Name:</label>
                <input
                    type="text"
                    name="company"
                    value={jobDetails.company}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-box">
                <label>Description:</label>
                <textarea
                    name="description"
                    value={jobDetails.description}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-box">
                <label>Skills:</label>
                <input
                    type="text"
                    name="skills"
                    value={jobDetails.skills}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-box">
                <label>Place:</label>
                <input
                    type="text"
                    name="places"
                    value={jobDetails.places}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-box">
                <label>Salary:</label>
                <input
                    type="text"
                    name="salary"
                    value={jobDetails.salary}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleUpdate}>Submit</button>
        </div>
    );
}

export default UpdateJob;
