import React from 'react'
import './departments.css'
import Card_dept from '../card_dept/card_dept'
import {dept_data} from "../../assets/data/data.js"
function departments() {
  return (
    <div className='departments_container'>
      <section className='departments_hero_section'>
        <div className='depatments_hero_content'>
        <h1 className='departments_hero_title'>
            <span className='departments_hero_title_c1'>Specialized</span>
            <br/>
            <span className='departments_hero_title_c2'>Medical</span>
            <br/>
            <span className='departments_hero_title_c3'>Excellence.</span>
        </h1>
        <p className='departments_hero_description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem fugiat quos vero eligendi asperiores.</p>
        </div>
        <div className='departments_hero_img_conatiner'>
            <img src="/Hospital-website/banner_3.avif" alt="department banner" className='department_hero_img'/>
        </div>
      </section>
      <section className='departments_dept_card_conatiner'>
        <h1 className='departments_dept_card_title'>Our Departments</h1>
         <div className="deparments_cards_dept">
          {
            dept_data.map((e)=>(<Card_dept logo={e.logo} title={e.title} description={e.description} about={e.about} services={e.service}/>))          
          }
        </div>
      </section>
      <section className='department_contact_us'>
        <div className='department_contact_us_conatiner'>
          <div className="department_contact_us_content">
          <h3 className='department_contact_us_title'>Can't find what you're looking for ?</h3>
          <p className='department_contact_us_description'>Our general practitioners are available to guid you to correct specialist.</p>
          </div>
          <button className='department_contact_us_button'>Contact Us</button>
        </div>
      </section>
    </div>
  )
}

export default departments
