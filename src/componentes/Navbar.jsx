import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <>
    <header className='navbar'>
       <Link to='/' className='link'> <strong >00</strong> HOME</Link>
       <Link to='Marte' className='link'> <strong >01</strong> DESTINATION</Link>
       <Link to='Commander' className='link' > <strong >02</strong> CREW</Link>
       <Link className='link'> <strong >03</strong>  TECHNOLOGY</Link>
    
    </header>
    <Outlet />
  </>
  )
}

export default Navbar