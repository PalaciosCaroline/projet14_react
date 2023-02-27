import React from 'react'

export default function TableEmployees({employees}) {



  return (

    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {employees?.map((employee, index) => (
          <tr key={index}>
            <td>{employee['firstName']? employee['firstName'] : ''}</td>
            <td>{employee['lastName'] ? employee['lastName'] : ''}</td>
            <td>{employee['startDate'] ?employee['startDate'] : '' }</td>
            <td>{employee['Department'] ? employee['Department'] : ''}</td>
            <td>{employee['dateOfBirth'] ? employee['dateOfBirth'] : ''}</td>
            <td>{employee['street'] ? employee['street'] : ''}</td>
            <td>{employee['city'] ? employee['city'] : ''}</td>
            <td>{employee['state'] ? employee['state'] : ''}</td>
            <td>{employee['zipCode'] ?employee['zipCode'] :'' }</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
