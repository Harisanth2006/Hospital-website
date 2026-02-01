import React from 'react'
import './modal_dept.css'
import Card_doctor from '../card_doctor/card_doctor.jsx'
import {doctor_data} from "../../assets/data/data.js"
import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'
function modal_dept({open,close,logo,title,about,service}) {
    // const [doctor,setDoctor] = useState();
    const doctor = doctor_data.filter(e=> e.dept=== title);
  return (
    <div className={open?'modal_dept_overlay_active':'modal_dept_overlay'} onClick={() => close(false)}>
      <div className="modal_dept_container" onClick={(e) => e.stopPropagation()}>
         <button className='modal_doctor_cancel_btn' onClick={()=>close(false)}><FaTimes className='modal_doctor_cancel_icon'/></button>
        <section className='modal_dept_hero_section'>
            <div className="modal_dept_hero_icon">
                <img src={logo} alt="dept_icon" className="modal_dept_icon"/>
            </div>
            <div className="modal_dept_hero_content">
                <h1 className='modal_dept_hero_title'>{title}</h1>
                <p className='modal_dept_hero_subTitle'>heart care deartment</p>
            </div>
        </section>
        <section className='modal_dept_about_section'>
            <h2 className='modal_dept_about_title'>About Department</h2>
            <p className='modal_dept_about_description'>{about}</p>
        </section>
        <section className='modal_dept_service_section'>
            <h2 className='modal_dept_service_title'>Service Provided</h2>
            <div className="modal_dept_service_option_container">
                {
                    service.map((e)=>(<p className='modal_dept_service_option'>{e}</p>))
                }
            </div>
        </section>
        <section className='modal_dept_doctor_section'>
            <h2 className='modal_dept_doctors_title'>Available Doctors</h2>
            <div className="modal_cards_dept">
             {
             doctor.map((e)=>(<Card_doctor name={e.name} dept={e.dept} variant="small"/>))          
             }   
            </div>
        </section>
      </div>
    </div>
  )
}

export default modal_dept
