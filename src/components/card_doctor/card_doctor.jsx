import React from 'react'
import './card_doctor.css'
function card_doctor({name,dept}) {
  return (
    <div className='card_doctor_container'>
        <div className="card_doctor_img"> 
            <img src="/Hospital-website/banner.png" alt="doctor_image" className='doctor_image'/>
        </div>
        <h2 className='doctor_name'>{name}</h2>
        <p className='doctor_specialty'>{dept}</p>
    </div>
  )
}

export default card_doctor
