import React, {useState} from 'react'
import FormNewEmployee from '../components/FormNewEmployee'
import ConfirmationModal from '../components/ConfirmationModal';
import { NavLink } from 'react-router-dom'


export default function NewEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

    function handleSaveEmployee() {
      //confirmation
      setIsModalOpen(true);
    }

  return (
    <main>
       <div >
          <h1 class="titleNewUser">HRnet</h1>
          <NavLink to="/listemployees" className="linkNewUser">View Current Employees</NavLink>
           
      </div>
      {!isModalOpen &&        
        (<div class="containerNewUser">
           <h2>Create Employee</h2>
            <FormNewEmployee/>
            <button className='btnFormSave' onClick={handleSaveEmployee}>Save</button>
        </div>)
      }
      
      {isModalOpen && (<ConfirmationModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />)}
    </main>
  )
}
