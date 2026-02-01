import React from 'react'
import './card_doctor.css'
import ModalDoctor from '../modal_doctor/modal_doctor'
import {useState,useEffect} from 'react'
import {MdMedicalServices} from "react-icons/md"
function card_doctor({img,name,dept,education,experince,language,about, available,day,time,variant}) {
  const [modalActive,setModalActive] = useState(false);
  return (
    <div className={`card_doctor_container_${variant}`} onClick={()=> setModalActive(!modalActive)}>
        {variant === "large" && (<div>
        <div className="card_doctor_img"> 
            <img src={img} alt="doctor_image" className='doctor_image'/>
        </div>
        <h2 className='doctor_name'>{name}</h2>
        <p className='doctor_specialty'>{dept}</p>
        </div>)}
        {variant === "small" && (<div className='card_doctor_container_small_subConatiner'>
        <MdMedicalServices className='card_doctor_logo'></MdMedicalServices>
        <div className="card_doctor_small_content">
          <h2 className='doctor_name_small'>{name}</h2>
        <p className='doctor_specialty_small'>{dept}</p>
        </div>
        </div>)}
        <ModalDoctor open={modalActive}closeModal={setModalActive} img ={img}name={name} dept={dept} education={education} experince={experince}  
        language={language}  about={about} available={available} day={day} time={time}/>
    </div>
  )
}

export default card_doctor
