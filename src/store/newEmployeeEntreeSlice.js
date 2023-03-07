import { createSlice } from '@reduxjs/toolkit';
import { formatDate } from '../utils/controlDate';

const initialState = {
  firstNameEntree: '',
  errorFirstNameEntree : '',
  lastNameEntree: '',
  errorLastNameEntree: '',
  startDateEntree: formatDate(new Date()),
  errorStartDateEntree: '',
  departementEntree: '',
  errordepartementEntree: '',
  dateOfBirthEntree: '',
  errordateOfBirthEntree: '',
  streetEntree: '',
  cityEntree: '',
  stateEntree: '',
  zipCodeEntree: '',
  errorNewEntree: '',
};

const newEmployeeEntreeSlice = createSlice({
  name: 'newEmployeeEntree',
  initialState,
  reducers: {
    setFirstNameEntree: (state, action) => {
      state.firstNameEntree = action.payload;
    },
    setLastNameEntree: (state, action) => {
      state.lastNameEntree = action.payload;
    },
    setStartDateEntree: (state, action) => {
      state.startDateEntree = action.payload;
    },
    setDepartementEntree: (state, action) => {
      state.departementEntree = action.payload;
    },
    setDateOfBirthEntree: (state, action) => {
      state.dateOfBirthEntree = action.payload;
    },
    setStreetEntree: (state, action) => {
      state.streetEntree = action.payload;
    },
    setCityEntree: (state, action) => {
      state.cityEntree = action.payload;
    },
    setStateEntree: (state, action) => {
      state.stateEntree = action.payload;
    },
    setZipCodeEntree: (state, action) => {
      state.zipCodeEntree = action.payload;
    },
    VideInput: (state) => {
        state.firstNameEntree = '';
        state.lastNameEntree = '';
        state.startDateEntree = '';
        state.departementEntree = '';
        state.dateOfBirthEntree = '';
        state.streetEntree = '';
        state.cityEntree = '';
        state.stateEntree = '';
        state.zipCodeEntree = '';
    },
    setErrorNewEntree: (state, action) => {
      state.errorNewEntree = action.payload;
    },
    setIsLoadingNewEntree: (state, action) => {
      state.isLoadingNewEntree = action.payload;
    },
  },
});

export const {
  setFirstNameEntree,
  setLastNameEntree,
  setStartDateEntree,
  setDepartementEntree,
  setDateOfBirthEntree,
  setStreetEntree,
  setCityEntree,
  setStateEntree,
  setZipCodeEntree,
  VideInput,
  setErrorNewEntree,
  setIsLoadingNewEntree,
} = newEmployeeEntreeSlice.actions;

export default newEmployeeEntreeSlice;

