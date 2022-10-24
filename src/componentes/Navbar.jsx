import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
    <header>
       <Link to='/'> Home</Link>
       <Link to='Planeta'> DESTINATION</Link>
       <Link > CREW</Link>
       <Link> TECHNOLOGY</Link>
    
    </header>
    <Outlet />
  </>
  )
}

export default Navbar