import React from 'react'
import FieldsetAdress from './FieldsetAdress'
import SelectDepartement from './SelectDepartement'

export default function FormNewEmployee() {
  return (
   
    <form action="#" id="create-employee">
        <div className='boxName'>
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" />
        </div>
        
        <label for="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label for="start-date">Start Date</label>
        <input id="start-date" type="text" />

        <FieldsetAdress/>

       <SelectDepartement/>

    </form>

   
  )
}
