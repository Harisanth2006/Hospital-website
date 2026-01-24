import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Departments from './components/departments/departments'
import Doctor from './components/doctor/doctor'
function App() {
  

  return (
    <BrowserRouter basename='/Hospital-website'>
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
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
