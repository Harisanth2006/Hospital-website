import React from 'react'
import './doctor.css'
import {useState} from 'react'
import {doctor_data} from "../../assets/data/data.js"
import Card_doctor from '../card_doctor/card_doctor.jsx'
function doctor() {
    const [Select_doctor,setSelect_doctor]=useState("All");
    const doctors=Select_doctor==="All"?doctor_data:doctor_data.filter(e => e.dept===Select_doctor);
  return (
    <div className='doctor_container'>
      <section className='doctor_hero_section'>
        <h1 className='doctor_hero_title'>Our Specialists</h1>
        <p className='doctor_hero_description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero fuga, asperiores dolores aperiam</p>
      </section>
      <section className='doctor_menu_section'>
        <div className='doctor_menu_container'>       
            <button className='doctor_menu_button'onClick={()=>setSelect_doctor("All")}>All departments</button>
            <button className='doctor_menu_button'onClick={()=>setSelect_doctor("Cardiology")}>Cardiology</button>
            <button className='doctor_menu_button'onClick={()=>setSelect_doctor("Neurology")}>Neurology</button>
            <button className='doctor_menu_button'onClick={()=>setSelect_doctor("Pediatrics")}>Pediatric</button>
            <button className='doctor_menu_button'onClick={()=>setSelect_doctor("Orthopedics")}>Orthopedic</button>
        </div>
      </section>
       <div className="doctor_list">
            {
               doctor_data.map((e)=>(<Card_doctor img={e.img} name={e.name} dept={e.dept} education={e.education} experince={e.experience}
            language={e.language} about={e.about} day={e.availability.days} time={e.availability.time} available={e.availability.today} variant="large"/>))
            }
        </div>
    </div>
  )
}

export default doctor
