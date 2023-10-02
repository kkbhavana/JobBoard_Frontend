import React from 'react'
import Header from '../Header/Header'
import Home from '../Homepage/Home'

import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EmpSignup from '../EmpSignup/EmpSignup'
import JobSignup from '../JobsSignup/JobSignup'

import Emplist from '../Emplist/Emplist'
import CreateJob from '../CreateJob/CreateJob'
import ApplicationForm from '../ApplicationFrom/ApplicationForm'
import Joblist from '../Joblist/Joblist'
import Update from '../Update/Update'
import Confirmation from '../Confirmation/Confirmation'
import Joblogin from '../Joblogin/Joblogin'
import SearchResult from '../SearchBar/SearchResult'

function RoutesLayout() {
  return (
    <div>
      <>
      <Router>
      <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                 <Route path='/empsignup/' element={<EmpSignup/>}/>
                <Route path='/jobsignup/' element={<JobSignup/>}/>
                <Route path='/userlogin/' element={<Joblogin/>}/>
                <Route path='/add_job/' element={<CreateJob/>}/>
                <Route path='/emplist/' element={<Emplist/>}/>
                <Route path='/joblist/' element={<Joblist/>}/>
                <Route path='/updatejob/:id/' element={<Update/>}/>
                <Route path='/applicaton_form/:id' element={<ApplicationForm/>}/>
                <Route path='/confirmationpage/' element={<Confirmation/>}/>
                <Route path='/search-result/' element={<SearchResult/>}/>
           </Routes>
       
      </Router>
      </>
    </div>
  )
}

export default RoutesLayout