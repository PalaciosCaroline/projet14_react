import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "./../store/employeesSlice";
import TableEmployees from '../components/TableEmployees';
import { NavLink } from 'react-router-dom'
import logoHRnet from './../assets/logoHRnet_bg.png'

export default function ListEmployees() {
  const dispatch = useDispatch();

  const employeesList = useSelector((state) => state.employees.employeesList);
  const status = useSelector((state) => state.employees.status);
  const error = useSelector((state) => state.employees.error);
console.log(status)
  // useEffect(() => {
  //   dispatch(fetchEmployees());
  // }, [dispatch]);

  console.log(employeesList)

  return (
    <main className='main_ListEmployees'>
       <header className='header_ListEmployees'>
          <img src={logoHRnet} alt="" />
          <div className='title_ListEmployees'>
            <h1 className="titleNewEmployee">HRnet</h1>
            <NavLink to="/newemployee" className="linkNewEmployee">Add New Employee</NavLink>
          </div>
        </header>
          {status === "loading" && <div>Loading...</div>}
          {status === "failed" && <div>{error}</div>}
          {status === "succeeded" && <TableEmployees employees={employeesList}/>}
    </main>
  )
}
