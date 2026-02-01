import React from 'react'
import './card_dept.css'
import cardio from "../../assets/logos/cardiology.svg"
import ModalDept from '../modal_dept/modal_dept'
import {useState} from 'react'
function card_dept({logo,title,description,about,services}) {
  const [openModal,setOpenModal] = useState(false);
  return (
    <div className='card_dept_conatiner' onClick={() => setOpenModal(!openModal)}>
      <img src={logo} alt="cardio" className='card_dept_img'/>
      <h2 className='card_dept_title'>{title}</h2>
      <p className='card_dept_description'>{description}</p>
      <ModalDept open={openModal} close={setOpenModal} logo={logo} title={title} about={about} service={services}/>
    </div>
  )
}

export default card_dept
