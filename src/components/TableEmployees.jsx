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
    <div>
      <Table data={employees} columns={columns} />
    </div>
  );
}
// import Table from './Table';

// export default function EmployeeTable({employees}) {

//   const columns = ['First Name', 'Last Name', 'Start Date', 'Department', 'Date of Birth', 'Street', 'City', 'State', 'Zip Code'];

//   return (
//     <div>
//       <Table data={employees} columns={columns} />
//     </div>
//   );
// }

// export default function TableEmployees({employees}) {


//   return (

//     <table>
//       <thead>
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Start Date</th>
//           <th>Department</th>
//           <th>Date of Birth</th>
//           <th>Street</th>
//           <th>City</th>
//           <th>State</th>
//           <th>Zip Code</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees?.map((employee, index) => (
//           <tr key={index}>
//             <td>{employee['firstName']? employee['firstName'] : ''}</td>
//             <td>{employee['lastName'] ? employee['lastName'] : ''}</td>
//             <td>{employee['startDate'] ?employee['startDate'] : '' }</td>
//             <td>{employee['Department'] ? employee['Department'] : ''}</td>
//             <td>{employee['dateOfBirth'] ? employee['dateOfBirth'] : ''}</td>
//             <td>{employee['street'] ? employee['street'] : ''}</td>
//             <td>{employee['city'] ? employee['city'] : ''}</td>
//             <td>{employee['state'] ? employee['state'] : ''}</td>
//             <td>{employee['zipCode'] ?employee['zipCode'] :'' }</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }
