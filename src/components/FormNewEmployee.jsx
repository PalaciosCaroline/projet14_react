import React from 'react'
import FieldsetAdress from './FieldsetAdress'
import SelectDepartement from './SelectDepartement'
import { setFirstNameEntree, setLastNameEntree, setDateOfBirthEntree, setStartDateEntree} from '../store/newEmployeeEntreeslice';
import { useDispatch } from 'react-redux';

export default function FormNewEmployee() {
  const dispatch = useDispatch();

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
   
    <form action="#" id="create-employee">
        <div className='boxName'>
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" onChange={handleFirstNameChange}/>

        <label for="last-name">Last Name</label>
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

        <label for="start-date">Start Date</label>
        <input id="start-date" type="text" onChange={handleStartDateChange}/>

        <FieldsetAdress/>

       <SelectDepartement/>
       <button className='btnFormSave' type="submit">Save</button>
    </form>
  )
}
