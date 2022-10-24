import React from 'react'
import { useNavigate } from 'react-router-dom'
import human from '../../assets/crew/image-douglas-hurley.png'
import './crew.scss'

const Commander = () => {
  let crew = {
    "name": "DOUGLAS HURLEY",
    "role": "COMMANDER",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  }

  return (
    <>

 <aside className='crew'> 
 <article className='crew__role'>{crew.role}</article>
 <article className='crew__name'>{crew.name}</article>
 <article className='crew__bio'>{crew.bio}</article>

</aside>
 <img src={human} className='person'/>

    </>
  )
}

export default Commander