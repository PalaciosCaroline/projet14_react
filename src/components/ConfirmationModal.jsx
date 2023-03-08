import React from 'react'
import { FaTimes} from 'react-icons/fa';

export default function ConfirmationModal({setIsModalOpen}) {
  
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (   
        <div className='confirmationModal'>
            <button className='btn_closeModal' onClick={closeModal}><FaTimes className='btn_closeModal_icon'/></button>
            <h2>Successful registration of the new Employee!</h2> 
        </div>
    )
}




