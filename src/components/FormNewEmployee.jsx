import React, {useState} from 'react';
import ConfirmationModal from '../components/ConfirmationModal';
import FieldsetAdress from './FieldsetAdress'
import SelectDepartement from './SelectDepartement'
import { setFirstNameEntree, setLastNameEntree, setDateOfBirthEntree} from '../store/newEmployeeEntreeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, saveEmployee } from "../store/employeeSlice";
import { VideInput} from './../store/newEmployeeEntreeSlice'
import StartDate from './StartDate';
import {isDateValid, formatDate} from './../utils/controlDate'

export default function FormNewEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const dispatch = useDispatch();
  const dateOfBirthEntree = useSelector((state) => state.employees.dateOfBirthEntree);
  const firstName = useSelector((state) => state.newEmployeeEntree.firstNameEntree);
  const lastName = useSelector((state) => state.newEmployeeEntree.lastNameEntree);
  const startDate = useSelector((state) => state.newEmployeeEntree.startDateEntree);
  const departement = useSelector((state) => state.newEmployeeEntree.departementEntree);
  const dateOfBirth = useSelector((state) => state.newEmployeeEntree.dateOfBirthEntree);
  const errorDateOfBirthEntree = useSelector((state) => state.newEmployeeEntree.errorDateOfBirthEntree);
  const street = useSelector((state) => state.newEmployeeEntree.streetEntree);
  const city = useSelector((state) => state.newEmployeeEntree.cityEntree);
  const state = useSelector((state) => state.newEmployeeEntree.stateEntree);
  const zipCode = useSelector((state) => state.newEmployeeEntreezipCodeEntree);
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {firstName, lastName,startDate,departement,dateOfBirth,street,city,state,zipCode};
    dispatch(saveEmployee(newEmployee))
      .then(() => dispatch(fetchEmployees()))
      .then(() => {
        VideInput();
        setIsModalOpen(true);
      });
  };

  const handleFirstNameChange = (e) => dispatch(setFirstNameEntree(e.target.value));
  const handleLastNameChange = (e) => dispatch(setLastNameEntree(e.target.value));
  const handleDateOfBirthChange = (e) => {
      const inputDate = e.target.value;
      if (!isDateValid(inputDate)) {
        alert('La date ne peut pas être supérieure à la date du jour.');
        return;
      }
      const formatDateInput = formatDate(e.target.value);
      dispatch(setDateOfBirthEntree(formatDateInput));
  }

  console.log(dateOfBirthEntree)
  
  return (
    <div className='box_formEntree'>
    <form action="#" id="create-employee" onSubmit={handleFormSubmit}>
      
        <div className='boxName'>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" onChange={handleFirstNameChange}/>

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" onChange={handleLastNameChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            // value={dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
          {errorDateOfBirthEntree ?? <p className='errorEntree'>{errorDateOfBirthEntree}</p>}
        </div>

        <StartDate/>

        <FieldsetAdress/>

       <SelectDepartement/>
       <button className='btnFormSave' type="submit">Save the new employee</button>
    </form>
    {isModalOpen && (<ConfirmationModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />)}
    </div>
  )
}
