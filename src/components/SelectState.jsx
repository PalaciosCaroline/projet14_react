import React, {useState} from 'react'
import { states } from '../utils/states'

export default function SelectState() {
    const [selectedValue, setSelectedValue] = useState('');

    function handleChange(event) {
        setSelectedValue(event.target.value);
    }

  return (
    <div>
        <label for="state">State</label>
        <select id="state" name="state" value={selectedValue} onChange={handleChange}>
            <option value="">Select a state</option>
            {states.map(state => (
                <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
            ))}
        </select>
    </div>
  )
}
