import React from 'react'
import { useDispatch} from 'react-redux';
import {setStartDateEntree} from './../store/newEmployeeEntreeSlice'
import { formatDate } from '../utils/controlDate';

export default function StartDate() {
    // const [errorDateBirth, setErrorDateBirth] = useState
    const dispatch = useDispatch();

    function handleStartDateChange(event) {
        const formattedDate = formatDate(event.target.value);
        dispatch(setStartDateEntree(formattedDate));
    }

  return (
    <div className='box_startDate'>
        <div className='box_labelStartDate'>
        <label htmlFor="start-date">Start Date</label>
        <p className='p_startDate'>date du jour par défaut</p>
        </div>
        <input id="start-date" type="date" onChange={handleStartDateChange} /> 
    </div>
  )
}
