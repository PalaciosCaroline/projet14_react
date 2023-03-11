import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import FormNewEmployee from '../components/FormNewEmployee'
// import ConfirmationModal from '../components/ConfirmationModal';
import { NavLink } from 'react-router-dom'
import { fetchEmployees} from "../store/employeesSlice";
import logoHRnet from './../assets/logoHRnet_bg.png'
// import { VideInput} from './../store/newEmployeeEntreeSlice'

export default function NewEmployee() {
  // const [isModalOpen, setIsModalOpen] = useState(false); 



 
  // const saveError = useSelector((state) => state.employees.saveError);

  // const fetchStatus = useSelector((state) => state.employees.status);
  // const fetchError = useSelector((state) => state.employees.error);

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


  return (
    <main className='main_newEmployee'>
       <header >
        <img src={logoHRnet} alt="" />
          <h1 className="titleNewEmployee">HRnet</h1>
          <NavLink to="/listemployees" className="linkNewEmployee linkListEmployee">View Current Employees</NavLink>
           
      </header>
      <div className="containerNewEmployee">
            <h2 className='title_newEmployee'>Create Employee</h2>
            {/* {!isModalOpen &&        
        (<FormNewEmployee setIsModalOpen={setIsModalOpen}/>) } */}
        <FormNewEmployee />
      {/* {isModalOpen && (<ConfirmationModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />)} */}
      </div>
    </main>
  )
}
