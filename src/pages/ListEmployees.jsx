import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../employeeSlice";
import TableEmployees from '../components/TableEmployees';
import { NavLink } from 'react-router-dom'

export default function ListEmployees() {
  const dispatch = useDispatch();
  // Utilisation du sélecteur pour accéder à l'état des employés
  const employees = useSelector((state) => state.employees.employees);
  const status = useSelector((state) => state.employees.status);
  const error = useSelector((state) => state.employees.error);

  useEffect(() => {
    // Utilisation de l'action fetchEmployees pour récupérer les employés
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }


const employeesMock = [
  {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
    startDate: '2021-01-01',
    department: 'Sales',
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: '1985-05-15',
    startDate: '2020-02-15',
    department: 'Marketing',
    street: '456 Oak St',
    city: 'Othertown',
    state: 'NY',
    zipCode: '67890',
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
    dateOfBirth: '1978-09-30',
    startDate: '2019-05-01',
    department: 'IT',
    street: '789 Maple Ave',
    city: 'Somewhere',
    state: 'TX',
    zipCode: '54321',
  },
];

  return (
    <main className='main_ListEmployees'>
       <h1 class="titleNewUser">HRnet</h1>
          <NavLink to="/newemployee" className="linkNewUser">Add New Employee</NavLink>
      <TableEmployees employees={employeesMock}/>
    </main>
  )
}
