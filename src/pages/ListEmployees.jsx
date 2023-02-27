import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "./../store/employeeSlice";
import TableEmployees from '../components/TableEmployees';
import { NavLink } from 'react-router-dom'
import {dataEmployees} from './../mock/data'

export default function ListEmployees() {
  const dispatch = useDispatch();

  const employeesList = useSelector((state) => state.employees.employeesList);
  const status = useSelector((state) => state.employees.status);
  const error = useSelector((state) => state.employees.error);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <main className='main_ListEmployees'>
       <h1 className="titleNewEmployee">HRnet</h1>
          <NavLink to="/newemployee" className="linkNewEmployee">Add New Employee</NavLink>
          {status === "loading" && <div>Loading...</div>}
          {status === "failed" && <div>{error}</div>}
          {status === "succeeded" && <TableEmployees employees={employeesList}/>}
    </main>
  )
}
