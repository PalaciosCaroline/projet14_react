import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import FormNewEmployee from '../components/FormNewEmployee'
import ConfirmationModal from '../components/ConfirmationModal';
import { NavLink } from 'react-router-dom'
// import { fetchEmployees, saveEmployee } from "../store/employeeSlice";
// import { VideInput} from './../store/newEmployeeEntreeSlice'



export default function NewEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);  

  const dispatch = useDispatch();

  const saveStatus = useSelector((state) => state.employees.saveStatus);
  const saveError = useSelector((state) => state.employees.saveError);

  const fetchStatus = useSelector((state) => state.employees.status);
  const fetchError = useSelector((state) => state.employees.error);

  // const firstName = useSelector((state) => state.newEmployeeEntree.firstName);
  // const lastName = useSelector((state) => state.newEmployeeEntree.lastName);
  // const startDate = useSelector((state) => state.newEmployeeEntree.startDate);
  // const departement = useSelector((state) => state.newEmployeeEntree.departement);
  // const dateOfBirth = useSelector((state) => state.newEmployeeEntree.dateOfBirth);
  // const street = useSelector((state) => state.newEmployeeEntree.street);
  // const city = useSelector((state) => state.newEmployeeEntree.city);
  // const state = useSelector((state) => state.newEmployeeEntree.state);
  // const zipCode = useSelector((state) => state.newEmployeeEntreezipCode);
 
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   const NewEmployee = {firstName, lastName,startDate,departement,dateOfBirth,street,city,state,zipCode};
  //   dispatch(saveEmployee(NewEmployee))
  //     .then(() => dispatch(fetchEmployees()))
  //     .then(() => {
  //       VideInput()
  //       setIsModalOpen(true);
  //     });
  // };

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
          <h1 className="titleNewUser">HRnet</h1>
          <NavLink to="/listemployees" className="linkNewUser">View Current Employees</NavLink>
           
      </div>
      {!isModalOpen &&        
        (<div className="containerNewUser">
           <h2>Create Employee</h2>
            <FormNewEmployee setIsModalOpen={setIsModalOpen}/>
           
        </div>)
      }
      
      {isModalOpen && (<ConfirmationModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />)}
    </main>
  )
}
