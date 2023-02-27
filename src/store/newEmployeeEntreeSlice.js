import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstNameEntree: '',
  lastNameEntree: '',
  startDateEntree: '',
  departementEntree: '',
  dateOfBirthEntree: '',
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
    setNewEmployeeEntree: (state, action) => {
      const {
        firstName,
        lastName,
        startDate,
        departement,
        dateOfBirth,
        street,
        city,
        stateE,
        zipCode,
      } = action.payload;
      
      state.firstNameEntree = firstName;
      state.lastNameEntree = lastName;
      state.startDateEntree = startDate;
      state.departementEntree = departement;
      state.dateOfBirthEntree = dateOfBirth;
      state.streetEntree = street;
      state.cityEntree = city;
      state.stateEntree = stateE;
      state.zipCodeEntree = zipCode;
    },
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

export const { setFirstNameEntree, setLastNameEntree, setStartDateEntree, setDepartementEntree, setDateOfBirthEntree, setStreetEntree, setCityEntree, setStateEntree, setZipCodeEntree, VideInput, setErrorNewEntree, setIsLoadingNewEntree , setNewEmployeeEntree} = newEmployeeEntreeSlice.actions;

export default newEmployeeEntreeSlice.reducer;