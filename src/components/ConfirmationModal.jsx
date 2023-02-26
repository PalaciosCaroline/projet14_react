import React from 'react'
import { FaTimes} from 'react-icons/fa';

export default function ConfirmationModal(props) {
  
    const closeModal = () => {
        props.setIsModalOpen(false)
    }

    return (   
        <div>
            {props.isModalOpen && (
                <div className='confirmationModal'>
                    <button className='btn_closeModal' onClick={closeModal}><FaTimes className='btn_closeModal_icon'/></button>
                    <h2>Successful registration of the new user!</h2> 
                </div>
            )}
        </div> 
    )
}




