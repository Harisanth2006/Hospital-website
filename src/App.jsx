import { HashRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Departments from './components/departments/departments'
import Doctor from './components/doctor/doctor'
import Contact from './components/contact/contact'
function App() {
  

  return (
    <HashRouter>
    <div className='app_conatiner'>
      <Navbar/>
      <Routes>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Departments/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/departments' element={<Departments/>}/>
      <Route path='/doctor' element={<Doctor/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    </HashRouter>
  )
}

export default App
