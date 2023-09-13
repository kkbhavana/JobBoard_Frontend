import React from 'react'
import Header from '../Header/Header'
import Home from '../Homepage/Home'
import Front from '../Frontpage/Front'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EmpSignup from '../EmpSignup/EmpSignup'
import JobSignup from '../JobsSignup/JobSignup'
import Login from '../Login/Login'
import Emplist from '../Emplist/Emplist'
import CreateJob from '../CreateJob/CreateJob'
import ApplicationForm from '../ApplicationFrom/ApplicationForm'
import Joblist from '../Joblist/Joblist'



function RoutesLayout() {
  return (
    <div>
      <>
      <Router>
      <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='frontpage' element={<Front/>}/>
                <Route path='empsignup' element={<EmpSignup/>}/>
                <Route path='jobsignup' element={<JobSignup/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='add_job' element={<CreateJob/>}/>
                <Route path='emplist' element={<Emplist/>}/>
                <Route path='joblist' element={<Joblist/>}/>
                <Route path='applicaton_form' element={<ApplicationForm/>}/>
           </Routes>
       
      </Router>
      </>
    </div>
  )
}

export default RoutesLayout