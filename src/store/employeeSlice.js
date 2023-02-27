import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const EMPLOYEE_KEY = "employees";

export const fetchEmployees = createAsyncThunk(
  "employees/fetch",
  async () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    return employees;
  }
);

export const saveEmployee = createAsyncThunk(
  "employees/save",
  async (employee) => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    return employee;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employeeList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchEmployees.pending]: (state) => {
      state.status = "loading";
    },
    [fetchEmployees.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.employeeList = action.payload;
    },
    [fetchEmployees.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [saveEmployee.pending]: (state) => {
      state.status = "loading";
    },
    [saveEmployee.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.employeeList = action.payload;
    },
    [saveEmployee.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default employeeSlice;