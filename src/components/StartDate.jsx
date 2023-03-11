import React,{ useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {setStartDateEntree} from './../store/newEmployeeEntreeSlice'
import { formatDate } from '../utils/controlDate';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

export default function StartDate({startDate, setStartDate}) {
    const dispatch = useDispatch();
   
    const startDateEntree = useSelector((state) => state.newEmployeeEntree.startDateEntree);
    const datePickerRef = useRef(null); 

    const noBeforeDay = dayjs().subtract(1, 'year');
    const noAfterDay = dayjs().add(1, 'year');
   
  return (
    <div className='form-group box_startDate'>       
        <p>Start Date</p>
        <MobileDatePicker 
        label="Start Date" 
        placeholder='DD/MM/YYYY'
        minDate={noBeforeDay}
        maxDate={noAfterDay}
        views={['year', 'month', 'day']}
        value={startDate}
        onChange={event => dispatch(setStartDateEntree(dayjs(event).format('DD/MM/YYYY')))}
        inputRef={datePickerRef}
        />
    </div>
  )
}
