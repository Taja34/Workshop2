import React from 'react'
import {useNavigate, Link, Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import fondoTech from '../assets/technology/background-technology-desktop.jpg'


const Technology = () => {
  return (
    <>
    <section>
    <figure> <img src={fondoTech} className='fondoPrincipal'></img></figure>
    <span className='title_technology'><strong>03</strong> SPACE LAUNCH 101</span>
    <div className='pages_technology'>
        <Link to='launch' className='page_launch'>1</Link>
        <Link to='spaceport' className='page_spaceport'>2</Link>
        <Link to='capsule' className='page_capsule'>3</Link>
    </div>
    </section>
    <Outlet/>
    </>
  )
}

export default Technology