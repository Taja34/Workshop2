import React from 'react'
import {useNavigate, Link, Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import fondo2 from '../assets/destination/background-destination-desktop.jpg'

const Planets = () => {
  return (
    <>
   
<div> <figure> <img src={fondo2} className='fondoInicio'></img></figure></div>
    <aside className=''>
      <article className='planetTitle'>
        <p><strong className='numero'>01 </strong>PICK YOUR DESTINATION </p>
      </article>
    </aside>
    <div className='planeticas'> 
    <Link className='link' to='Luna' >MOON</Link>
    <Link className='link' to='Marte'>MARS</Link>
    <Link className='link' to='Europa'>EUROPA</Link>
      <Link className='link' to='Titan'>TITAN</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Planets