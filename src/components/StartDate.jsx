import React from 'react'
import { useDispatch} from 'react-redux';
import {setStartDateEntree} from './../store/newEmployeeEntreeSlice'
import { formatDate } from '../utils/controlDate';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

export default function StartDate() {
    // const [errorStartDate, setErrorStartDate] = useState()
    const dispatch = useDispatch();

    const noBeforeDay = dayjs().subtract(1, 'year');
    const noAfterDay = dayjs().add(1, 'year');

  return (
    <div className='form-group box_startDate'>       
      
        <p>Start Date</p>
        <MobileDatePicker 
        // label="Start Date" 
     
        minDate={noBeforeDay}
        maxDate={noAfterDay}
        views={['year', 'month', 'day']}
        onChange={event => dispatch(setStartDateEntree(formatDate(event)))}
      
        />

    </div>
  )
}
