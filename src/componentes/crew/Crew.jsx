import React from 'react'
import {useNavigate, Link, Outlet} from 'react-router-dom'
import Navbar from '../Navbar'
import fondo3 from '../../assets/crew/background-crew-desktop.jpg'
import '../../../src/style.scss'
import circle from '../../assets/oval.png'


const Crew = () => {
  return (
    <>
   
<div> <figure> <img src={fondo3} className='fondoInicio' alt='Fondo de planeta'></img></figure></div>
    <aside className=''>
      <article className='planetTitle'>
        <p><strong className='numero'>02 </strong>MEET YOUR CREW</p>
      </article>
    </aside>
    
    <div className='btn'> 
    <Link className='crew__link' to='commander'><figure> <img src={circle}></img></figure></Link>
    <Link className='crew__link' to='missionspecialist'><figure> <img src={circle}></img></figure></Link>
    <Link className='crew__link' to='pilot'><figure> <img src={circle}></img></figure></Link>
    <Link className='crew__link' to='flightengineer'><figure> <img src={circle}></img></figure></Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Crew