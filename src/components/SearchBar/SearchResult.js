import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';

function SearchResult() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`http://127.0.0.1:8001/jobseeker/search-job/?search=${searchText}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setSearchResults(data); // Assuming the API response is an array of results
      })
      .catch((err) => {
        console.error(err);
        setSearchResults([]); // Clear search results on error
      });
  };

  return (
    <div className='search-container'>
    <div className='search-input'>
      <input
        type='text'
        placeholder='search here...'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className='btn-search' onClick={handleSearch}>
        Search
      </button>
      </div>
      <div className='search-results'>
        {searchResults.map((job) => (
          <div className='searchdetails' key={job.id}>
            <h1>{job.title}</h1>
            <h4>
              Company Name: {job.company}, {job.places}
            </h4>
            <p>Description: {job.description}</p>
            <p>Skills: {job.skills}</p>
            <p>Salary: {job.salary}</p>
            <Link to={`/application_form/${job.id}`}>
              <button className='btn-submit'>Apply</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  
  );
}

export default SearchResult;

