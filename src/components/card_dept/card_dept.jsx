import React from 'react'
import './card_dept.css'
import cardio from "../../assets/logos/cardiology.svg"

function card_dept({logo,title,description}) {
  return (
    <div className='card_dept_conatiner'>
      <img src={logo} alt="cardio" className='card_dept_img'/>
      <h2 className='card_dept_title'>{title}</h2>
      <p className='card_dept_description'>{description}</p>
    </div>
  )
}

export default card_dept
