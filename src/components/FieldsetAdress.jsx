import React from 'react'
import SelectState from './SelectState'
import { setStreetEntree, setCityEntree, setZipCodeEntree} from './../store/newEmployeeEntreeSlice';
import { useDispatch } from 'react-redux';

export default function FieldsetAdress() {
  const dispatch = useDispatch();
  const handleStreetChange = (e) => dispatch(setStreetEntree(e.target.value));
  const handleCityChange = (e) => dispatch(setCityEntree(e.target.value));
  const handleZipCodeChange = (e) => dispatch(setZipCodeEntree(e.target.value));

  return (
    <div>
        <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" onChange={handleStreetChange}/>

            <label htmlFor="city">City</label>
            <input id="city" type="text" onChange={handleCityChange}/>

           <SelectState/>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" onChange={handleZipCodeChange}/>
        </fieldset>
    </div>
  )
}
