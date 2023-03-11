import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom'
import logoHRnet from './../assets/logoHRnet_bg.png'
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.employees.status);
  const error = useSelector((state) => state.employees.error);

  return (
    <main className='box_home'>
      <img src={logoHRnet} alt="" />
       <h1>HRnet</h1><br/>
       {status === "loading" && <div>Loading...</div>}
      {status === "failed" && (
        <div>{error ? error : "An error occurred while loading the list of employees."}</div>
      )}
       {status === "succeeded" && (
      <nav>
          <NavLink to="/newemployee">Add a new employee</NavLink>
          <NavLink to="/listemployees">View the employees's list</NavLink>
      </nav>)}
    </main>
  )
}
