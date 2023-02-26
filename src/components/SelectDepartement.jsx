import React from 'react'

export default function SelectDepartement() {
  return (
    <div className='boxDepartement'>
        <label for="department">Department</label>
        <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
        </select>
    </div>
  )
}


