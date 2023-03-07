export const dataEmployees = [
    {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '15/01/1975',
      startDate: '01/04/2022',
      department: 'Sales',
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '17/05/1985',
      startDate: '25/02/2020',
      department: 'Marketing',
      street: '456 Oak St',
      city: 'Othertown',
      state: 'NY',
      zipCode: '67890',
    },
    {
      firstName: 'Bob',
      lastName: 'Johnson',
      dateOfBirth: '30/09/1978',
      startDate: '03/05/2019',
      department: 'IT',
      street: '789 Maple Ave',
      city: 'Somewhere',
      state: 'TX',
      zipCode: '54321',
    },
  ];

  export function initializeLocalStorage() {
    const employees = JSON.parse(localStorage.getItem("employees"));
    if (!employees) {
      localStorage.setItem("employees", JSON.stringify(dataEmployees));
    }
  }
  