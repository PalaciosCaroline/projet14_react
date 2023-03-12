import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {setStartDateEntree} from './../store/newEmployeeEntreeSlice'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { InputLabel, TextField } from '@mui/material';
import dayjs from 'dayjs';


export default function StartDate({startDate}) {
    const dispatch = useDispatch();
    const noBeforeDay = dayjs().subtract(1, 'year');
    const noAfterDay = dayjs().add(1, 'year');
   
  return (
    <div className='form-group box_startDate'>       
        <p>Start Date</p>
        <MobileDatePicker 
        label="Start Date Select" 
        minDate={noBeforeDay}
        maxDate={noAfterDay}
        views={['year', 'month', 'day']}
        value={startDate}
        onChange={event => dispatch(setStartDateEntree(dayjs(event).format('DD/MM/YYYY')))}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          '& .MuiInputBase-input': {
            height: '25px',
            width: '140px', // réduit la hauteur de l'entrée
          },
          // '& .css-156tkzh-MuiButtonBase-root-MuiPickersDay-root': {
          //   '& .Mui-selected': {
          //   backgroundColor: 'green',
          // },
          // },
        }}
      
        />
    </div>
  )
}
