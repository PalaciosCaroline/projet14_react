import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Choiceuser() {
  return (
    <main>
      <h1>Accueil<br></br></h1>
      <h2>Choice Service</h2>
      <nav>
          <NavLink to="/newuser">New User</NavLink>
          <NavLink to="/listusers">List Users</NavLink>
      </nav>
    </main>
  )
}
