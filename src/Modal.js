import React, {useEffect} from 'react';

const Modal = ({modalContent, modalContents, closeModal}) => {

  useEffect( ()=>{
    setTimeout ( ()=>{
      closeModal()
    },3000)
  })

  return (
    <div className='text__center  mx__auto py__ mt__px'>
      <p className='success fw-bold'>{modalContent}</p>

      <p className=' danger fw-bold'>{modalContents}</p>
    </div>
  )
}

export default Modal
