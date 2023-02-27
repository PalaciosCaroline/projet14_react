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
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee['firstName']}</td>
            <td>{employee['lastName']}</td>
            <td>{employee['startDate']}</td>
            <td>{employee['Department']}</td>
            <td>{employee['dateOfBirth']}</td>
            <td>{employee['street']}</td>
            <td>{employee['city']}</td>
            <td>{employee['state']}</td>
            <td>{employee['zipCode']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
