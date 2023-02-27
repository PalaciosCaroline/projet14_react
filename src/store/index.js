
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newEmployeeEntreeSlice from "./newEmployeeEntreeSlice";
import employeeSlice from "./employeeSlice";

const rootReducer = combineReducers({
  employees: employeeSlice.reducer,
  newEmployeeEntree: newEmployeeEntreeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;