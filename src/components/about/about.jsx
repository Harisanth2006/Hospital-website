import React from 'react'
import './about.css'
import Card_doctor from '../card_doctor/card_doctor.jsx'

function about() {
  return (
    <div className='about conatiner'>
      <section className='about_hero_section'>
        <h1 className='about_hero_title'>Compassionate care, close to home.</h1>
        <p className='about_hero_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex suscipit similique recusandae iste enim, eum a dignissimos laboriosam illum pariatur.</p>
        <div className='about_hero_img_conatiner'>
        <img src="/Hospital-website/banner_2.jpg" alt="banner img"  className='about_hero_img'/>
        </div>
        <div className="about_hero_mission">
            <h3 className='about_hero_mission_title'>Our Mission</h3>
            <p className='about_hero_mission_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam debitis unde ducimus! Architecto illo inventore, modi earum sunt non eveniet, natus praesentium, veritatis sequi minima. In ipsa dolorem doloremque.</p>
        </div>
        <div className="about_hero_vision">
             <h3 className='about_hero_vision_title'>Our Vision</h3>
            <p className='about_hero_vision_description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore voluptatem consectetur excepturi perspiciatis asperiores minus dignissimos vero. At sequi aliquam repudiandae. Nam facere quisquam ex at, natus unde eius!</p>
        </div>
      </section>

      <section className='about_features'>
        <div className='about_child'>
          <h3 className='about_child_title'>24/7 Casualty</h3>
          <p className='about_child_descreption'>Emergency care anytime</p>
        </div>
        <div className='about_child'>
          <h3 className='about_child_title'>Ultrasound Scan</h3>
          <p className='about_child_descreption'>Modern scanning technology</p>
        </div>
        <div className='about_child'>
          <h3 className='about_child_title'>Laboratory and X-ray</h3>
          <p className='about_child_descreption'>Accurate tests & imaging</p>
        </div>
      </section>
      <section className='about_leadership'>
        <h2 className='about_leadership_title'>Meet Our Leadership</h2>
        <p className='about_leadership_descrition'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates omnis veritatis veniam obcaecati.</p>
        <div className='about_leadership_cards_container'>
          <Card_doctor/>
          <Card_doctor/>
        </div>
      </section>
      <section className='about_contact'>
        <h1 className='about_conact_tite'>Connect With Us</h1>
        <p className='about_contact_description'>Our team of speacialist is ready to provide you with the personalized care you deserve</p>
        <button className='about_contact_button'>Contact Us</button>
      </section>
    </div>
  )
}

export default about
