import React from 'react'
import Table from './Table'

export default function EmployeeTable({employees}) {

  const columns = [
    { label: 'First Name', property: 'firstName' },
    { label: 'Last Name', property: 'lastName' },
    { label: 'Start Date', property: 'startDate' },
    { label: 'Department', property: 'department' },
    { label: 'Date of Birth', property: 'dateOfBirth' },
    { label: 'Street', property: 'street' },
    { label: 'City', property: 'city' },
    { label: 'State', property: 'state' },
    { label: 'Zip Code', property: 'zipCode' },
  ];

  return (
    <div className='box_table'>
      <Table data={employees} columns={columns} />
    </div>
  );
}
