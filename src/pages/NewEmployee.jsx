import React from 'react'
import FormNewEmployee from '../components/FormNewEmployee'
import { NavLink } from 'react-router-dom'
import logoHRnet from './../assets/logoHRnet_bg.png'

export default function NewEmployee() {
  return (
    <main className='main_newEmployee'>
       <header >
        <img src={logoHRnet} alt="" />
          <h1 className="titleNewEmployee">HRnet</h1>
          <NavLink to="/listemployees" className="linkNewEmployee linkListEmployee">View Current Employees</NavLink>    
      </header>
      <div className="containerNewEmployee">
          <h2 className='title_newEmployee'>Create Employee</h2>
          <FormNewEmployee />
      </div>
    </main>
  )
}
