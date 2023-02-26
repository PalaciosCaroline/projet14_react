import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Choiceuser() {
  return (
    <main>
       <h1>HRnet</h1><br/>
      <h2>Choice Service</h2>
      <nav>
          <NavLink to="/newemployee">Add New Employee</NavLink>
          <NavLink to="/listemployees">List Employees</NavLink>
      </nav>
    </main>
  )
}
