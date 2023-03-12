import React, {useState} from 'react';
import ConfirmationModal from '../components/ConfirmationModal';
import FieldsetAdress from './FieldsetAdress'
import SelectDepartement from './SelectDepartement'
import { setFirstNameEntree, setLastNameEntree, setDateOfBirthEntree, setErrorDateOfBirthEntree} from '../store/newEmployeeEntreeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, saveEmployee } from "../store/employeesSlice";
import { VideInput} from './../store/newEmployeeEntreeSlice'
import StartDate from './StartDate';
import {isDateValid, formatDate} from './../utils/controlDate'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en-gb';


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
  const zipCode = useSelector((state) => state.newEmployeeEntree.zipCodeEntree);
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(firstName && lastName){
    const newEmployee = {firstName, lastName,startDate,departement,dateOfBirth,street,city,state,zipCode};
    dispatch(saveEmployee(newEmployee))
      .then(() => dispatch(fetchEmployees()))
      .then(() => {
        dispatch(VideInput());
        setIsModalOpen(true);
      });
      e.target.reset();
    } else return
  };

  const handleFirstNameChange = (e) => dispatch(setFirstNameEntree(e.target.value));
  const handleLastNameChange = (e) => dispatch(setLastNameEntree(e.target.value));

  // const handleDateOfBirthChange = (e) => {
  //   const inputDate = e.target.value;
  //   const currentDate = new Date();
  //   const minDate = new Date(currentDate.getFullYear() - 90, currentDate.getMonth(), currentDate.getDate());
  //   const maxDate = new Date(currentDate.getFullYear() - 12, currentDate.getMonth(), currentDate.getDate());
  //   const dateOfBirth = new Date(inputDate);
  //   if (dateOfBirth < minDate || dateOfBirth > maxDate) {
  //     dispatch(setErrorDateOfBirthEntree('Votre date de naissance semble incorrecte, veuillez vérifier la date entrée.'));
  //   } else {
  //     dispatch(setErrorDateOfBirthEntree(null));
  //     const formatDateInput = formatDate(e.target.value);
  //     dispatch(setDateOfBirthEntree(formatDateInput));
  //   }
  // }


  const handleDateOfBirthChange = (e) => {
      const dateString = e.target.value;
      if (!isDateValid(dateString)) {
        dispatch(setErrorDateOfBirthEntree('Votre date de naissance semble incorrecte, veuillez vérifier la date entrée.'));
        return;
      } else {
      dispatch(setErrorDateOfBirthEntree(null));
      const formatDateInput = formatDate(e.target.value);
      dispatch(setDateOfBirthEntree(formatDateInput));
      }
  }
  
  console.log(errorDateOfBirthEntree)
  return (
    <div className='box_formEntree'>
       <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}>
    <form action="#" id="create-employee" onSubmit={handleFormSubmit}>
      
        <div className='boxName'>
          <div className='box_input'>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" onChange={handleFirstNameChange}/>
        </div>
        <div className='box_input'>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" onChange={handleLastNameChange}/>
        </div>
        </div>

        <div className="form-group box-input">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            // value={dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
        {errorDateOfBirthEntree && <p className='errorEntree'>{errorDateOfBirthEntree}</p>}
        </div>

        <StartDate className='box-input'/>

        <FieldsetAdress/>

       <SelectDepartement/>
       <button className='btnFormSave' type="submit">Save the new employee</button>
    </form>
    </LocalizationProvider>
    {isModalOpen && (<ConfirmationModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />)}
    </div>
  )
}
