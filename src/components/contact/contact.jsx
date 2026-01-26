import React from 'react'
import "./contact.css"
import call from "../../assets/logos/call.svg"
import clock from "../../assets/logos/clock.svg"
import appoinment from "../../assets/logos/appoinment.svg"
import add_call from "../../assets/logos/add_call.svg"
import address from "../../assets/logos/address.svg"
function contact() {
  return (
    <div className='contact_conatiner'>
      <section  className='contact_hero_section'>
       <div className="contact_hero_content">
        <h1 className='contact_hero_title'>Get In Touch With Us</h1>
        <p className='contact_hero_description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi vero voluptatem adipisci sunt? Velit porro fugit nulla possimus enim? Saepe dignissimos sed, similique architecto esse aliquam officiis odit exercitationem tempora?</p>
        <h2 className='contact_hero_speciality'><img src={clock} alt="time logo" className='contact_hero_clock_logo'/>24/7</h2>
        <button className='contact_hero_btn'><img src={call} alt="Logo"/>Emergency</button>
      </div>
      <div className='contact_hero_img'>
        <img src="/Hospital-website/banner_4.svg" alt="banner img" className='contact_hero_banner_img'/>
      </div>
      </section>
      <section className='contact_info_section'>
        <h2 className='contact_info_title'>Contact Information</h2>
        <p className='contact_info_description'>Reach out to the specific department you need directly.</p>
        <div className="contact_info_card_container">
          <div className="contact_info_card">
            <img src={add_call} alt="logo" />
            <h3 className='contact_info_card_title'>General Enquiries</h3>
            <p className='contact_info_card_description'>For general questions and Enquiries</p>
            <p className='contact_info_card_number'>123 456 7890</p>
          </div>
          <div className="contact_info_card">
            <img src={appoinment} alt="logo" />
            <h3 className='contact_info_card_title'>Appoinments</h3>
            <p className='contact_info_card_description'>Schedule,reschedule or cancel Appoinments</p>
            <p className='contact_info_card_number'>123 456 7890</p>
          </div>
        </div>
      </section>
      <section className='contact_location_section'>
        <div className="contact_location_conatiner">
          <h2 className='contact_location_title'>Location & Address</h2>
          <p className='contact_location_description'>Visit at our Hospital when you need.. avilable for you 24/7</p>
          <div className="contact_location_gmap_conatiner">
            {/* <iframe src="" frameborder="" className='contact_location_gmap'></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.7802495573395!2d76.01551386117045!3d11.814172493881772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5dc203cf06821%3A0xc9ca2c53e0c6693e!2sVincent%20Giri%20Hospital!5e0!3m2!1sen!2sin!4v1769421379360!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='contact_location_gmap' title='Hosital location on google map'></iframe>
            <img src={address} alt="location_logo" className='contact_location_address_logo'/>
            <address className='contact_location_address'>
              <span className='contact_location_address_title'>City General Hospital</span>
              <br/>
              123 Health Ave, Medical District
              <br/>
              Imaginary world 123
            </address>
          </div>
        </div>
      </section>
    </div>
  )
}

export default contact
