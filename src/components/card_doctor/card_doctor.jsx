import React from 'react'
import './card_doctor.css'
function card_doctor() {
  return (
    <div className='card_doctor_container'>
        <div className="card_doctor_img"> 
            <img src="./banner.png" alt="doctor_image" className='doctor_image'/>
        </div>
        <h2 className='doctor_name'>Dr. John Doe</h2>
        <p className='doctor_specialty'>Cardiologist</p>
    </div>
  )
}

export default card_doctor
