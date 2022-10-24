import React from 'react'
import Navbar from './Navbar'
import Fondo from '../assets/home/background-home-desktop.jpg'
const Inicio = () => {
  return (
    <>
    <></>
    <div> <figure><img src={Fondo} className='fondoInicio'/></figure></div>
       <aside className='cont'>
        <article className='cont__pretitle'>
            SO, YOU WANT TO TRAVEL TO 
        </article>
        <article className='cont__title'>
            SPACE
        </article>
        <article className='cont__text'>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </article>
       </aside>
       <div className='blanco'>EXPLORE</div>
    </>
  )
}

export default Inicio