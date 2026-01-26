import React from 'react'
import './home.css'
import Card_dept from '../card_dept/card_dept'
import {dept_data} from "../../assets/data/data.js"
import Card_doctor from '../card_doctor/card_doctor.jsx'
import call_add from "../../assets/logos/add_call.svg"
import call from "../../assets/logos/call.svg"
import location from "../../assets/logos/location.svg"
import mail from "../../assets/logos/mail.svg"
import {doctor_data} from "../../assets/data/data.js"
function home() {
  return (
    <div className='home_conatiner'>
      {/* home banner section */}
      <section className='home_banner'>
        <div className='home_left_content'>
            <h1 className='home_title'>Your Health,Our Priority </h1>
            <p className='home_about'>Experince word class healthcare service with personal touch.Our dedicated team is here for you 24/7.</p>
        <div className='home_btn'>
            <button className='home_btn1'>Find a Doctor</button>
            <button className='home_btn2'>Emergency Services</button>
        </div>
        </div>

        <div className="home_banner_img">
            <img src="/Hospital-website/banner.png" alt="banner" className='banner_img'/>
        </div>
      </section>
      {/* home department section */}
      <section className='home_dept'>
         <h1 className='home_dept_title'>Our medical Departments</h1>
          <p className='home_dept_description'>comprehensive care across specialized fields to ensure your well-being</p>
          <div className="home_cards_dept">
          {
            dept_data.map((e)=>(<Card_dept logo={e.logo} title={e.title} description={e.description}/>))          
          }
          
        </div>
      </section>
      {/* home doctors section */}
      <section className='home_doctors'>
        <h1 className='home_doctors_title'>Meet Our Specialists</h1>
        <p className='home_doctors_description'>Meet our team of experienced and dedicated healthcare professionals</p>
        <div className="home_cards_doctor">
            {/* <Card_doctor/>
            <Card_doctor/>
            <Card_doctor/> */
            doctor_data.map((e)=>(<Card_doctor name={e.name} dept={e.dept}/>))}
        </div>
      </section>
      {/* home contact section */}
      <section className='home_contact_conatiner'>
        <img src={call_add} alt="contact_img" className='home_contact_img' />
        <h1 className='home_contact_title'>Need Immediate Assistance?</h1>
        <p className='home_contact_decription'>Our Emergency department is open 24 hours a day, 7 days a week. For medical emergencies, please call us immediately.</p>
          <button className='home_contact_emergency_button'><img src={call} alt="call_icon"/>+91 123-456-7890</button>
      </section>
      {/* home footer section */}
      <section className='home_footer'>
        <div className="footer_hospital_info">
          <h2 className='footer_hospital_title'><img src="./vite.svg" alt="logo" className='footer_hospital_logo'/>City General Hospital</h2>
          <p className='footer_hospital_description'>providing quality healthcare.We are committed to patient safety and excellence..</p>
        </div>

        <div className="footer_contact_us">
          <h2 className='footer_contact-title'>Contact Us</h2>
          <address className='footer_items'><img src={location} alt="location_logo"  className='footer_logo'/>  address</address>
          <p className='footer_items'><img src={mail} alt="mail_logo" className='footer_logo'/>   E mail</p>
          <p className='footer_items'><img src={call_add} alt="call_logo"  className='footer_logo' />  +91 123 456 7890</p>
        </div>
      </section>
    </div>
  )
}

export default home
