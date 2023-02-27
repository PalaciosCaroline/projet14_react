import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import FormNewEmployee from '../components/FormNewEmployee'
import ConfirmationModal from '../components/ConfirmationModal';
import { NavLink } from 'react-router-dom'
import { fetchEmployees, saveEmployee } from "../store/employeeSlice";
import { VideInput, setEmployeeEntree} from './../store/'
import SelectDepartement from '../components/SelectDepartement';


export default function NewEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);  

  const dispatch = useDispatch();

  const saveStatus = useSelector((state) => state.employees.saveStatus);
  const saveError = useSelector((state) => state.employees.saveError);

  const fetchStatus = useSelector((state) => state.employees.status);
  const fetchError = useSelector((state) => state.employees.error);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const NewEmployee = setEmployeeEntree;
    dispatch(saveEmployee(NewEmployee))
      .then(() => dispatch(fetchEmployees()))
      .then(() => {
        VideInput()
        setIsModalOpen(true);
      });
  };

  if (saveStatus === "loading" || fetchStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (saveStatus === "failed") {
    return <div>{saveError}</div>;
  }

  if (fetchStatus === "failed") {
    return <div>{fetchError}</div>;
  }

  return (
    <main>
       <div >
          <h1 class="titleNewUser">HRnet</h1>
          <NavLink to="/listemployees" className="linkNewUser">View Current Employees</NavLink>
           
      </div>
      {!isModalOpen &&        
        (<div class="containerNewUser">
           <h2>Create Employee</h2>
            <FormNewEmployee handleFormSubmit={handleFormSubmit}/>
           
        </div>)
      }
      
      {isModalOpen && (<ConfirmationModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />)}
    </main>
  )
}
