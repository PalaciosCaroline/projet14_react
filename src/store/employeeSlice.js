import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const EMPLOYEE_KEY = "employees";

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    try {
      const employees = JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
      return employees;
    } catch (error) {
      console.log("Error fetching employees from local storage", error);
      return [];
    }
  }
);

export const saveEmployee = createAsyncThunk(
  "employee/saveEmployee",
  async (employee, thunkAPI) => {
    try {
      const existingEmployees = thunkAPI.getState().employee.employeeList;
      const newEmployees = [...existingEmployees, employee];
      localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(newEmployees));
      return newEmployees;
    } catch (error) {
      console.log("Error saving employee to local storage", error);
      return thunkAPI.rejectWithValue("Error saving employee");
    }
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

export default employeeSlice.reducer;