import React from 'react'
import SelectState from './SelectState'

export default function FieldsetAdress() {
  return (
    <div>
        <fieldset class="address">
            <legend>Address</legend>

            <label for="street">Street</label>
            <input id="street" type="text" />

            <label for="city">City</label>
            <input id="city" type="text" />

           <SelectState/>

            <label for="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
        </fieldset>
    </div>
  )
}
