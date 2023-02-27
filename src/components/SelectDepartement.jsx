import React from 'react'
import { setDepartementEntree} from '../store/newEmployeeEntreeSlice';
import { useDispatch } from 'react-redux';

export default function SelectDepartement() {
  const dispatch = useDispatch();

  function handleDepartementChange(event) {
    dispatch(setDepartementEntree(event.target.value));
  }

  return (
    <div className='boxDepartement'>
        <label htmlFor="department">Department</label>
        <select name="department" id="department" onChange={handleDepartementChange}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
        </select>
    </div>
  )
}


