import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    return employees;
  }
);

const employeeSlice = createSlice({
  name: "employee",
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
      );
  },
});

export default employeeSlice;