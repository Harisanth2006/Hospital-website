import React from 'react'
import './modal_doctor.css'
import {useState,useEffect} from 'react'
import { FaCalendarAlt,FaClock,FaCalendarCheck,FaBriefcase,FaComments,FaTimes } from 'react-icons/fa'
function modal_doctor({open,closeModal,img,name,dept,education,experince,language,about,available,day,time}) {
   
  return (
    <div className={open?'modal_doctor_overlay_active':'modal_doctor_overlay'}>
        <div className="modal_doctor_container" onClick={(e)=>e.stopPropagation()}>
        <button className='modal_doctor_cancel_btn' onClick={()=>closeModal(false)}><FaTimes className='modal_doctor_cancel_icon'/></button>
        <section className='modal_doctor_hero_section'>
        <div className="modal_doctor_hero_img_conatiner">
            <img src={img} alt="img_logo" className='modal_doctor_hero_img'/>
        </div>
        <div className="modal_doctor_hero_content">
            <h3 className='modal_doctor_hero_title'>{name}</h3>
            <p className='modal_doctor_hero_dept'>{dept}</p>
            <p className='modal_doctor_hero_education'>{education}</p>
        </div>
        </section>
        <section className='modal_doctor_about_section'>
            <h3 className='modal_doctor_about_title'>Abut Doctor</h3>
            <p className='modal_doctor_about_description'>{about}</p>
        </section>
        <section className='modal_doctor_footer_section'>
            <div className="modal_doctor_footer_card">
                <h3 className='modal_doctor_footer_title'>Abut Doctor</h3>
                <p className='modal_doctor_footer_li'><FaCalendarAlt className='modal_doctor_footer_icon'/>{day}</p>
                <p className='modal_doctor_footer_li'><FaClock className='modal_doctor_footer_icon'/>{time}</p>
                <p className='modal_doctor_footer_li'><FaCalendarCheck className='modal_doctor_footer_icon'/>{available}</p>
            </div>
            <div className="modal_doctor_footer_card">
                <h3 className='modal_doctor_footer_title'>Abut Doctor</h3>
                <p className='modal_doctor_footer_li'><FaBriefcase className='modal_doctor_footer_icon'/> Experience: {experince}</p>
                <p className='modal_doctor_footer_li'><FaComments className='modal_doctor_footer_icon'/> Language: {language}</p>
            </div>
        </section>
        </div>
    </div>
  )
}

export default modal_doctor
