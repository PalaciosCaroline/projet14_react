import React from 'react'
import FieldsetAdress from './FieldsetAdress'
import SelectDepartement from './SelectDepartement'
import { setFirstNameEntree, setLastNameEntree, setDateOfBirthEntree, setStartDateEntree} from '../store/newEmployeeEntreeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, saveEmployee } from "../store/employeeSlice";
import { VideInput} from './../store/newEmployeeEntreeSlice'

export default function FormNewEmployee({setIsModalOpen}) {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.newEmployeeEntree.firstNameEntree);
  const lastName = useSelector((state) => state.newEmployeeEntree.lastNameEntree);
  const startDate = useSelector((state) => state.newEmployeeEntree.startDateEntree);
  const departement = useSelector((state) => state.newEmployeeEntree.departementEntree);
  const dateOfBirth = useSelector((state) => state.newEmployeeEntree.dateOfBirthEntree);
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
        VideInput()
        setIsModalOpen(true);
      });
  };

  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [departement, SetDepartement]  = useState("");;
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [street, setStreet]  = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zipCode, setZipCode] = useState("");

  const handleFirstNameChange = (e) => dispatch(setFirstNameEntree(e.target.value));
  const handleLastNameChange = (e) => dispatch(setLastNameEntree(e.target.value));
  const handleStartDateChange = (e) => dispatch(setStartDateEntree(e.target.value));
  const handleDateOfBirthChange = (e) => dispatch(setDateOfBirthEntree(e.target.value));

  
  return (
   
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
        </div>

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" onChange={handleStartDateChange}/>

        <FieldsetAdress/>

       <SelectDepartement/>
       <button className='btnFormSave' type="submit">Save</button>
    </form>
  )
}
