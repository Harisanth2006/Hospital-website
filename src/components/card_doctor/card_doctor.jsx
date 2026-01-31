import React from 'react'
import './card_doctor.css'
import ModalDoctor from '../modal_doctor/modal_doctor'
import {useState,useEffect} from 'react'
function card_doctor({name,dept}) {
  const [modalActive,setModalActive] = useState(false);
  return (
    <div className='card_doctor_container' onClick={()=> setModalActive(!modalActive)}>
        <div className="card_doctor_img"> 
            <img src="/Hospital-website/banner.png" alt="doctor_image" className='doctor_image'/>
        </div>
        <h2 className='doctor_name'>{name}</h2>
        <p className='doctor_specialty'>{dept}</p>
        <ModalDoctor open={modalActive}closeModal={setModalActive}/>
    </div>
  )
}

export default card_doctor
