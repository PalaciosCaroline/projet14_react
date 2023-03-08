import React from 'react'
import { useDispatch} from 'react-redux';
import {setStartDateEntree} from './../store/newEmployeeEntreeSlice'
import { formatDate } from '../utils/controlDate';

export default function StartDate() {
    // const [errorStartDate, setErrorStartDate] = useState()
    const dispatch = useDispatch();

    function handleStartDateChange(event) {
        const formattedDate = formatDate(event.target.value);
        dispatch(setStartDateEntree(formattedDate));
    }

  return (
    <div className='form-group'>       
        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="date" onChange={handleStartDateChange} /> 
    </div>
  )
}
