import React, {useState} from 'react'
import { states } from '../utils/states'
import { setStateEntree} from '../store/newEmployeeEntreeslice';
import { useDispatch } from 'react-redux';

export default function SelectState() {
    // const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    function handleStateChange(event) {
        dispatch(setStateEntree(event.target.value));
    }

  return (
    <div>
        <label for="state">State</label>
        <select id="state" name="state" onChange={handleStateChange}>
            <option value="">Select a state</option>
            {states.map(state => (
                <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
            ))}
        </select>
    </div>
  )
}
