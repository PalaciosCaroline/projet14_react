import React from 'react'
import { NavLink } from 'react-router-dom'


export default function ChoiceService() {
  return (
    <main>
       <h1>HRnet</h1><br/>
      <h2>Choice Service</h2>
      <nav>
          <NavLink to="/newemployee">Add a new employee</NavLink>
          <NavLink to="/listemployees">View the employees's list</NavLink>
      </nav>
    </main>
  )
}
