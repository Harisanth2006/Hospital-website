import React from 'react'
import {useState} from 'react'
import './navbar.css'
import menu from "../../assets/logos/menu.svg"
import { NavLink } from 'react-router-dom'
function navbar() {
    const [active,setActive]= useState(false);
    const toggle= ()=>{
        setActive(!active);
    }
  return (
    <div className='nav_container'>
        <section className='nav_item_right'>
       <img src="./vite.svg" alt="logo" className='logo'/> 
        <h2 className='nav_tite'>City hospital</h2>
        </section>
        <section className={active ? 'nav_item_left_active':'nav_item_left'}>
        <NavLink to="/"end className={({isActive})=>(isActive ? 'link_active':'link')}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>(isActive ? 'link_active':'link')}>about</NavLink>
        <NavLink to="/departments" className={({isActive})=>(isActive ? 'link_active':'link')}>Deparments</NavLink>
        <NavLink to="/doctor" className={({isActive})=>(isActive ? 'link_active':'link')}>Doctor</NavLink>
        {/* <a href="" className='link'>Doctors</a> */}
        <a href="" className='link'>contact</a>
        </section>
        <img src={menu} alt="menu" className='nav_menu' onClick={toggle}/>
    </div>
  )
}

export default navbar
