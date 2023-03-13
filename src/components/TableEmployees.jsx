import React from 'react'
import Table from './Table'
import { columns } from '../mock/data';

export default function EmployeeTable({employees}) {

  return (
    <div className='box_table'>
      <Table data={employees} columns={columns} />
    </div>
  );
}
