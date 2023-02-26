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
        {employees.map((user, index) => (
          <tr key={index}>
            <td>{user['firstName']}</td>
            <td>{user['lastName']}</td>
            <td>{user['startDate']}</td>
            <td>{user['Department']}</td>
            <td>{user['dateOfBirth']}</td>
            <td>{user['street']}</td>
            <td>{user['city']}</td>
            <td>{user['state']}</td>
            <td>{user['zipCode']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
