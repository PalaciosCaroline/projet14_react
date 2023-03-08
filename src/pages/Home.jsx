import React from 'react'
import { NavLink } from 'react-router-dom'
import logoHRnet from './../assets/logoHRnet_bg.png'


export default function Home() {
  return (
    <main className='box_home'>
      <img src={logoHRnet} alt="" />
       <h1>HRnet</h1><br/>
      <nav>
          <NavLink to="/newemployee">Add a new employee</NavLink>
          <NavLink to="/listemployees">View the employees's list</NavLink>
      </nav>
    </main>
  )
}
