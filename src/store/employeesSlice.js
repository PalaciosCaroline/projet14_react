import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataEmployeesMock } from "../mock/data";


export const fetchEmployees = createAsyncThunk(
  "employees/fetch",
  async () => {
    // const employees = JSON.parse(localStorage.getItem("employees")) || dataEmployeesMock;
    const employees = JSON.parse(localStorage.getItem("employees")) ;
    if (!employees) {
      localStorage.setItem("employees", JSON.stringify(dataEmployeesMock));
    }
    return employees;
  }
);

export const saveEmployee = createAsyncThunk(
  "employees/save",
  async (employee) => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    return employees;
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employeesList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.employeesList = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload ? action.payload.message : "an error occurred while retrieving the list of employees";
        }
      )
  },
});

// employeesSlice
//   .extraReducers
//   .addMatcher(fetchEmployees.fulfilled, (state, action) => {
//     state.employeesList = action.payload;
// });

export default employeesSlice;